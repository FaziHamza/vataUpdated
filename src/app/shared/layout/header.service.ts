import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import sprintf from "sprintf";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private apiService: ApiService) { 
    this.getBookingCategories();
  }

  getMarketplaceCategories(limit = 8) {
    return this.apiService.get(sprintf(ApiEndPoints.CATEGORY.MARKETPLACE_CATEGORIES, limit) + '&is_parent=true');
  }
  getBookingCategories(limit = 8) {
    return this.apiService.get(sprintf(ApiEndPoints.CATEGORY.BOOKING_CATEGORIES, limit) + '&is_parent=true');
  }

}
