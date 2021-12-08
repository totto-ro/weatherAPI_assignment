import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../main/weather.service';

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDcComponent implements OnInit {
  result : any;
  constructor( private _weatherService : WeatherService ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    let observable = this._weatherService.getWeather('washington','cd');
    
    observable.subscribe( (data:any) =>{
      this.result = data;
      console.log("Washington result: ", this.result);
    },
    ( error: any ) => {
      console.log( error );
    });
  }

}
