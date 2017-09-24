import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  iconurl: string;
  location: {
    city:string,
    state:string
  }
  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {

  }

  ionViewWillEnter(){
   this.location={
     city: 'miami',
     state:'FL'
   }
   this.weatherProvider.getWeather(this.location.city, this.location.state)
    .subscribe(weather => {
      this.weather =weather;
      this.iconurl = 'http://openweathermap.org/img/w/'+weather.weather[0].icon + '.png';
    })
  }
}
