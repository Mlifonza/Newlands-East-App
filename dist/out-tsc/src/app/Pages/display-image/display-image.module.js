import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DisplayImagePage } from './display-image.page';
var routes = [
    {
        path: '',
        component: DisplayImagePage
    }
];
var DisplayImagePageModule = /** @class */ (function () {
    function DisplayImagePageModule() {
    }
    DisplayImagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DisplayImagePage]
        })
    ], DisplayImagePageModule);
    return DisplayImagePageModule;
}());
export { DisplayImagePageModule };
//# sourceMappingURL=display-image.module.js.map