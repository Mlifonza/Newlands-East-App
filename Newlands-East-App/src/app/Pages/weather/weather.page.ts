import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var res = this.http.get('api.openweathermap.org/data/2.5/weather?q=London');
    console.log(res)
  }

}
