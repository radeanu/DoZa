import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  checkWidth(): boolean {
    const width = window.innerWidth;

    return width <= 480
      ? true
      : false;
  }
}
