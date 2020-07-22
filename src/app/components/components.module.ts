import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    CarsComponent,
  ],
  imports: [SharedModule],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule { }
