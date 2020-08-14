import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';

import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [ReactiveFormsModule, CommonModule, TranslateModule],
  exports: [LoginFormComponent],
  providers: [DatePipe],
})
export class AppLoginFormModule {}
