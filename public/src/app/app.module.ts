import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { WeatherService } from './main/weather.service';
import { SeattleWAComponent } from './seattle-wa/seattle-wa.component';
import { SanjoseCAComponent } from './sanjose-ca/sanjose-ca.component';
import { BurbankCAComponent } from './burbank-ca/burbank-ca.component';
import { DallasTXComponent } from './dallas-tx/dallas-tx.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';
import { ChicagoILComponent } from './chicago-il/chicago-il.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SeattleWAComponent,
    SanjoseCAComponent,
    BurbankCAComponent,
    DallasTXComponent,
    WashingtonDcComponent,
    ChicagoILComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
