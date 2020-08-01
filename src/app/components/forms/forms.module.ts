import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginFormComponent],
})
export class AppFormsModule { }
