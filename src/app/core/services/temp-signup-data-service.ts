import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempSignupDataService {

  userInfo: any;
  privateInfo: any;
  businessInfo: any;
  billingAddress: any;
  billingAddressId: any;
  passportAddressId;
  passportAddress;
  choosePlan: any;
  coverPic = {
    preview: '',
    file: null
  }
  billingAddressPic = {
    preview: '',
    file: null
  }
  passportAddressPic = {
    preview: '',
    file: null
  }

  constructor() { }

  // UserInfo 
  setUserInfo(data) {
    this.userInfo = JSON.stringify(data);  
    localStorage.setItem('userInfo', this.userInfo);  
  }

  removeBusinessInfo() {
    localStorage.removeItem('businessInfo');
  }
  getUserInfo() {
    let data = localStorage.getItem('userInfo');
    return JSON.parse(data);
  }

  // PrivateInfo 
  setPrivateInfo(data) {
    this.privateInfo = JSON.stringify(data);  
    localStorage.setItem('privateInfo', this.privateInfo);
  }
  getPrivateInfo() {
    let data = localStorage.getItem('privateInfo');
    return JSON.parse(data);
  }

  // BusinessInfo 
  setBusinessInfo(data) {
    this.businessInfo = JSON.stringify(data);  
    localStorage.setItem('businessInfo', this.businessInfo);
  }
  getBusinessInfo() {
    let data = localStorage.getItem('businessInfo');
    return JSON.parse(data);
  }

  // BillingAddress 
  setBillingAddress(data) {
    this.billingAddress = JSON.stringify(data);  
    localStorage.setItem('billingAddress', this.billingAddress);
  }
  getBillingAddress() {
    let data = localStorage.getItem('billingAddress');
    return JSON.parse(data);
  }

  // BillingAddressId
  setBillingAddressId(id) {
    this.billingAddressId = id;  
    localStorage.setItem('billingAddressId', this.billingAddressId);
  }
  getBillingAddressId() {
    let id = localStorage.getItem('billingAddressId');
    return id;
  }

  clearData() {
    this.coverPic = {
      preview: '',
      file: null
    };
    this.passportAddressPic = {
      preview: '',
      file: null
    };
    this.billingAddressPic = {
      preview: '',
      file: null
    };
  }

  // PassportAddress 
  setPassportAddress(data) {
    this.passportAddress = JSON.stringify(data);
    if (data) {
      localStorage.setItem('passportAddress', this.passportAddress);
    }  
  }
  getPassportAddress() {
    let data = localStorage.getItem('passportAddress');
    if (data) {
      return JSON.parse(data);
    }
  }

  // PassportAddressId
  setPassportAddressId(id) {
    this.passportAddressId = id;  
    localStorage.setItem('passportAddressId', this.passportAddressId);
  }
  getPassportAddressId() {
    let id = localStorage.getItem('passportAddressId');
    return id;
  }

  // ChoosePlan 
  setChoosePlan(data) {
    this.choosePlan = JSON.stringify(data);  
    localStorage.setItem('choosePlan', this.choosePlan);
  }
  getChoosePlan() {
    let data = localStorage.getItem('choosePlan');
    return JSON.parse(data);
  }

  // if data is exist ? activate the input label as focused to mark MDB label to top 
  activateMDBinput() {
    let list = document.querySelectorAll(".md-form label");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.add('active');
    }
  }

}
