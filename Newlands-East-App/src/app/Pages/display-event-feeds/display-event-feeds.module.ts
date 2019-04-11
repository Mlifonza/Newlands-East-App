import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisplayEventFeedsPage } from './display-event-feeds.page';
import { DisplayEventModule } from '../../display-event/display-event.module';
import { SportsPageModule } from '../sports/sports.module';
import { ChurchPageModule } from '../church/church.module';

import { SportsPage } from '../sports/sports.page';
import { ChurchPage } from '../church/church.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayEventFeedsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class DisplayEventFeedsPageModule {}
