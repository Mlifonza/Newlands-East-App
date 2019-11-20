import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChurchPage } from './church.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
var routes = [
    {
        path: '',
        component: ChurchPage
    }
];
var ChurchPageModule = /** @class */ (function () {
    function ChurchPageModule() {
    }
    ChurchPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule
            ],
            declarations: [ChurchPage]
        })
    ], ChurchPageModule);
    return ChurchPageModule;
}());
export { ChurchPageModule };
//# sourceMappingURL=church.module.js.map