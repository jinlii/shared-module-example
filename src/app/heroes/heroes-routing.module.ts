import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }    from './heroes.component';


const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes) // not forRoot
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
