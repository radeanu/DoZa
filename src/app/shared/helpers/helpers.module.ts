import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnakBarService } from './';

@NgModule({
  imports: [
    MatSnackBarModule,
  ],
  providers: [SnakBarService],
  declarations: [],
  entryComponents: []
})
export class HelpersModule { }
