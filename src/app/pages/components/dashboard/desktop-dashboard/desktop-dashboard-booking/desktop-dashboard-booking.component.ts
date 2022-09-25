import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-dashboard-booking',
  templateUrl: './desktop-dashboard-booking.component.html',
  styleUrls: ['./desktop-dashboard-booking.component.scss']
})
export class DesktopDashboardBookingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigateByUrl('/dashboard/dashboard-booking/visits/visit-stats');
  }

  routeTo(routeParam) {
    if (routeParam == 0) this.router.navigateByUrl('/dashboard/dashboard-booking/visits/visit-stats');
    else if (routeParam == 2) this.router.navigateByUrl('/dashboard/dashboard-booking/clients');
    else if (routeParam == 4) this.router.navigateByUrl('/dashboard/dashboard-booking/company-info');
    else this.router.navigateByUrl('/dashboard/dashboard-booking');

    console.log(routeParam);
    
    // if (routeParam == 0) this.router.navigateByUrl('/dashboard/dashboard-booking/visits');
    // else if (routeParam == 1) this.router.navigateByUrl('/dashboard/dashboard-booking/sales');
    // else if (routeParam == 2) this.router.navigateByUrl('/dashboard/dashboard-booking/clients');
    // else if (routeParam == 3) this.router.navigateByUrl('/dashboard/dashboard-booking/private');
    // else if (routeParam == 4) this.router.navigateByUrl('/dashboard/dashboard-booking/company-info');
    // else if (routeParam == 5) this.router.navigateByUrl('/dashboard/dashboard-booking/members');
    // else if (routeParam == 6) this.router.navigateByUrl('/dashboard/dashboard-booking/portfolio');
    // else if (routeParam == 7) this.router.navigateByUrl('/dashboard/dashboard-booking/marketing');
    // else if (routeParam == 8) this.router.navigateByUrl('/dashboard/dashboard-booking/reviews');
    // else if (routeParam == 9) this.router.navigateByUrl('/dashboard/dashboard-booking/statistics');
    // else if (routeParam == 10) this.router.navigateByUrl('/dashboard/dashboard-booking/settings');
    // else this.router.navigateByUrl('/dashboard/dashboard-booking/');
  }

}
