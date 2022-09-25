import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHoldingService {

  data: any;

  constructor() { }

  // to hold the data 
  setData(data) {
    this.data = data;
    console.log("data got in service > ", this.data);
  }

  // to send the data where required
  getData() {
    return this.data;
  }

}
