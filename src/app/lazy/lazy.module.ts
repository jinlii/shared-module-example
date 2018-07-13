import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LazyComponent }   from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    SharedModule, //we will not call the forRoot method because we don't want to register the service again in a different level of the DI tree
    LazyRoutingModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
