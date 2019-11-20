import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TransportPage } from './transport.page';
var routes = [
    {
        path: '',
        component: TransportPage
    }
];
var TransportPageModule = /** @class */ (function () {
    function TransportPageModule() {
    }
    TransportPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TransportPage]
        })
    ], TransportPageModule);
    return TransportPageModule;
}());
export { TransportPageModule };
//# sourceMappingURL=transport.module.js.map