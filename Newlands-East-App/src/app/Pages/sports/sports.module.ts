import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DisplayEventFeedsPage } from '../display-event-feeds/display-event-feeds.page';
//import { DisplayEventFeedsPageModule } from '../display-event-feeds/display-event-feeds.module';

import { SportsPage } from './sports.page';

const routes: Routes = [
  {
    path: '',
    component: SportsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SportsPage]
})
export class SportsPageModule {}
