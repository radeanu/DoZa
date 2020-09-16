import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '50px',
          padding: '5px',
        })
      ),
      state(
        'closed',
        style({
          height: 0,
          padding: 0,
        })
      ),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
  ],
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
