import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TraditionPage } from './tradition.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';

const routes: Routes = [
  {
    path: '',
    component: TraditionPage
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
  declarations: [TraditionPage]
})
export class TraditionPageModule {}
