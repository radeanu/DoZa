import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { ActivityItemComponent } from './activity-item.component';
import { ItemContentComponent } from './item-content/item-content.component';
import { ItemHeaderComponent } from './item-header/item-header.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [ActivityItemComponent],
  declarations: [
    ActivityItemComponent,
    ItemContentComponent,
    ItemHeaderComponent,
  ],
})
export class AppActivityItemModule {}
