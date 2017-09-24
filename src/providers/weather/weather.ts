import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apikey = 'd62c5597512a9df7690fc7ab53907ae1';
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=' + this.apikey+'&q=';
  }

  getWeather(city, state) {
    return this.http.get(this.url + city).map(res => res.json());
  }
}
