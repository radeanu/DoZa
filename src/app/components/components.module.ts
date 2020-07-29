import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    CarsComponent,
  ],
  imports: [SharedModule, WidgetsModule],
  providers: [DatePipe],
  bootstrap: [],
})
export class ComponentsModule { }
