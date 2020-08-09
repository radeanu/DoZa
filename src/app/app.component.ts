import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  currenLang: string;

  constructor(
    public translate: TranslateService,
    private router: Router) {
    const browserLang = translate.getBrowserLang();
    this.currenLang = browserLang.match(/en|ru|ro/) ? browserLang : 'ro';
    translate.use(this.currenLang);
  }

  login(): void {
    this.router.navigate(['auth/login']);
  }
}
