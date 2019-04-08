import { Component, OnInit } from '@angular/core';
import { event } from '../../models/interfaces';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  
  sport: event[];
  
  constructor(
    private location: Location,
    private router: Router
    ) { }
  
  ngOnInit() {
    this.sport = [
      { Id: 1, type: 'Footbal', location: 'Pafaroh grounds', time: '15:00',
      description: 'Newlands United FC will be playing a crutial match against TP Mazembe',
      image: 'assets/images/ipanews_62877f2f-0375-4aa7-9719-af11a5ddcf19_1.jpeg' },
      { Id: 2, type: 'Cricket', location: 'John Dory grounds', time: '14:00',
      description: 'Newlands United FC will be playing a crutial match against Chippa United',
      image: 'assets/images/cricket.jpg' }
    ]
  }
  
  addSport(){
    this.router.navigateByUrl('/add-sport')
  }
  
}
