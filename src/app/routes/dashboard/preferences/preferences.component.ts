import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent {
  rangeValues = [15, 30];
  genders: any[];
  gender = { name: 'Any ' };
  activities: SelectItem[];
  selectedActivities = [];

  constructor(private location: Location) {
    this.genders = [{ name: 'Male' }, { name: 'Female' }, { name: 'Any' }];
    this.activities = [
      { label: 'Football', value: 'Football' },
      { label: 'Basketball', value: 'Basketball' },
      { label: 'Tennis', value: 'Tennis' },
      { label: 'Volleyball', value: 'Volleyball' },
      { label: 'Rugby', value: 'Rugby' },
    ];
  }

  back(): void {
    this.location.back();
  }
}
