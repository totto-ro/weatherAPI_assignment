import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../main/weather.service';

@Component({
  selector: 'app-chicago-il',
  templateUrl: './chicago-il.component.html',
  styleUrls: ['./chicago-il.component.css']
})
export class ChicagoILComponent implements OnInit {
  result : any;
  constructor( private _weatherService : WeatherService ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    let observable = this._weatherService.getWeather('chicago','il');
    
    observable.subscribe( (data:any) =>{
      this.result = data;
      console.log("Chicago result: ", this.result);
    },
    ( error: any ) => {
      console.log( error );
    });
  }

}
