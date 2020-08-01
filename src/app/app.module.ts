import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { TokenInterceptor } from './core/token-interceptor.service';
import { CoreModule } from './core/core.module';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { I18nModule } from './core/i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    ComponentsModule,
    I18nModule,
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
