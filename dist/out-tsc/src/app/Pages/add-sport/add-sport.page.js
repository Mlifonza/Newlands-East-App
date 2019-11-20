import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PickerController, ToastController } from '@ionic/angular';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
var AddSportPage = /** @class */ (function () {
    function AddSportPage(location, pickerCtrl, selector, toastCtrl, fb) {
        this.location = location;
        this.pickerCtrl = pickerCtrl;
        this.selector = selector;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.sportEventDetailsForm = this.fb.group({
            'type': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'location': new FormControl('', Validators.compose([
                Validators.required
            ]))
        });
    }
    AddSportPage.prototype.ngOnInit = function () {
        this.typesOfSports = [
            'Football',
            'Rugby',
            'Cricket',
            'Hockey',
            'Boxing'
        ];
    };
    AddSportPage.prototype.save = function () {
        console.log(this.sportEventDetailsForm.value);
        console.log(this.sportEventDetailsForm.value);
        this.location.back();
    };
    AddSportPage.prototype.cancel = function () {
        this.location.back();
    };
    AddSportPage.prototype.openPicker = function () {
        var _this = this;
        this.selector.show({
            title: 'Select your type',
            positiveButtonText: 'Choose',
            negativeButtonText: 'Cancel',
            items: [
                this.typesOfSports
            ],
            defaultItems: [
                { index: 0, value: this.typesOfSports[1] }
            ]
        }).then(function (result) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var msg, toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = 'Selected ${result[0]}';
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: msg,
                                duration: 4000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AddSportPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-sport',
            templateUrl: './add-sport.page.html',
            styleUrls: ['./add-sport.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            PickerController,
            WheelSelector,
            ToastController,
            FormBuilder])
    ], AddSportPage);
    return AddSportPage;
}());
export { AddSportPage };
//# sourceMappingURL=add-sport.page.js.map