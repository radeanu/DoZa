import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences-form',
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.scss'],
})
export class PreferencesFormComponent implements OnInit {
  rangeValues = [15, 30];
  gender = 'Any';
  constructor() {}

  ngOnInit(): void {}
}
