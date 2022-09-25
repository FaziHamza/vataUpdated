import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToggleSectionAccordian]'
})
export class ToggleSectionAccordianDirective {
  
  @Input() appToggleSectionAccordian;
  private show = false;

  constructor(
    private el: ElementRef
  ) {
    // this.appToggleSectionAccordian.style.display = 'none';
   }

  @HostListener('click') onclick() {
    this.toggle(this.el, this.appToggleSectionAccordian);
  }

  toggle(el: ElementRef, input: HTMLInputElement) {
    this.show = !this.show;

    if (this.show) {
      this.el.nativeElement.style.color = '#fb3b71';
      this.appToggleSectionAccordian.style.display = 'none';
    } else {
      this.el.nativeElement.style.color = '#c4c4c4';
      this.appToggleSectionAccordian.style.display = 'block';
    }
  }

}
