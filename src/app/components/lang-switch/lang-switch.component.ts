import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrls: ['./lang-switch.component.scss'],
})
export class LangSwitchComponent {
  currentLang: string;

  constructor(public translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    this.currentLang = browserLang.match(/en|ru|ro/) ? browserLang : 'ro';
    translate.use(this.currentLang);
  }
}
