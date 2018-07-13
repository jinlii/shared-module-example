import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { HeroButtonComponent } from './hero-button/hero-button.component';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService }   from './filter-text/filter-text.service';
import { InitCapsPipe }        from './init-caps.pipe';

import { CounterService }   from './counter.service';
import { HighlightDirective } from './hero-button/hero-highlight.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    HeroButtonComponent,
    FilterTextComponent,
    InitCapsPipe,
    HighlightDirective
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HeroButtonComponent,
    FilterTextComponent,
    InitCapsPipe,
    HighlightDirective
  ]
})
export class SharedModule {
// To avoid creating a second instance in a lower level of the DI tree for the
// other module and only use the service instance registered at the root of the tree.

  static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [ FilterTextService, CounterService]
      };
    }

}
