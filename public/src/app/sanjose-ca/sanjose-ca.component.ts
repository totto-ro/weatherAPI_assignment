import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../main/weather.service';

@Component({
  selector: 'app-sanjose-ca',
  templateUrl: './sanjose-ca.component.html',
  styleUrls: ['./sanjose-ca.component.css']
})
export class SanjoseCAComponent implements OnInit {
  result : any;
  constructor( private _weatherService : WeatherService ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void{
    let observable = this._weatherService.getWeather('san jose','ca');
    
    observable.subscribe( (data:any) =>{
      this.result = data;
      console.log("San Jose result: ", this.result);
    },
    ( error: any ) => {
      console.log( error );
    });
  }

}
