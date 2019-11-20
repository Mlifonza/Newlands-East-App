import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from '../components/add-event/add-event.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
var AddEventModule = /** @class */ (function () {
    function AddEventModule() {
    }
    AddEventModule = tslib_1.__decorate([
        NgModule({
            declarations: [AddEventComponent],
            imports: [
                CommonModule,
                IonicModule,
                FormsModule
            ],
            exports: [AddEventComponent, CommonModule]
        })
    ], AddEventModule);
    return AddEventModule;
}());
export { AddEventModule };
//# sourceMappingURL=add-event.module.js.map