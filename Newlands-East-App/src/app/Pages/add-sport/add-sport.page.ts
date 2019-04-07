import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PickerController, ToastController } from '@ionic/angular';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.page.html',
  styleUrls: ['./add-sport.page.scss'],
})
export class AddSportPage implements OnInit {

  typesOfSports: any[];

  constructor(
    private location: Location,
    private pickerCtrl: PickerController,
    private selector: WheelSelector,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
    this.typesOfSports = [
      'Football',
      'Rugby',
      'Cricket',
      'Hockey',
      'Boxing'
    ]
  }

  openPicker() {
    this.selector.show({
      title: 'Select your type',
      positiveButtonText: 'Choose',
      negativeButtonText: 'Cancel',
      items: [
        this.typesOfSports
      ],
      defaultItems: [
        { index: 0, value: this.typesOfSports[1] }
      ]
    }).then(result => {
      let msg = 'Selected ${result[0]}';
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 4000
      })
    });
  }

  save() {
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}
