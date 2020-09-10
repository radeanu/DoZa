import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnimation]',
})
export class AnimationDirective {
  @Input() parent: HTMLElement;

  @HostListener('click') onMouseClick(): void {
    const height = this.parent.clientHeight;

    if (height !== 0) {
      // while (height > 0) {
      //   setTimeout(() => {
      //     this.parent.style.height = `${height}`;
      //   }, 1000);
      //   height -= 1;
      // }
    }
  }
}
