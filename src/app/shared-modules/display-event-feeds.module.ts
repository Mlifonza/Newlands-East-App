import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DisplayEventFeedsComponent } from '../components/display-event-feeds/display-event-feeds.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisplayEventFeedsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [DisplayEventFeedsComponent, CommonModule]
})
export class DisplayEventFeedsModule { }