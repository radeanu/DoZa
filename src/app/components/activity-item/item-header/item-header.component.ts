import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss'],
})
export class ItemHeaderComponent {
  @Input() headerData = {
    piIcon: 'pi pi-question-circle',
    author: 'unknown',
    meta: '0/0',
  };

  constructor() {}
}
