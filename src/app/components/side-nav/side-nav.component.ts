import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  setLang = false;
  @Output() refresh = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute, private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
    this.refresh.emit(true);
  }
}
