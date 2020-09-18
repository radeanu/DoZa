import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ActivityItem } from '@shared/types';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          minHeight: '50px',
        })
      ),
      state(
        'closed',
        style({
          minHeight: 0,
        })
      ),
      transition('open <=> closed', [animate('0.3s ease')]),
    ]),
  ],
})
export class ActivityItemComponent {
  showContent = false;

  @Input() itemData: ActivityItem = {
    author: 'Unknown',
    header: {
      icon: 'pi pi-question-circle',
      meta: '0/0',
      activity: { name: 'None', icon: 'pi pi-question-circle' },
    },
    content: {
      id: 0,
      description: 'Empty',
      date: '00-00-0000',
    },
  };

  constructor() {}
}
