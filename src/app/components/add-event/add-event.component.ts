import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController, ToastController, LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  
  images = [];
  base64Image;
  constructor(private camera: Camera,
    private file: File,
    private filePath: FilePath,
    private webView: WebView,
    private actionsheetcntrl: ActionSheetController,
    private toastCntrl: ToastController,
    private ref: ChangeDetectorRef,
    private storage: Storage,
    private loadingCntrl: LoadingController,
    private plt: Platform) { }
    
    ngOnInit() {
      this.plt.ready().then(() => {
        this.storage.clear();
        this.loadStoredImages();
      })
    }
    
    loadStoredImages = () => {
      this.storage.get(STORAGE_KEY).then(images => {
        if (images) {
          let arr = JSON.parse(images);
          this.images = [];
          for (let img of arr) {
            let filePath = this.file.dataDirectory + img;
            let resPath = this.pathForImage(img);
            this.images.push({ name: img, path: resPath, filePath: filePath });
          }
        }
      })
    }
    
    pathForImage = (img) => {
      if (img == null) {
        return '';
      } else {
        let converted = this.webView.convertFileSrc(img);
        return converted;
      }
    }

    async presentToast(text) {
      const toast = await this.toastCntrl.create({
          message: text,
          position: 'bottom',
          duration: 3000
      });
      toast.present();
    }
    
    capture = async () => {
      const options: CameraOptions =  {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then(imageData => {
        console.log('imageData', imageData)
        this.base64Image = imageData
      }, err => { console.log(err) })
    }
    
    selectImage = async () => {
      let action = await this.actionsheetcntrl.create({
        header: 'Select an image source',
        buttons: [
          {
            text: 'Load from Library',
            handler: () => {
              this.takePictures(this.camera.PictureSourceType.PHOTOLIBRARY)
            }
          },
          {
            text: 'Use Camera',
            handler: () => {
              this.takePictures(this.camera.PictureSourceType.CAMERA)
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      })
      
      await action.present();
    }
    
    takePictures = async (sourceType: PictureSourceType) => {
      var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
      
      this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          }, err => { this.presentToast('Error taking photo.'); console.log('err', err) });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
      }, err => { this.presentToast('Error taking photo.'); console.log('err', err) });
    }
    
    createFileName = () => {
      var d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
      return newFileName;
    }
    
    copyFileToLocalDir = (namePath, currentName, newFileName) => {
      this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
      }, error => {
        this.presentToast('Error while storing file.');
      });
    }
    
    updateStoredImages = (name) => {
      this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
        } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
        }
        
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
        
        let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
        };
        
        this.images = [newEntry, ...this.images];
        console.log('newEntry', this.images)
        this.ref.detectChanges(); // trigger change detection cycle
      });
    }
    
  }
  