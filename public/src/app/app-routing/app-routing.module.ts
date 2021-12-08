import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { BurbankCAComponent } from '../burbank-ca/burbank-ca.component';
import { ChicagoILComponent } from '../chicago-il/chicago-il.component';
import { DallasTXComponent } from '../dallas-tx/dallas-tx.component';
import { SanjoseCAComponent } from '../sanjose-ca/sanjose-ca.component';
import { SeattleWAComponent } from '../seattle-wa/seattle-wa.component';
import { WashingtonDcComponent } from '../washington-dc/washington-dc.component';


let routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'burbank-ca',
    component: BurbankCAComponent
  },
  {
    path: 'chicago-il',
    component: ChicagoILComponent
  },
  {
    path: 'dallas-tx',
    component: DallasTXComponent
  },
  {
    path: 'sanjose-ca',
    component: SanjoseCAComponent
  },
  {
    path: 'seattle-wa',
    component: SeattleWAComponent
  },
  {
    path: 'washington-dc',
    component: WashingtonDcComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/'
  },
  {
    path: '**',
    redirectTo: '/'
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
