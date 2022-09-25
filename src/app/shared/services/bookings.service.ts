import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(
    private apiService: ApiService
  ) { }

  getPopularCategories() {
    return this.apiService.get(ApiEndPoints.CATEGORY.BOOKING_CATEGORIES);
  }

  getBestBookings() {
    return this.apiService.get(ApiEndPoints.BOOKING.BEST_BOOKINGS);
  }

  getNearYou() {
    return this.apiService.get(ApiEndPoints.BOOKING.NEAR_YOU);
  }

  getBookingsByCategory(id) {
    return this.apiService.get(ApiEndPoints.BOOKING.BOOKINGS_BY_CATEGORY);
  }

  
  addBooking(data) {
    return this.apiService.post(ApiEndPoints.BOOKING.SERVICE, data);
  }

  editService(data) {
    return this.apiService.put(ApiEndPoints.BOOKING.SERVICE, data);
  }

  addDeals(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.DEAL, data);
  }

  getFamilyMembers() {
    return this.apiService.get(ApiEndPoints.BOOKING.MEMBERS);
  }
}
