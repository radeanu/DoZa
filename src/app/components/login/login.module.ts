import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnakBarService } from '@shared/helpers';

import { AppFormsModule } from '../forms/forms.module';

import { LoginComponent } from './login-template/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AppFormsModule, MatSnackBarModule],
  providers: [DatePipe, SnakBarService],
})
export class AppLoginModule { }
