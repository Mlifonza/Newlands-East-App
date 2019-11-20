import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SportsPage } from './sports.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
import { AddEventComponent } from 'src/app/components/add-event/add-event.component';
import { AddEventModule } from 'src/app/shared-modules/add-event.module';
var routes = [
    {
        path: '',
        component: SportsPage
    }
];
var SportsPageModule = /** @class */ (function () {
    function SportsPageModule() {
    }
    SportsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                DisplayEventFeedsModule,
                AddEventModule
            ],
            declarations: [SportsPage],
            entryComponents: [AddEventComponent]
        })
    ], SportsPageModule);
    return SportsPageModule;
}());
export { SportsPageModule };
//# sourceMappingURL=sports.module.js.map