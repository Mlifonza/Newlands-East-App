import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FestivalsPage } from './festivals.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
var routes = [
    {
        path: '',
        component: FestivalsPage
    }
];
var FestivalsPageModule = /** @class */ (function () {
    function FestivalsPageModule() {
    }
    FestivalsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule
            ],
            declarations: [FestivalsPage]
        })
    ], FestivalsPageModule);
    return FestivalsPageModule;
}());
export { FestivalsPageModule };
//# sourceMappingURL=festivals.module.js.map