import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EagerComponent } from './eager.component';

// The feature routes are now provided by the HeroesModule and the CrisisCenter modules.
const appRoutes: Routes = [
  { path: 'eager', component: EagerComponent },
 { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' }, // If the pathMatch value were 'prefix', every URL would match ''.
];

@NgModule({
  imports: [
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true // <-- debugging purposes only

     }
   )
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
