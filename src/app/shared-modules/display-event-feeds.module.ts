import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DisplayEventFeedsComponent } from '../components/display-event-feeds/display-event-feeds.component';

@NgModule({
  declarations: [DisplayEventFeedsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [DisplayEventFeedsComponent, CommonModule]
})
export class DisplayEventFeedsModule { }