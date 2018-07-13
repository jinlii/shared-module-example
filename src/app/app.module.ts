import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule }     from './shared/shared.module';
import { HeroesModule }     from './heroes/heroes.module';
//import { LazyModule }     from './lazy/lazy.module';

import { EagerComponent } from './eager.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(), //import this module in our root module AppModule calling the forRoot method to register the module and the service.
    HeroesModule,
    //LazyModule, -- lazy loading, do not import here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
