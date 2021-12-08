import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../main/weather.service';

@Component({
  selector: 'app-seattle-wa',
  templateUrl: './seattle-wa.component.html',
  styleUrls: ['./seattle-wa.component.css']
})
export class SeattleWAComponent implements OnInit {
  result : any;
  constructor( private _weatherService : WeatherService ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    let observable = this._weatherService.getWeather('seattle','wa');
    
    observable.subscribe( (data:any) =>{
      this.result = data;
      console.log("Seattle result: ", this.result);
    },
    ( error: any ) => {
      console.log( error );
    });
  }

}
