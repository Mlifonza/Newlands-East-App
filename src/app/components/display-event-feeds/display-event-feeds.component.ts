import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-event-feeds',
  templateUrl: './display-event-feeds.component.html',
  styleUrls: ['./display-event-feeds.component.scss'],
})
export class DisplayEventFeedsComponent implements OnInit {

  @Input('feeds') feeds: any;
  @Input('images') images: any;

  constructor() { }

  ngOnInit() {}

}
