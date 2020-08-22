import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {
  activities = [
    {
      header: {
        piIcon: 'pi pi-eye',
        author: 'Vasile',
        meta: '1/5',
      },
      content: {
        description: 'Nimic',
      },
    },
    {
      header: {
        piIcon: 'pi pi-eye',
        author: 'Vasile',
        meta: '1/5',
      },
      content: {
        description: 'Nimic',
      },
    },
    {
      header: {
        piIcon: 'pi pi-eye',
        author: 'Vasile',
        meta: '1/5',
      },
      content: {
        description: 'Nimic',
      },
    },
  ];
  constructor() {}
}
