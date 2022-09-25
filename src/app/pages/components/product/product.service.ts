import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import sprintf from "sprintf";
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addedToCart = new BehaviorSubject<any>(null);
  addedToCart$ = this.addedToCart.asObservable();

  constructor(private apiService: ApiService, private http: HttpClient) { }

  updateCart(data) {
    this.addedToCart.next(data);
  }

  getProductInfo(id) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.PRODUCT_MODIFY, id));
  }

  getProductsOfSeller(sellerId) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.GET_PRODUCT_FROM_SELLER, sellerId));
  }

  addFavourite(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.FAVOURITE, data);
  }

  addAnswer(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ADD_ANSWER, data);
  }

  addReply(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ADD_REPLY, data);
  }

  addProductToCart(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ADD_TO_CART, data);
  }

  getCart() {
    return this.apiService.get(ApiEndPoints.PRODUCT.GET_CART);
  }

  removeFavourite(productId, userId) {
    return this.apiService.delete(sprintf(ApiEndPoints.PRODUCT.REMOVE_FAVOURITE, productId, userId));
  }

  saveSeller(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.SAVE_SELLER, data);
  }

  removeSeller(id) {
    return this.apiService.delete(sprintf(ApiEndPoints.PRODUCT.SAVE_SELLER_MODIFY, id));
  }

  removeSavedSearch(id) {
    return this.apiService.delete(sprintf(ApiEndPoints.PRODUCT.MODIFY_SAVED_SEARCH, id));
  }

  addAttributes(id, data) {
    return this.apiService.patch(sprintf(ApiEndPoints.PRODUCT.PRODUCT_MODIFY, id), data);
  }

  // removeSavedSeller(data) {
  //   return this.apiService.post(ApiEndPoints.PRODUCT.SAVE_SELLER, data);
  // }

  

  addBid(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ADD_BID, data);
  }

  bidDetails(productId) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.BID_DETAILS, productId));
  }

  askForChange(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ASK_FOR_CHANGE, data);
  }

  addProductReview(data) {
    return this.http.post(environment.api_url + ApiEndPoints.PRODUCT.ADD_REVIEW, data);
  }

  addProductReviewImage(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ADD_REVIEW_IMAGE, data);
  }

  askQuestion(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ASK_QUESTION, data);
  }

  getReview(productId) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.GET_REVIEW, productId));
  }

  getReviewBySeller(sellerId) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.GET_REVIEW_BY_SELLER_ID, sellerId));
  }

  getNewestReviewBySeller(sellerId) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.NEWEST_REVIEW, sellerId));
  }

  getNeedToReviewBySeller(sellerId) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.NEEDED_TO_REVIEW, sellerId));
  }

  reviewReply(reply) {
    return this.apiService.post(ApiEndPoints.PRODUCT.REVIEW_REPLY, reply);
  }

  addProduct(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.ADD_PRODUCT, data);
  }

  removeItemFromCart(data) {
    return this.apiService.request('delete', ApiEndPoints.PRODUCT.REMOVE_ITEM_FROM_CART, { body: data });
    // return this.apiService.delete(sprintf(ApiEndPoints.PRODUCT.REMOVE_ITEM_FROM_CART), {headers: header});
  }

  clearCartData(data) {
    return this.apiService.request('delete', ApiEndPoints.PRODUCT.CLEAR_CART, { body: data });
  }

  getCustomerQA(productId, type = 'all') {
    if (type === 'limited') {
      return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.QA_LIMITED, productId, 3));
    } else {
      return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.QA_ALL, productId));
    }
  }

  
  getSimilarProducts(id) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.SIMILAR_PRODUCT, id));
  }

  getCategories(parent = false) {
    return this.apiService.get(sprintf(ApiEndPoints.CATEGORY.CATEGORIES, parent));
  }

  getCondition() {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.CONDITION));
  }

  getSellerByUserId(id) {
    return this.apiService.get(sprintf(ApiEndPoints.PRODUCT.SAVED_SELLER_BY_USER, id));
  }

  uploadAttributeImages(images, ids){
    console.log(images);
    let calls = [];
    ids.map((id) => {
      let fd = new FormData()
      images.map((img) => {
        if(id === img.id){
          fd.append('image', img);
        }
      })
      calls.push(this.apiService.put(ApiEndPoints.PRODUCT.ADD_CATEGORY_ATTRIBUTE_IMAGES + id + '/', fd));
    })
    console.log(calls);
    return forkJoin(calls);
  }

  updateQuantity(data) {
    return this.apiService.post(ApiEndPoints.PRODUCT.UPDATE_QUANTITY_MARKET, data);
  }

  getShipto(){
    return this.apiService.get(ApiEndPoints.PRODUCT.SHIP_TO);
  }

  getProductLocation(){
    return this.apiService.get(ApiEndPoints.PRODUCT.PRODUCT_LOCATION);
  }

  getAttributesByCategory(id){
    return this.apiService.get(ApiEndPoints.PRODUCT.CATEGORY_ATTRIBUTES + '?category=' + id)
  }
}
