import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationDirective } from './animation.directive';

@NgModule({
  imports: [CommonModule],
  exports: [AnimationDirective],
  declarations: [AnimationDirective],
})
export class AppDirectivesModule {}
