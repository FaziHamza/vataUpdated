import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import sprintf from "sprintf";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService: ApiService) { }

  getPopularCategories(limit = 10) {
    return this.apiService.get(sprintf(ApiEndPoints.CATEGORY.MARKETPLACE_CATEGORIES, limit) + '&is_parent=true');
  }

  getPopularProducts() {
    return this.apiService.get(ApiEndPoints.CATEGORY.POPULAR_MARKETPLACE);
  }

  getBestBookings() {
    return this.apiService.get(ApiEndPoints.BOOKING.BEST_BOOKINGS);
  }

  getTopDeals() {
    return this.apiService.get(ApiEndPoints.PRODUCT.TOP_DEALS);
  }
}
