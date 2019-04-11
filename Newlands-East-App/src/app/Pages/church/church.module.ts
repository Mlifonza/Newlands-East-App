import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
//import { DisplayEventFeedsPageModule } from '../display-event-feeds/display-event-feeds.module';
import { DisplayEventFeedsPage } from '../display-event-feeds/display-event-feeds.page';

import { IonicModule } from '@ionic/angular';

import { ChurchPage } from './church.page';

const routes: Routes = [
  {
    path: '',
    component: ChurchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChurchPage]
})
export class ChurchPageModule {}
