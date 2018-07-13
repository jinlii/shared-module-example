import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroesComponent }    from './heroes.component';
import { HeroRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module'; // import this so it can refer to the toh-filter-text component in filter-text.component under shared

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroesComponent
  ],
  providers: [  ]
})
export class HeroesModule {}
