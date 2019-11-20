import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JobsPage } from './jobs.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
var routes = [
    {
        path: '',
        component: JobsPage
    }
];
var JobsPageModule = /** @class */ (function () {
    function JobsPageModule() {
    }
    JobsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule
            ],
            declarations: [JobsPage]
        })
    ], JobsPageModule);
    return JobsPageModule;
}());
export { JobsPageModule };
//# sourceMappingURL=jobs.module.js.map