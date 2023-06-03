import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDeletebtnchange]',
})
export class DeletebtnchangeDirective {
  @Input() btnImgs: { pink: string; blue: string };

  constructor(private el: ElementRef, private render: Renderer2) {
    this.btnImgs = { pink: '', blue: '' };
  }

  @HostListener('mouseleave') onLeave() {
    this.render.setAttribute(this.el.nativeElement, 'src', this.btnImgs.blue);
  }

  @HostListener('mouseenter') onEnter() {
    this.render.setAttribute(this.el.nativeElement, 'src', this.btnImgs.pink);
  }
}
