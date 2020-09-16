import { Component, Input } from '@angular/core';
import { ActivityItemContent } from '@shared/types';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss'],
})
export class ItemContentComponent {
  @Input() data: ActivityItemContent = {
    id: 0,
    description: 'Empty',
    date: '00-00-0000',
  };
  @Input() author = 'Unknown';

  constructor() {}
}
