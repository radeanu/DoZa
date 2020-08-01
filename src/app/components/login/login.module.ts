import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { LoginComponent } from './login-template/login.component';
import { AppFormsModule } from '../forms/forms.module';
import { SnakBarService } from '@shared/helpers';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoginComponent],
  imports: [AppFormsModule, MatSnackBarModule],
  providers: [DatePipe, SnakBarService],
})
export class AppLoginModule { }
