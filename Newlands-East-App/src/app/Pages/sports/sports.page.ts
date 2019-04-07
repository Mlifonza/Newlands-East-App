import { Component, OnInit } from '@angular/core';
import { sports } from '../../models/interfaces';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  
  sport: sports[];
  
  constructor(
    private location: Location,
    private router: Router
    ) { }
  
  ngOnInit() {
    this.sport = [
      { Id: 1, type: 'Footbal', location: 'Pafaroh grounds', time: '15:00',
      description: 'Newlands United FC will be playing a crutial match against TP Mazembe' },
      { Id: 2, type: 'Rugby', location: 'John Dory grounds', time: '14:00',
      description: 'Newlands United FC will be playing a crutial match against Chippa United' }
    ]
  }
  
  addSport(){
    this.router.navigateByUrl('/add-sport')
  }
  
}
