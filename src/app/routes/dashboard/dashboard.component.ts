import { Component, OnInit } from '@angular/core';

import { ResponsiveService } from '@shared/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  visibleSidebar = false;
  isMobile: boolean;
  currentRoute: string;

  constructor(
    private responsiveService: ResponsiveService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentRoute = this.route.snapshot.routeConfig.path;
    this.onResize();
  }

  onResize(): void {
    this.isMobile = this.responsiveService.checkWidth();
  }
}
