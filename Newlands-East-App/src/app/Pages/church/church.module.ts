import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChurchPage } from './church.page';
import { DisplayEventFeedsModule } from '../../shared-modules/display-event-feeds.module';

const routes: Routes = [
  {
    path: '',
    component: ChurchPage
  }
];

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DisplayEventFeedsModule
  ],
  declarations: [ChurchPage]
})
export class ChurchPageModule {}
