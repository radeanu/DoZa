import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-preferences-form',
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.scss'],
})
export class PreferencesFormComponent {
  rangeValues = [15, 30];
  genders: any[];
  gender = { name: 'Any ' };
  activities: SelectItem[];
  selectedActivities = [];

  constructor() {
    this.genders = [{ name: 'Male' }, { name: 'Female' }, { name: 'Any' }];
    this.activities = [
      { label: 'Football', value: 'Football' },
      { label: 'Basketball', value: 'Basketball' },
      { label: 'Tennis', value: 'Tennis' },
      { label: 'Volleyball', value: 'Volleyball' },
      { label: 'Rugby', value: 'Rugby' },
    ];
  }

  show(ev: any): void {
    ev.preventDefault();
  }
}
