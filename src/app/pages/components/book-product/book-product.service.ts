import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import sprintf from 'sprintf';

@Injectable({
  providedIn: 'root'
})
export class BookProductService {

  constructor(private apiService: ApiService) { }

  getShopDetails(id) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOK_PRODUCT.PRODUCT_DETAILS, id));
  }

  getShopReviews(shopId, serviceIds?) {
    let url = sprintf(ApiEndPoints.BOOK_PRODUCT.PRODUCT_REVIEWS, shopId);
    if (serviceIds) {
      serviceIds.forEach((id) => {
        url = url + '&&service_id=' + id
      })
    }
    return this.apiService.get(url);
  }

  getNewestShopReviews(shopId, serviceIds) {
    let url = sprintf(ApiEndPoints.BOOK_PRODUCT.PRODUCT_REVIEWS_NEWEST, shopId);
    serviceIds.forEach((id) => {
      url = url + '&&service_id=' + id
    })
    return this.apiService.get(url);
  }

  getSimilarShops(id) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOK_PRODUCT.SIMILAR_PRODUCTS, id));
  }

  getServicesByCategory(id) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOK_PRODUCT.SERVICES_BY_CATEGORY, id));
  }

  getShopWorkImages(id) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOK_PRODUCT.SHOP_WORK_IMAGES, id));
  }

  submitReview(review) {
    return this.apiService.post(ApiEndPoints.BOOK_PRODUCT.SUBMIT_REVIEW, review);
  }

  checkReviews(shopId, userId) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOK_PRODUCT.CHECK_REVIEWS, shopId, userId));
  }

  addToFavourites(shopId, userId) {
    return this.apiService.post(ApiEndPoints.BOOK_PRODUCT.ADD_TO_FAVOURITES, { shop: shopId, user: userId });
  }

  getServiceDetails(serviceId) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOK_PRODUCT.SERVICE_DETAILS, serviceId));
  }

}
