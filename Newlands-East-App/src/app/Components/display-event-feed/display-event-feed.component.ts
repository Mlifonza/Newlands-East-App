import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-event-feed',
  templateUrl: './display-event-feed.component.html',
  styleUrls: ['./display-event-feed.component.scss'],
})
export class DisplayEventFeedComponent implements OnInit {

  @Input('feeds') feeds: any;
  @Input('images') images: any;

  constructor() { }

  ngOnInit() {}

}
