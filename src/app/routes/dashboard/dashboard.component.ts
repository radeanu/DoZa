import { Component, OnInit } from '@angular/core';

import { ResponsiveService } from '@shared/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  visibleSidebar = false;
  isMobile: boolean;

  constructor(
    private responsiveService: ResponsiveService,
  ) { }

  ngOnInit(): void {
    this.onResize();
  }

  onResize(): void {
    this.isMobile = this.responsiveService.checkWidth();
  }
}
