import { Directive, HostBinding, Input, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appSpan]'
})
export class SpanErrorDirective {
  @Input() val: FormControl;
  @Input() msg: ElementRef;

  @HostListener('keyup')
  onKeyUp(): void {
    console.log(this.msg.nativeElement);

    console.log(this.val.invalid);
    if (this.val.invalid) {
      this.msg.nativeElement.style.display = 'block';
      this.msg.nativeElement.className = 'errorSpan';
    } else {
      this.msg.nativeElement.style.display = 'none';
    }
  }
}
