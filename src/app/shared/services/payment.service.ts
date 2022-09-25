import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apiService: ApiService) { }

  addUserCard(cardData) {
    return this.apiService.post(ApiEndPoints.PAYMENT.ADD_CARD, cardData);
  }

  addUserSubscription(paymentData) {
    return this.apiService.post(ApiEndPoints.PAYMENT.ADD_SUBSCRIPTION, paymentData);
  }
}
