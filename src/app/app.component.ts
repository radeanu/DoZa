import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  // cars: Car[];
  // carNames: string[];
  // carColors: string[];

  // constructor(private carService: CarService) { }

  // ngOnInit(): void {
  //   this.carService.getCars().subscribe((cars: Car[]) => {
  //     this.cars = cars;
  //     this.carNames = this._getCarsNames;
  //     this.carColors = this._getCarsColors;
  //   });
  // }

  // showList(carName: string): void {
  //   const option = { name: carName };
  //   this.carService.getCarsByOption(option).subscribe((cars: Car[]) => {
  //     this.cars = cars;
  //   });
  // }

  // private get _getCarsNames(): string[] {
  //   return this.cars.map(({ name }) => name);
  // }

  // private get _getCarsColors(): string[] {
  //   return this.cars.map(({ color }) => color);
  // }
}
