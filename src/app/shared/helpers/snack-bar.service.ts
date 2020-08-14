import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SnackBarService {
  constructor(private translate: TranslateService) {}

  open(message: string, act: string, dur?: number): void {
    const msg = this.translate.instant(message);
    const action = this.translate.instant(act);
    // this.snackBar.open(msg, action, {
    //   duration: dur || 2000,
    // });
  }
}
