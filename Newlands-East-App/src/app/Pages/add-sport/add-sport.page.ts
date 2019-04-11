import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PickerController, ToastController } from '@ionic/angular';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.page.html',
  styleUrls: ['./add-sport.page.scss'],
})
export class AddSportPage implements OnInit {
  
  typesOfSports: any[];
  sportEventDetailsForm: FormGroup;
  
  constructor(
    private location: Location,
    private pickerCtrl: PickerController,
    private selector: WheelSelector,
    private toastCtrl: ToastController,
    public fb: FormBuilder
    ) { 
      this.sportEventDetailsForm = this.fb.group({
        'type': new FormControl('', Validators.compose([
          Validators.required
        ])),
        'location': new FormControl('', Validators.compose([
          Validators.required
        ]))
      })
    }
    
    ngOnInit() {
      this.typesOfSports = [
        'Football',
        'Rugby',
        'Cricket',
        'Hockey',
        'Boxing'
      ]
    }

    save() {
      console.log(this.sportEventDetailsForm.value);
      console.log(this.sportEventDetailsForm.value)
      this.location.back();
    }
    
    cancel() {
      this.location.back();
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
      }).then(async result => {
        let msg = 'Selected ${result[0]}';
        let toast = await this.toastCtrl.create({
          message: msg,
          duration: 4000
        });
        toast.present();
      });
    }
    
  }
  