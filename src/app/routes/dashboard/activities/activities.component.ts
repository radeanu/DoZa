import { Component } from '@angular/core';
import { ActivityItem } from '@shared/types';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {
  activities: Array<ActivityItem> = [
    {
      author: 'Vasile',
      header: {
        icon: 'pi pi-eye',
        activity: { name: 'Football', icon: 'pi pi-palette' },
        meta: '1/5',
      },
      content: {
        id: 4542,
        description:
          'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice.',
        date: '01/09/2020',
      },
    },
    {
      author: 'Vasile',
      header: {
        icon: 'pi pi-eye',
        activity: { name: 'Basketball', icon: 'pi pi-star' },
        meta: '1/5',
      },
      content: {
        id: 2341,
        description:
          'Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată.',
        date: '12/11/2020',
      },
    },
    {
      author: 'Vasile',
      header: {
        icon: 'pi pi-eye',
        activity: { name: 'Rally', icon: 'pi pi-tag' },
        meta: '1/5',
      },
      content: {
        id: 1253,
        description:
          'E un fapt bine stabilit că cititorul va fi sustras de conţinutul citibil al unei pagini.',
        date: '12/01/2020',
      },
    },
  ];
  constructor() {}
}
