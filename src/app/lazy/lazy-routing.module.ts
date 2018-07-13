import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyComponent }    from './lazy.component';


const lazyRoutes: Routes = [
  { path: '',  component: LazyComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes) // not forRoot
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule { }
