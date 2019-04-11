import { Component, OnInit } from '@angular/core';
import { Event, Images } from '../../models/interfaces';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  food: Event[];
  images: Images[];

  constructor() { }

  ngOnInit() {
    this.images = [
      { Id: 1, image: 'assets/images/FB_IMG_14791274675492794.jpg' },
      { Id: 2, image: 'assets/images/FB_IMG_14786242541477441.jpg' },
      { Id: 3, image: 'assets/images/FB_IMG_14786233358881485.jpg' }
    ]

    this.food = [
      { Id: 1, type: 'Beckys Burgers', location: 'Hambanker', time: '15:00 - 16:00',
      description: "There's a new menu in town"
      },
      { Id: 2, type: 'Lisa Chicken Wings', location: 'Saw fish', time: '14:00 - 15:00',
      description: 'Chicken wings for a really low price in stock, get them while their hot'
      }
    ]
  }

}
