import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[app2Highlight]'
})
export class High2lightDirective {
  @Input('app2Highlight') highlightColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
