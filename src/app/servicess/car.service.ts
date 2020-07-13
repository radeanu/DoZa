import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable()
export class CarService {

  constructor(private httpCLient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpCLient.get<Car[]>('http://localhost:3000/cars');
  }

  getCarsByOption(option: {}): Observable<Car[]> {
    const body = option;
    return this.httpCLient.post<Car[]>('http://localhost:3000/cars', body);
  }
}
