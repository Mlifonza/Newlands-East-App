import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodPage } from './food.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';

const routes: Routes = [
  {
    path: '',
    component: FoodPage
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
  declarations: [FoodPage]
})
export class FoodPageModule {}
