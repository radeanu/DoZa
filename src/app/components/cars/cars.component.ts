import { Component } from '@angular/core';

import { CarsService } from '@shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  cars: Observable<any>;

  constructor(private carsService: CarsService) { }

  getCars(): void {
    this.cars = this.carsService.getCars();
  }

}
