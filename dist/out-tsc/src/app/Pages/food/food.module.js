import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FoodPage } from './food.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
var routes = [
    {
        path: '',
        component: FoodPage
    }
];
var FoodPageModule = /** @class */ (function () {
    function FoodPageModule() {
    }
    FoodPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule
            ],
            declarations: [FoodPage]
        })
    ], FoodPageModule);
    return FoodPageModule;
}());
export { FoodPageModule };
//# sourceMappingURL=food.module.js.map