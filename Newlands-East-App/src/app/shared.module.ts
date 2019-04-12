import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DisplayEventFeedComponent } from './Components/display-event-feed/display-event-feed.component';

@NgModule({
  declarations: [DisplayEventFeedComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [DisplayEventFeedComponent, CommonModule]
})
export class SharedModule { }