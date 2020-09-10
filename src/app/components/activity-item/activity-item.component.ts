import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
})
export class ActivityItemComponent {
  showContent = false;

  @Input() itemData = {
    header: {
      piIcon: 'pi pi-question-circle',
      author: 'unknown',
      meta: '0/0',
    },
    content: {
      description: 'Empty',
    },
  };

  constructor() {}
}
