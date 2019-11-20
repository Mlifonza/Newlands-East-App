import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActionSheetController, ToastController, LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
var STORAGE_KEY = 'my_images';
var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(camera, file, filePath, webView, actionsheetcntrl, toastCntrl, ref, storage, loadingCntrl, plt, localstorageservice, router, fileChooser, videoPlayer) {
        var _this = this;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.webView = webView;
        this.actionsheetcntrl = actionsheetcntrl;
        this.toastCntrl = toastCntrl;
        this.ref = ref;
        this.storage = storage;
        this.loadingCntrl = loadingCntrl;
        this.plt = plt;
        this.localstorageservice = localstorageservice;
        this.router = router;
        this.fileChooser = fileChooser;
        this.videoPlayer = videoPlayer;
        this.images = [];
        this.loadStoredImages = function () {
            _this.storage.get(STORAGE_KEY).then(function (images) {
                if (images) {
                    var arr = JSON.parse(images);
                    _this.images = [];
                    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                        var img = arr_1[_i];
                        var filePath = _this.file.dataDirectory + img;
                        var resPath = _this.pathForImage(img);
                        _this.images.push({ name: img, path: resPath, filePath: filePath });
                    }
                }
            });
        };
        this.pathForImage = function (img) {
            if (img == null) {
                return '';
            }
            else {
                var converted = _this.webView.convertFileSrc(img);
                return converted;
            }
        };
        this.capture = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                options = {
                    quality: 100,
                    destinationType: this.camera.DestinationType.FILE_URI,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE
                };
                this.camera.getPicture(options).then(function (imageData) {
                    console.log('imageData', imageData);
                    _this.base64Image = imageData;
                }, function (err) { console.log(err); });
                return [2 /*return*/];
            });
        }); };
        this.selectImage = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var action;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionsheetcntrl.create({
                            header: 'Select an image source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePictures(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePictures(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Open Files',
                                    handler: function () {
                                        _this.openFiles();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        action = _a.sent();
                        return [4 /*yield*/, action.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.openFiles = function () {
            _this.fileChooser.open()
                .then(function (uri) { return console.log(uri); })
                .catch(function (e) { return console.log(e); });
            _this.videoPlayer;
        };
        this.takePictures = function (sourceType) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                options = {
                    quality: 100,
                    sourceType: sourceType,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };
                this.camera.getPicture(options).then(function (imagePath) {
                    if (_this.plt.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                        _this.filePath.resolveNativePath(imagePath)
                            .then(function (filePath) {
                            var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                            var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                        }, function (err) { _this.presentToast('Error taking photo.'); console.log('err', err); });
                    }
                    else {
                        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                        _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                    }
                }, function (err) { _this.presentToast('Error taking photo.'); console.log('err', err); });
                return [2 /*return*/];
            });
        }); };
        this.createFileName = function () {
            var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
            return newFileName;
        };
        this.copyFileToLocalDir = function (namePath, currentName, newFileName) {
            _this.file.copyFile(namePath, currentName, _this.file.dataDirectory, newFileName).then(function (success) {
                _this.updateStoredImages(newFileName);
            }, function (error) {
                _this.presentToast('Error while storing file.');
            });
        };
        this.updateStoredImages = function (name) {
            _this.storage.get(STORAGE_KEY).then(function (images) {
                var arr = JSON.parse(images);
                if (!arr) {
                    var newImages = [name];
                    _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
                }
                else {
                    arr.push(name);
                    _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
                }
                var filePath = _this.file.dataDirectory + name;
                var resPath = _this.pathForImage(filePath);
                var newEntry = {
                    name: name,
                    path: resPath,
                    filePath: filePath
                };
                _this.images = [newEntry].concat(_this.images);
                console.log('newEntry', _this.images);
                _this.ref.detectChanges(); // trigger change detection cycle
            });
        };
        this.openPic = function (imagePath) {
            _this.localstorageservice.setImagePath(imagePath);
            _this.router.navigateByUrl('/display-image');
        };
        this.startUpload = function (imgEntry) {
            _this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
                .then(function (entry) {
                entry.file(function (file) { return _this.readFile(file); });
            })
                .catch(function (err) { _this.presentToast('Could not read file'); });
        };
        this.readFile = function (file) {
            var reader = new FileReader();
            reader.onloadend = function () {
                var formData = new FormData();
                var imgBlob = new Blob([reader.result], {
                    type: file.type
                });
                formData.append('file', imgBlob, file.name);
                // this.uploadImageData(formData);
            };
        };
    }
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.storage.clear();
            _this.loadStoredImages();
        });
    };
    AddEventComponent.prototype.presentToast = function (text) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCntrl.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddEventComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-event',
            templateUrl: './add-event.component.html',
            styleUrls: ['./add-event.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera,
            File,
            FilePath,
            WebView,
            ActionSheetController,
            ToastController,
            ChangeDetectorRef,
            Storage,
            LoadingController,
            Platform,
            LocalstorageService,
            Router,
            FileChooser,
            VideoPlayer])
    ], AddEventComponent);
    return AddEventComponent;
}());
export { AddEventComponent };
//# sourceMappingURL=add-event.component.js.map