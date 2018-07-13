import { Component } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  templateUrl: './eager.component.html'
})
export class EagerComponent {
  constructor(public counterService: CounterService) {}

  increaseCounter() {
    this.counterService.counter += 1;
  }
}
