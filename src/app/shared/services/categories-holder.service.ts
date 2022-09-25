import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesHolderService {

  categories = [];

  constructor() { }

  setCategory(category) {
    this.categories = [];
    this.categories.push(category);
    this.categories = Array.from(new Set(this.categories));
  }
  
  getCategories() {
    return this.categories;
  }

  removeCategory(category) {
    let filtered = this.categories.filter(item => item !== category);
    this.categories = filtered;
    return this.categories;
  }

  clearAll() {
    this.categories.length = 0;
  }
}
