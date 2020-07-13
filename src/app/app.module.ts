import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogService } from './servicess/log.service';
import { SpanErrorDirective } from './directives/span-error.directive';
import { CarService } from './servicess/car.service';

@NgModule({
  declarations: [
    AppComponent,
    SpanErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LogService, CarService],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
