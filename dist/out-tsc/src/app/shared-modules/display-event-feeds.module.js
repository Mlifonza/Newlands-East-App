import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DisplayEventFeedsComponent } from '../components/display-event-feeds/display-event-feeds.component';
import { FormsModule } from '@angular/forms';
var DisplayEventFeedsModule = /** @class */ (function () {
    function DisplayEventFeedsModule() {
    }
    DisplayEventFeedsModule = tslib_1.__decorate([
        NgModule({
            declarations: [DisplayEventFeedsComponent],
            imports: [
                CommonModule,
                IonicModule,
                FormsModule
            ],
            exports: [DisplayEventFeedsComponent, CommonModule]
        })
    ], DisplayEventFeedsModule);
    return DisplayEventFeedsModule;
}());
export { DisplayEventFeedsModule };
//# sourceMappingURL=display-event-feeds.module.js.map