import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { SideNavComponent } from './side-nav.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: [SideNavComponent],
  declarations: [SideNavComponent],
})
export class AppSideNavModule {}
