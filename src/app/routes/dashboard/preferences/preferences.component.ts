import { Component } from '@angular/core';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent {
  min = 10;
  max = 30;
  options: Options = {
    floor: 0,
    ceil: 120,
  };

  constructor() { }

}
