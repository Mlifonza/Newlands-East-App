import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EducarePage } from './educare.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';

const routes: Routes = [
  {
    path: '',
    component: EducarePage
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
  declarations: [EducarePage]
})
export class EducarePageModule {}
