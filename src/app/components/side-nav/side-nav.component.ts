import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  setLang = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
