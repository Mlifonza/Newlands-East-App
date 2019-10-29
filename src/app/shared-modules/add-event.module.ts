import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from '../components/add-event/add-event.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [AddEventComponent, CommonModule]
})
export class AddEventModule { }
