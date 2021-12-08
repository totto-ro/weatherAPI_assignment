import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../main/weather.service';


@Component({
  selector: 'app-burbank-ca',
  templateUrl: './burbank-ca.component.html',
  styleUrls: ['./burbank-ca.component.css']
})
export class BurbankCAComponent implements OnInit {
  result : any;
  constructor( private _weatherService : WeatherService ) { }

  ngOnInit(): void {
    this.getWeather();
  }


  getWeather(): void{
    let observable = this._weatherService.getWeather('burbank','ca');
    
    observable.subscribe( (data:any) =>{
      this.result = data;
      console.log("Burbank result: ", this.result);
    },
    ( error: any ) => {
      console.log( error );
    });
  }

}
