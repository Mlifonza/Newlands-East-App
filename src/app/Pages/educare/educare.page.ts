import { Component, OnInit } from '@angular/core';
import { Event, Images } from '../../models/interfaces';

@Component({
  selector: 'app-educare',
  templateUrl: './educare.page.html',
  styleUrls: ['./educare.page.scss'],
})
export class EducarePage implements OnInit {

  educare: Event[];
  images: Images[];

  constructor() { }

  ngOnInit() {
    this.images = [
      { Id: 1, image: 'assets/images/FB_IMG_14791578842662791.jpg' },
      { Id: 2, image: 'assets/images/FB_IMG_14791579119278276.jpg' },
      { Id: 3, image: 'assets/images/FB_IMG_14791581992254811.jpg' }
    ]

    this.educare = [
      { Id: 1, type: 'Hillview Secondary', location: 'Hillview grounds', time: '15:00 - 16:00',
      description: 'Price giving show'
      },
      { Id: 2, type: 'N.E.S.S', location: 'N.E.S.S grounds', time: '14:00 - 15:00',
      description: 'The school is holding a big farewell function'
      }
    ]
  }

}
