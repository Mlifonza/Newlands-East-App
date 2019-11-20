import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WeatherPage } from './weather.page';
var routes = [
    {
        path: '',
        component: WeatherPage
    }
];
var WeatherPageModule = /** @class */ (function () {
    function WeatherPageModule() {
    }
    WeatherPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WeatherPage]
        })
    ], WeatherPageModule);
    return WeatherPageModule;
}());
export { WeatherPageModule };
//# sourceMappingURL=weather.module.js.map