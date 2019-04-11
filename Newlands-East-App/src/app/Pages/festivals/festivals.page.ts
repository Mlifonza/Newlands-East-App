import { Component, OnInit } from '@angular/core';
import { Event, Images } from '../../models/interfaces';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.page.html',
  styleUrls: ['./festivals.page.scss'],
})
export class FestivalsPage implements OnInit {

  festival: Event[];
  images: Images[];

  constructor(private videoPlayer: VideoPlayer) { }
  
  ngOnInit() {
    this.images = [
      { Id: 1, image: 'assets/images/.facebook_-314155719.jpg' },
      { Id: 2, image: 'assets/images/944958_1135656066445117_7384405561308028099_n.jpg' },
      { Id: 3, image: 'assets/images/‪+27 79 199 7006‬ 20161116_110039.jpg' }
    ]

    this.festival = [
      { Id: 1, type: 'Music', location: 'Pafaroh grounds', time: '15:00 - until late',
      description: 'Hip/hop and house music concert'
      },
      { Id: 2, type: 'Children', location: 'John Dory grounds', time: '14:00',
      description: 'Lovely day to bring your children to the ground, with jumping castles etc'
      }
    ]
  }
  
  PlayVideo(){
    this.videoPlayer.play('assets/videos/VID-20190103-WA0002.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  
}
