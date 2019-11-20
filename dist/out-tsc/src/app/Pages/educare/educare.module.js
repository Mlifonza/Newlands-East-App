import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EducarePage } from './educare.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
var routes = [
    {
        path: '',
        component: EducarePage
    }
];
var EducarePageModule = /** @class */ (function () {
    function EducarePageModule() {
    }
    EducarePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule
            ],
            declarations: [EducarePage]
        })
    ], EducarePageModule);
    return EducarePageModule;
}());
export { EducarePageModule };
//# sourceMappingURL=educare.module.js.map