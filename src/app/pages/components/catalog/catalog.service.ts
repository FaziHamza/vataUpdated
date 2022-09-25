import { Injectable } from '@angular/core';
import sprintf from "sprintf";
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { Observable, forkJoin } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private apiService: ApiService) { }

  getCategoriesByAlpha(query) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.CATEGORIES_BY_ALPHA, query));
  }

  getBookingCategoriesByAlpha(query) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOKING.BOOKINGS_BY_ALPHA, query), new HttpParams().set('skipLoader', 'skip'));
  }

  getAllCatagories(marketplaceLimit, bookingLimit){
    let marketplace = this.apiService.get(sprintf(ApiEndPoints.CATEGORY.MARKETPLACE_CATEGORIES, marketplaceLimit), new HttpParams().set('skipLoader', 'skip'));
    let bookings = this.apiService.get(sprintf(ApiEndPoints.CATEGORY.BOOKING_CATEGORIES, bookingLimit), new HttpParams().set('skipLoader', 'skip'));
    return forkJoin([marketplace, bookings]);
  }
  
  getSubCatagories(ids:any []){
    let calls = [];
    ids.map((id) => {
      calls.push(this.apiService.get(ApiEndPoints.CATEGORY.MARKETPLACE_CATEGORIES_BY_ID + id));
    })
    return forkJoin(...calls);
  }

  genCharArray(charA = 'a', charZ = 'z') {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push({ value: String.fromCharCode(i).toUpperCase(), selected: false });
    }
    a.unshift({value: "#", selected: false});
    return a;
  }
}
