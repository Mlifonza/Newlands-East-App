import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddSportPage } from './add-sport.page';
import { AddEventModule } from 'src/app/shared-modules/add-event.module';
var routes = [
    {
        path: '',
        component: AddSportPage
    }
];
var AddSportPageModule = /** @class */ (function () {
    function AddSportPageModule() {
    }
    AddSportPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes),
                AddEventModule
            ],
            declarations: [AddSportPage]
        })
    ], AddSportPageModule);
    return AddSportPageModule;
}());
export { AddSportPageModule };
//# sourceMappingURL=add-sport.module.js.map