import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HealthPage } from './health.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
var routes = [
    {
        path: '',
        component: HealthPage
    }
];
var HealthPageModule = /** @class */ (function () {
    function HealthPageModule() {
    }
    HealthPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule
            ],
            declarations: [HealthPage]
        })
    ], HealthPageModule);
    return HealthPageModule;
}());
export { HealthPageModule };
//# sourceMappingURL=health.module.js.map