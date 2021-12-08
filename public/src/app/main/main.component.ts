import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  

  constructor(  private _weatherService: WeatherService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
  }




}
