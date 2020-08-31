import { Component } from '@angular/core';

@Component({
  selector: 'app-pref-picker',
  templateUrl: './pref-picker.component.html',
  styleUrls: ['./pref-picker.component.scss']
})
export class PrefPickerComponent {
  displayItems = false;
  selectAll = false;
  items = [
    { name: 'Football', icon: 'pi pi-palette' },
    { name: 'Basketball', icon: 'pi pi-tags' },
    { name: 'Rally', icon: 'pi pi-th-large' },
  ];

  constructor() { }
}
