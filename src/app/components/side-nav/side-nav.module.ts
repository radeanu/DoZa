import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { SideNavComponent } from './side-nav.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [SideNavComponent],
  declarations: [SideNavComponent],
})
export class AppSideNavModule {}
