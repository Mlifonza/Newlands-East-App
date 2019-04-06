import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.page.html',
  styleUrls: ['./festivals.page.scss'],
})
export class FestivalsPage implements OnInit {
  
  constructor(private videoPlayer: VideoPlayer) { }
  
  ngOnInit() {
  }
  
  PlayVideo(){
    this.videoPlayer.play('assets/videos/VID-20190103-WA0002.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  
}
