import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.page.html',
  styleUrls: ['./add-sport.page.scss'],
})
export class AddSportPage implements OnInit {

  typesOfSports: any[];

  constructor() { }

  ngOnInit() {
    this.typesOfSports = [
      'Football',
      'Rugby',
      'Cricket',
      'Hockey',
      'Boxing'
    ]
  }

}
