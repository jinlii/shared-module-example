import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService }   from './filter-text/filter-text.service';
import { InitCapsPipe }        from './init-caps.pipe';

import { CounterService }   from './counter.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    FilterTextComponent,
    InitCapsPipe
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
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
