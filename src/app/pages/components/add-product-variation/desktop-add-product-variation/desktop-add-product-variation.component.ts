import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { DragulaService } from "ng2-dragula";
import { Location } from '@angular/common';
import { MatTable } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { AddProductVariationService } from '../add-product-variation.service';
import { ProductService } from '../../product/product.service';


@Component({
  selector: 'app-desktop-add-product-variation',
  templateUrl: './desktop-add-product-variation.component.html',
  styleUrls: ['./desktop-add-product-variation.component.scss']
})

export class DesktopAddProductVariationComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<any>;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  attributes: any[] = [];
  show_option = false;
  active_attribute;
  category_id;

  show_combination = false;
  variationForm: FormGroup;
  uploadingFiles = [];
  preview = [];

  filteredAttributes = [];
  displayedColumns: string[] = [];
  dataSource = [];
  ImageAttributes = null;
  variationImages = [

  ]
  constructor(
    private dragulaService: DragulaService,
    public location: Location,
    private variationService: AddProductVariationService,
    private _route:ActivatedRoute,
    private _router: Router,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.dragulaService.createGroup('DRAGULA_CONTAINER', {});
    this.parseQueryParams();
  }

  ngOnDestroy(){
    this.dragulaService.destroy('DRAGULA_CONTAINER')
  }

  public parseQueryParams() {
    this._route.params.subscribe(
      (res) => {
        this.category_id = this._route.snapshot.paramMap.get('id');
        if(this.category_id){
          this.getAttributes();
        } else {
          this._router.navigateByUrl('add-product');
        }
      },
      (err) => {
        this._router.navigateByUrl('add-product');
      }
    );
  }

  getAttributes(){
    this.productService.getAttributesByCategory(this.category_id).subscribe(
      (res) => {
        console.log(res);
        this.attributes = [...res];
        if(this.attributes.length){
          this.active_attribute = this.attributes[0];
        }
      }
    )
  }

  createTable(){
    this.dataSource.splice(0, this.dataSource.length);
    this.displayedColumns = [
      'id', 
      'Action', 
      'Photos', 
      // 'SKU', 
      'Quantity', 
      'Price'];
    
    let tempCombine = [];
    this.filteredAttributes[0].values.map((op) => {
      let obj = {}
      obj[this.filteredAttributes[0].name] = op.name;
      tempCombine.push(obj);
    })
    // Combinations
    this.displayedColumns.push(this.filteredAttributes[0].name);
    for(let j = 1; j < this.filteredAttributes.length; j++){
      this.displayedColumns.push(this.filteredAttributes[j].name);
      let temp = [];
      tempCombine.map((resultantoption) => {
        this.filteredAttributes[j].values.map((option) => {
          let tmpObj = resultantoption;
          tmpObj[this.filteredAttributes[j].name] = option.name;
          temp.push({...tmpObj});
        })
      })
      if(this.filteredAttributes[j].values.length){
        tempCombine = [];
        tempCombine = temp;
      }
    }
    tempCombine.map((tempObj) => {
      let obj = {
        id: this.dataSource.length, 
        Action: 'Delete', 
        // Photos: [], 
        // SKU: '',
        Quantity: 1,
        Price: null,
      }
      this.filteredAttributes.map((attr) => {
        obj[attr.name] = tempObj[attr.name];
      })
      this.dataSource.push(obj);
    })
    this.dataSource = this.dataSource;
  }

  deleteCombination(i){
    this.dataSource.splice(i, 1);
    console.log(this.dataSource);
    this.table.renderRows();
  }

  onFileUpload(data) {
    if(data.files.length){
      data.files[data.files.length - 1].id = this.ImageAttributes;
      data.preview[data.files.length - 1].id = this.ImageAttributes;
      this.uploadingFiles = data.files;
      this.preview = data.preview;
    }
  }

  filterPreviewImages(){
    return this.preview.filter(x => x.id === this.ImageAttributes);
  }

  removeImage(i) {
    this.uploadingFiles.splice(i, 1);
    this.preview.splice(i, 1);
  }
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    
    // Add our attribute
    if ((value || '').trim()) {
      this.attributes.push({name: value.trim(), values: []});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(attribute: any): void {
    const index = this.attributes.indexOf(attribute);

    if (index >= 0) {
      this.attributes.splice(index, 1);
    }
  }

  selectAttribute(event: any){
    this.active_attribute = event;
  }

  toggleShowOption(){
    this.show_option = !this.show_option;
  }

  toggleShowCombination(){
    if(this.attributes.length){
      this.filteredAttributes = [];
      this.attributes.map((attr) => {
        if(this.filterSelectedOptions(attr).length){
          let filteredOptions = attr.values.filter(x => x.selected === true);
          let attribute = {...attr};
          attribute.values = filteredOptions;
          this.filteredAttributes.push(attribute);
        }
      })
      if(this.filteredAttributes.length){
        this.show_combination = !this.show_combination;
        this.createTable();
        this.ImageAttributes = 0;
      }

    }
  }

  addOption(option){
    let found = false;
    this.attributes.map((attr) => {
      if(attr.name === this.active_attribute.name){
        attr.values.map((opt) => {
          if(opt.value === option){
            alert('Option already exist');
            found = true;
          }
        })
        if(!found){
          attr.values.push({value: option, selected: attr.values.length ? false : true});
        }
      }
    })
    this.toggleShowOption();
  }

  selectOption(index){
    this.active_attribute.values[index].selected = !this.active_attribute.values[index].selected;
    this.attributes.map((attr) => {
      if(attr.id === this.active_attribute.id){
        attr = this.active_attribute;
        return;
      }
    })
  }

  filterSelectedOptions(attr){
    return attr.values.filter(x => x.selected === true);
  }

  setImageAttribute(event){
    if(event.value !== null){
      this.ImageAttributes = event.value;
    }
    else
      this.ImageAttributes = null;
  }

  setQuantity(i, value){
    this.dataSource[i].Quantity = parseInt(value);
  }

  setPrice(i, value){
    this.dataSource[i].Price = parseInt(value);
  }

  addAttribute(){
    let valid = true;
    this.dataSource.map((data) => {
      if(!data.Price || !data.Quantity){
        valid = false;
        return;
      }
    })
    if(!valid){
      return alert('Fields must not be empty');
    }

    let value_ids = [];
    this.filteredAttributes.map((attr) => {
      attr.values.map((val) => {
        value_ids.push(val.id);
      })
    })
    
    const payload = {
      attributes: this.filteredAttributes,
      variationsList: this.dataSource,
      images: this.uploadingFiles,
      category_id: this.category_id,
      attribute_values: value_ids
    }
    this.variationService.variations = payload;
    console.log(this.variationService.variations);
    this.location.back();
  }
}
