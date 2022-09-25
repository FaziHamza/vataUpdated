import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  constructor(private apiService: ApiService) { }

  getPopularProducts() {
    return this.apiService.get(ApiEndPoints.CATEGORY.POPULAR_MARKETPLACE);
  }

  getPopularCategories() {
    console.log(ApiEndPoints.CATEGORY.MARKETPLACE_CATEGORIES + '&is_parent=true');
    return this.apiService.get(ApiEndPoints.CATEGORY.MARKETPLACE_CATEGORIES + '&is_parent=true');
  }
}
