import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[heroHighlight]'
})
export class HighlightDirective  {

  // Aliased because `color` is a better property name than `heroHighlight`
  @Input('heroHighlight') color: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
