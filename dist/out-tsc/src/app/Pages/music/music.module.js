import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MusicPage } from './music.page';
var routes = [
    {
        path: '',
        component: MusicPage
    }
];
var MusicPageModule = /** @class */ (function () {
    function MusicPageModule() {
    }
    MusicPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MusicPage]
        })
    ], MusicPageModule);
    return MusicPageModule;
}());
export { MusicPageModule };
//# sourceMappingURL=music.module.js.map