import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filters = {
    selection: [],
    material: [],
    gender: [],
    type: [],
    price: {
      min: 0,
      max: 0,
      step: 1
    },
    location: '',
    section: ''
  }

  constructor() { }

  getFilters(filters) {
    this.filters = filters;
    console.log("filters service > ", this.filters);
    
  }

  setFilters() {
    return this.filters;
  }

  filterUniqueItems(array) {
    const result = [];
    const map = new Map();
    for (const item of array) {
        if(!map.has(item.name) && !map.has(item.value)){
            map.set(item.name, true); // set any value to Map
            result.push({
                name: item.name,
                value: item.value
            });
        }
    }
    return result;
  }

  clearAll() {
    this.filters.selection.length = 0;
    this.filters.material.length = 0;
    this.filters.gender.length = 0;
    this.filters.type.length = 0;
    this.filters.price.step = 1;
    this.filters.location = '';
    this.filters.section = '';
  }

  removeFilter(filter, type) {
    if (type == 'selection') {
      let filtered = this.filters.selection.filter(item => item.name !== filter);
      this.filters.selection = filtered;
      return this.filters.selection;
    }
    if (type == 'material') {
      let filtered = this.filters.material.filter(item => item.name !== filter);
      this.filters.material = filtered;
      return this.filters.material;
    }
    if (type == 'gender') {
      let filtered = this.filters.gender.filter(item => item.name !== filter);
      this.filters.gender = filtered;
      return this.filters.gender;
    }
    if (type == 'type') {
      let filtered = this.filters.type.filter(item => item.name !== filter);
      this.filters.type = filtered;
      return this.filters.type;
    }
    if (type == 'price') {
      this.filters.price.step = 1;
    }
    if (type == 'location') {
      this.filters.location = '';
    }
    if (type == 'section') {
      this.filters.section = '';
    }
  }

}
