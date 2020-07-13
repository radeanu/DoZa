import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  log(message: string): void {
    console.log(`Message: ${message}`);
  }
}
