import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HealthPage } from './health.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';

const routes: Routes = [
  {
    path: '',
    component: HealthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DisplayEventFeedsModule
  ],
  declarations: [HealthPage]
})
export class HealthPageModule {}
