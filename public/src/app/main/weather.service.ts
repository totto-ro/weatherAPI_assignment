import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key : string = '785641bb8b6b31189df20b2d444b89a9';

  constructor( private _http : HttpClient) { }

  getWeather (cityName: string, stateCode: string){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},us&units=metric&appid=${this.key}`);
  }

}
