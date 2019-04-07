import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) { }

  onSports(){
    this.router.navigateByUrl('/sports')
  }

  onFestivals(){
    this.router.navigateByUrl('/festivals')
  }

  onMusic(){
    this.router.navigateByUrl('/music')
  }

  onChurch(){
    this.router.navigateByUrl('/church')
  }

  onEducare(){
    this.router.navigateByUrl('/educare')
  }

  onNews(){
    this.router.navigateByUrl('/news')
  }

  onTransport(){
    this.router.navigateByUrl('/transport')
  }

  onFood(){
    this.router.navigateByUrl('/food')
  }

  onWeather(){
    this.router.navigateByUrl('/weather')
  }

  onJobs(){
    this.router.navigateByUrl('/jobs')
  }

  onTradition(){
    this.router.navigateByUrl('/tradition')
  }

  onHealth(){
    this.router.navigateByUrl('/health')
  }

}
