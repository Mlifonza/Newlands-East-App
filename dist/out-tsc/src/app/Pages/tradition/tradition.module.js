import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TraditionPage } from './tradition.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
var routes = [
    {
        path: '',
        component: TraditionPage
    }
];
var TraditionPageModule = /** @class */ (function () {
    function TraditionPageModule() {
    }
    TraditionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule
            ],
            declarations: [TraditionPage]
        })
    ], TraditionPageModule);
    return TraditionPageModule;
}());
export { TraditionPageModule };
//# sourceMappingURL=tradition.module.js.map