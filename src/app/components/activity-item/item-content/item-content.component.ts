import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss'],
})
export class ItemContentComponent {
  @Input() contentData = {
    description: 'Empty',
  };

  constructor() {}
}
