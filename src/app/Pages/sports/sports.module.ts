import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SportsPage } from './sports.page';

import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';
import { AddEventComponent } from 'src/app/components/add-event/add-event.component';
import { AddEventModule } from 'src/app/shared-modules/add-event.module';

const routes: Routes = [
  {
    path: '',
    component: SportsPage
  }
];

@NgModule({
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
export class SportsPageModule {}
