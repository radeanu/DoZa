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
        activity: { name: 'Football', icon: 'pi pi-palette' },
        meta: '1/5',
      },
      content: {
        description: 'Hz parca nimic',
      },
    },
    {
      header: {
        piIcon: 'pi pi-eye',
        author: 'Vasile',
        activity: { name: 'Basketball', icon: 'pi pi-star' },
        meta: '1/5',
      },
      content: {
        description: 'Lorem',
      },
    },
    {
      header: {
        piIcon: 'pi pi-eye',
        author: 'Vasile',
        activity: { name: 'Rally', icon: 'pi pi-tag' },
        meta: '1/5',
      },
      content: {
        description: 'Ceva tipa',
      },
    },
  ];
  constructor() {}
}
