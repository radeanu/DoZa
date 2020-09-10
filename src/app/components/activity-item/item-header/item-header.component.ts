import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss'],
})
export class ItemHeaderComponent {
  @Input() headerData = {
    piIcon: 'pi pi-ban',
    author: 'Unknown',
    activity: { name: 'none', icon: 'pi pi-times-circle' },
    meta: '0/0',
    content: {
      description: 'No description',
    },
  };

  constructor() {}
}
