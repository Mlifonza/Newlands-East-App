import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-event-feeds',
  templateUrl: './display-event-feeds.page.html',
  styleUrls: ['./display-event-feeds.page.scss'],
})
export class DisplayEventFeedsPage implements OnInit {

  @Input('feeds') feeds: any;
  @Input('images') images: any;

  constructor() { }

  ngOnInit() {
  }

}
