import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController, ToastController, LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

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
    private plt: Platform,
    private localstorageservice: LocalstorageService,
    private router: Router,
    private fileChooser: FileChooser,
    private videoPlayer: VideoPlayer,
    private streamingMedia: StreamingMedia) { }
    
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
            text: 'Open Files',
            handler: () => {
              this.openFiles()
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
    
    openFiles = () => {
      let options: StreamingVideoOptions = {
        controls: true,
        shouldAutoClose: true,
        orientation: 'portrait'
      }
      this.fileChooser.open()
      .then( uri => {
        this.filePath.resolveNativePath(uri)
        .then(filePath => {
          console.log(filePath)
          this.streamingMedia.playVideo(filePath, options);
        })
      })
      .catch(e => console.log(e));
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
    
    openPic = (imagePath) => {
      this.localstorageservice.setImagePath(imagePath);
      this.router.navigateByUrl('/display-image')
    }
    
    startUpload = (imgEntry) => {
      this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (<FileEntry> entry).file(file => this.readFile(file))
      })
      .catch(err => { this.presentToast('Could not read file') })
    }
    
    readFile = (file: any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const formData = new FormData();
        const imgBlob = new Blob([reader.result], {
          type : file.type
        });
        formData.append('file', imgBlob, file.name);
        // this.uploadImageData(formData);
      }
    }
    
  }
  