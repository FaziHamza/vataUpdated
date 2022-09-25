import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]'
})
export class PasswordToggleDirective {

  @Input() appPasswordToggle;
  private show = false;
  constructor(private el: ElementRef) {
  }

  @HostListener('click') onclick() {
    this.toggle(this.el, this.appPasswordToggle);
  }

  toggle(el: ElementRef, input: HTMLInputElement) {
    this.show = !this.show;
    if (this.show) {
      this.el.nativeElement.style.color = '#fb3b71';
      this.appPasswordToggle.setAttribute('type', 'text');

      console.log(this.el);
    } else {
      this.el.nativeElement.style.color = '#c4c4c4';
      this.appPasswordToggle.setAttribute('type', 'password');
    }
  }
}
