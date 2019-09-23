import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  //readonly url: string = 'http://localhost:50000/NewlandsEastAppService/api/values';
  forecasts : WeatherForecast[];
  
  constructor(public router: Router, private http: HttpClient) 
  { 
    
  }
  
  async ngOnInit(){
    let res = await this.http.get(environment.url + 'api/SampleData/WeatherForecasts').toPromise();
    console.log(res)
  }
  
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
