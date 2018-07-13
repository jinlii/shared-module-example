import { Component, EventEmitter, Output } from '@angular/core';
//<toh-filter-text (changed)="filterChanged($event)"></toh-filter-text>
@Component({
  selector: 'toh-filter-text',
  template: '<input type="text" id="filterText" [(ngModel)]="filter" (keyup)="filterChanged($event)" />'
})
export class FilterTextComponent {
  @Output() changed: EventEmitter<string>;

  filter: string;

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`key up - Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }
}
