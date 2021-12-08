import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../main/weather.service';

@Component({
  selector: 'app-dallas-tx',
  templateUrl: './dallas-tx.component.html',
  styleUrls: ['./dallas-tx.component.css']
})
export class DallasTXComponent implements OnInit {
  result : any;
  constructor( private _weatherService : WeatherService ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    let observable = this._weatherService.getWeather('dallas','tx');
    
    observable.subscribe( (data:any) =>{
      this.result = data;
      console.log("Dallas result: ", this.result);
    },
    ( error: any ) => {
      console.log( error );
    });
  }

}
