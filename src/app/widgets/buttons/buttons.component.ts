import { Component, OnInit, Input } from '@angular/core';

import { WidgetButtons } from '@shared/types';

@Component({
  selector: 'app-widget-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class WidgetsButtonsComponent {
  @Input() attributes: WidgetButtons;
  constructor() { }
}
