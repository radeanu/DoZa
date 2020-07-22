import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
