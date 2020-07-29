import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SnakBarService {
  constructor(private snackBar: MatSnackBar, private translate: TranslateService) { }

  open(message: string, act: string, durr?: number): void {
    const msg = this.translate.instant(message);
    const action = this.translate.instant(act);
    this.snackBar.open(msg, action, {
      duration: durr || 2000
    });
  }
}
