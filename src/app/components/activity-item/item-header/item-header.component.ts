import { Component, Input } from '@angular/core';
import { ActivityItemHeader } from '@shared/types';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss'],
})
export class ItemHeaderComponent {
  @Input() data: ActivityItemHeader = {
    icon: 'pi pi-question-circle',
    meta: '0/0',
    activity: { name: 'None', icon: 'pi pi-question-circle' },
  };
  @Input() showAuthor = false;
  @Input() author = 'Unknown';

  constructor() {}
}
