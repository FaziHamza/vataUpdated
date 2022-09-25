import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import sprintf from "sprintf";
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { BehaviorSubject } from 'rxjs';
import Calendar from 'tui-calendar';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private source = new BehaviorSubject(null);
  private categorySubject = new BehaviorSubject(null);
  latestCategory = this.categorySubject.asObservable();
  currentData = this.source.asObservable();
  calendar;
  constructor(
    private apiService: ApiService
  ) { }


  changedData(data) {
    this.source.next(data);
  }

  setLatestCategory(latestCategory) {
    this.categorySubject.next(latestCategory);
  }

  getBookingsByShop(id) {
    return this.apiService.get(sprintf(ApiEndPoints.BOOK_PRODUCT.ALL_SERVICE_BY_SHOP, id));
  }

  getFollowers() {

    return this.apiService.get(ApiEndPoints.DASHBOARD.FOLLOWERS);
  }

  getPublicProfile() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.PUBLIC_PROFILE);
  }

  getNameAndReviewStatus(params) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.NAME_AND_REVIEW_STATUS, params));
  }

  getFamilyMembers(params) {
    return this.apiService.get(ApiEndPoints.DASHBOARD.FAMILY_MEMBERS, params);
  }

  getBlackListMembers(params) {
    return this.apiService.get(ApiEndPoints.DASHBOARD.LIST_BLACKLIST_MEMBER, params);
  }

  addFamilyMember(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.ADD_FAMILY_MEMBER, params);
  }

  getMyFavourites() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.MY_FAVS);
  }

  editFamilyMember(id, data) {
    return this.apiService.patch(sprintf(ApiEndPoints.DASHBOARD.EDIT_FAMILY_MEMBER, id), data);
  }

  deleteFamilyMember(id) {
    return this.apiService.delete(sprintf(ApiEndPoints.DASHBOARD.DELETE_FAMILY_MEMBER, id));
  }

  deleteBlacklist(id) {
    return this.apiService.delete(sprintf(ApiEndPoints.DASHBOARD.DELETE_BLACKLIST, id));
  }

  getServiceCategories() {
    return this.apiService.get(ApiEndPoints.BOOKING.SERVICE_CATEGORIES);
  }

  getServiceById(id) {
    return this.apiService.get(sprintf(ApiEndPoints.CATEGORY.SERVICE_CATEGORIES_BY_ID, id));
  }

  addCategory(data) {
    return this.apiService.post(ApiEndPoints.BOOKING.SERVICE_CATEGORIES, {name: data});
  }

  getCategoryById(id) {
    return this.apiService.get(sprintf(ApiEndPoints.CATEGORY.BOOKING_CATEGORIES_BY_ID, id));
  }

  editCategory(id, data) {
    return this.apiService.put(sprintf(ApiEndPoints.BOOKING.EDIT_SERVICE_CATEGORIES, id), {name: data});
  }

  addShop(data) {
    return this.apiService.post(ApiEndPoints.BOOKING.ADD_SHOP, data);
  }

  getMyShippingOrders() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.MY_ORDERS);
  }

  // statistics tab

  getBookingStats() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.BOOKING_STATISTICS);
  }

  getTopClients() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.TOP_CLIENTS);
  }

  getTopMembers() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.TOP_MEMBERS);
  }

  // clients tab
  addClient(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.CLIENTS_ADD_CLIENT, params);
  }

  getClients(id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_CLIENTS, id));
  }

  updateClient(id, params) {
    return this.apiService.patch(sprintf(ApiEndPoints.DASHBOARD.UPDATE_CLIENT, id), params);
  }

  deleteClient(id) {
    return this.apiService.delete(sprintf(ApiEndPoints.DASHBOARD.DELETE_CLIENT, id));
  }

  // private tab
  currentHistory(limit, offset, user_book_services__user_id, finished, cancel, get_date) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.BOOKING_PRIVATE_CURRENT_HISTORY, limit, offset, user_book_services__user_id, finished, cancel, get_date));
  }

  getSavedSearches() {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.MY_SAVED_SEARCHES));
  }

  getDailyVisits(dayDate) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.DAILY_VISITS, dayDate));
  }

  getWeeklyVisits(startDate, endDate) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.WEEKLY_VISITS, startDate, endDate));
  }

  // company tab
  getAddShop() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.GET_ADD_SHOP);
  }

  getShopModify(id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_SHOP_MODIFY, id));
  }

  getServiceCategory(id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_SERVICE_CATEGORY, id));
  }

  postServiceCategory(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_SERVICE_CATEGORY, params);
  }

  postAddService(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_ADD_SERVICE, params);
  }

  getAddService(shop_id, category_name) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_ADD_SERVICE, shop_id, category_name));
  }

  getAddMember(shop_id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_ADD_MEMBER, shop_id));
  }

  getCalendar(id) {
    if (this.calendar) {
      return this.calendar;
    } else {
      this.calendar = new Calendar(id);
      return this.calendar;
    }
  }
  getBookingCategories() {
    return this.apiService.get(ApiEndPoints.CATEGORY.BOOKING_CATEGORIES);
  }

  getShopRatingInfo(id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_SHOP_RATING_INFO, id));
  }

  postPushBooking(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_PUSH_BOOKING, params);
  }

  postLastMinuteDiscount(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_LAST_MINUTE_DISCOUNT, params);
  }

  getHappyHourDiscountSelectDay() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.GET_HAPPY_HOUR_DISCOUNT_SELECT_DAY);
  }

  postHappyHourDiscount(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_HAPPY_HOUR_DISCOUNT, params);
  }

  postFlashSale(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_FLASH_SALE, params);
  }

  getBasicSettings(id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_BASICSETTINGS, id));
  }

  postBasicSettings(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_BASICSETTINGS, params);
  }

  getPublicProfileMarketplaceItems(seller_id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.PRODUCT_INFO, seller_id));
  }

  getShopWorkImage(id) {
    return this.apiService.get(sprintf(ApiEndPoints.DASHBOARD.GET_SHOPWORK_IMAGE, id));
  }

  postShopWorkImage(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_SHOPWORK_IMAGE, params);
  }

  deleteModifyShopWorkImage(id) {
    return this.apiService.delete(sprintf(ApiEndPoints.DASHBOARD.DELETE_MODIFY_SHOPWORK_IMAGE, id));
  }

  getDonationStats() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.GET_DONATION_STATS);
  }

  getDonationHistory() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.DONATION_HISTROY);
  }
  // members tab
  getListMembers() {
    return this.apiService.get(ApiEndPoints.DASHBOARD.GET_LIST_MEMBERS);
  }

  postAddMember(params) {
    return this.apiService.post(ApiEndPoints.DASHBOARD.POST_ADD_MEMBER, params);
  }

  putUpdateMember(id, params) {
    return this.apiService.put(sprintf(ApiEndPoints.DASHBOARD.PUT_UPDATE_MEMBER, id), params);
  }

  deleteMember(id) {
    return this.apiService.delete(sprintf(ApiEndPoints.DASHBOARD.DELETE_MEMBER, id));
  }
  
}
