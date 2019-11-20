import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.page.html',
  styleUrls: ['./display-image.page.scss'],
})
export class DisplayImagePage implements OnInit {

  imagePath;
  constructor(private localstorageservice: LocalstorageService) { }

  ngOnInit() {
    this.imagePath = this.localstorageservice.getImagePath();
  }

}
