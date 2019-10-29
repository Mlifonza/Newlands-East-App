import { Component, OnInit } from '@angular/core';
import { Event, Images } from '../../models/interfaces';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AddEventComponent } from '../../components/add-event/add-event.component'
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  
  sport: Event[];
  images: Images[];
  
  constructor(
    private location: Location,
    private router: Router,
    private popCntrl: PopoverController
    ) { }
  
  ngOnInit() {
    this.images = [
      { Id: 1, image: 'assets/images/ipanews_62877f2f-0375-4aa7-9719-af11a5ddcf19_1.jpeg' },
      { Id: 2, image: 'assets/images/13244226_1708879399400227_5602836980597976120_o.jpg' },
      { Id: 3, image: 'assets/images/cricket.jpg' }
    ]

    this.sport = [
      { Id: 1, type: 'Footbal', location: 'Pafaroh grounds', time: '15:00',
      description: 'Newlands United FC will be playing a crutial match against TP Mazembe'
      },
      { Id: 2, type: 'Cricket', location: 'John Dory grounds', time: '14:00',
      description: 'Newlands United FC will be playing a crutial match against Chippa United'
      }
    ]
  }
  
  addSport = async () => {
    this.router.navigateByUrl('/add-sport')
  }
  
}
