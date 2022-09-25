import { Component, OnInit, forwardRef, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../../../app/shared/services/theme/theme.service';
import { FormArray, FormGroup, FormBuilder, Validators, NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UserService } from 'src/app/core';
import { ProductService } from '../../product/product.service';
import { ToastrService } from 'ngx-toastr';
import { Pattern } from 'src/app/shared/regex.pattern';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AddProductVariationService } from '../../add-product-variation/add-product-variation.service';

declare var $:any;

@Component({
  selector: "app-desktop-add-product",
  templateUrl: "./desktop-add-product.component.html",
  styleUrls: ["./desktop-add-product.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DesktopAddProductComponent),
      multi: true,
    },
  ],
})
export class DesktopAddProductComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('childMenu', {static: true}) public childMenu: any;
  isThemeDark: Observable<boolean>;
  tab: string = "marketplace";

  selectedIncrement = 0;
  increments = [
    { id: 1, value: "0.15$", actual: 0.15 },
    { id: 2, value: "1$", actual: 1 },
    { id: 3, value: "5$", actual: 5 },
  ];

  selectedDelivery = 0;
  deliverys = [
    { id: 1, value: "1 Day" },
    { id: 2, value: "2 Days" },
    { id: 3, value: "1 Week" },
    { id: 4, value: "2 Weeks" },
  ];

  payments = [];
  submitted = false;
  textRemainingName;
  textRemainingDesc;
  fd = new FormData();
  preview = [];
  totalAmount = 0;
  uploadingFiles = [];
  categoryData = [];
  conditionData;
  selectedCategory;
  categoryArray: FormArray;
  shiptoArray: FormArray = [] as any;
  productLocationArray: FormArray = [] as any;
  addProductForm: FormGroup;
  attributesArray: FormArray = [] as any;
  variations = null;
  variationError = null;
  show_variation = false;
  customErr = false;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    let today = new Date();
    let offset = today.getDate() + 10;
    let offsetDate: Date;
    if(offset > 30){
      offsetDate = new Date(new Date().setDate(offset%30))
      offsetDate.setMonth(today.getMonth() + 1);
    } else{
      offsetDate = new Date(new Date().setDate(offset));
    }
    return day >= today && day < offsetDate;
  }
  constructor(
    private themeService: ThemeService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router,
    private variationService: AddProductVariationService
  ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.initializeForm();
    this.onChanges();
    
    this.productService.getCategories().subscribe((res: any) => {
      // this.categoryData = res;
      res.forEach(element => {
        if(element.childrens.length){
          element.childrens.map((child, childindex, childrens) => {
            res.map((marketCatagory, marketindex, marketarray) => {
              if(marketCatagory.id === child.id){
                childrens[childindex] = marketCatagory;
              }
              if(this.variations && this.variations.category_id === marketCatagory.id){
                this.selectedCategory = marketCatagory;
                this.addProductForm.controls['category'].setValue(marketCatagory.id);
              }
            })
          })
        }
      });
      res.map((element) => {
        if(!element.ancestors.length){
          this.categoryData.push(element);
        }
      })
      console.log(this.categoryData);
    });

    this.productService.getCondition().subscribe((res: any) => {
      this.conditionData = res;
    });

    this.variations = this.variationService.variations;
    if(this.variationService.tempFormData)
      this.addProductForm = this.variationService.tempFormData;
    if(!this.variations){
      this.addProductForm.controls['variation'].setValue(false);
    }
    this.checkDarkMode();
    this.getShipto();
    this.getProductLocations();

    this.addProductForm
      .controls["push_on_searchlist"]
      .valueChanges.subscribe((res) => {
        if (res) {
          this.totalAmount = this.totalAmount + 10;
        } else{
          this.totalAmount = this.totalAmount - 10;
        }
      });
    this.addProductForm
      .controls["categorypromo_on_top"]
      .valueChanges.subscribe((res) => {
        if (res) {
          this.totalAmount = this.totalAmount + 10;
        } else{
          this.totalAmount = this.totalAmount - 10;
        }
      });
    this.addProductForm.controls["push_on_home"].valueChanges.subscribe((res) => {
      if (res) {
        console.log('home');
        this.totalAmount = this.totalAmount + 10;
      } else{
        this.totalAmount = this.totalAmount - 10;
      }
    });

    this.addProductForm
      .controls["push_on_nearbyme"]
      .valueChanges.subscribe((res) => {
        if (res) {
          this.totalAmount = this.totalAmount + 10;
        } else{
          this.totalAmount = this.totalAmount - 10;
        }
      });
    this.addProductForm
      .controls["push_on_marketplace"]
      .valueChanges.subscribe((res) => {
        if (res) {
          this.totalAmount = this.totalAmount + 10;
        } else{
          this.totalAmount = this.totalAmount - 10;
        }
      });
  }

  ngOnDestroy(){
    this.variationService.variations = null;
  }

  ngAfterViewInit(){
    if(this.variations){
      this.addProductForm.get('variation').setValue(true);
      this.addProductForm.controls['variation'].enable();
    }
  }

  onCh() {
    if(Number(this.addProductForm.get('bidding_price').value)  <= Number(this.addProductForm.get('start_bid').value))
      this.customErr = true;
    else 
      this.customErr = false;
  }

  onChanges() {

    if (this.addProductForm.get('bidding').value === false) {
      this.addProductForm.get('bidding_price').disable();
      this.addProductForm.get('start_bid').disable();
      this.addProductForm.get('fixed_price').enable();
      this.addProductForm.get('increment').disable();
      // this.addProductForm.controls['variation'].setValue(true);
    }
    if (this.addProductForm.get("is_free").value === false) {
      this.addProductForm.get("shipping_price").enable();
      this.addProductForm
        .get("shipping_price")
        .setValidators([
          Validators.required,
          Validators.pattern(Pattern.numericRegex),
        ]);
    }
    this.addProductForm.get('bidding').valueChanges
      .subscribe(bidding => {
        if (bidding === false) {
          this.addProductForm.get('bidding_price').setValue(0)
          this.addProductForm.get('start_bid').setValue(0)
          this.addProductForm.get('bidding_price').disable();
          this.addProductForm.get('start_bid').disable();
          this.addProductForm.get('fixed_price').enable();
          this.addProductForm.get('increment').disable();
          this.addProductForm.get('price').enable();
          this.addProductForm.get('start').clearValidators();
          this.addProductForm.get('start').disable();
          this.addProductForm.controls['variation'].enable();
          this.calculateTotalValue();
        } else {
          this.addProductForm.controls['variation'].setValue(false);
          this.addProductForm.controls['variation'].disable();
          this.addProductForm.get('fixed_price').disable();
          this.addProductForm.get('bidding_price').setValidators([Validators.required]);
          this.addProductForm.get('start_bid').setValidators([Validators.required]);
          this.addProductForm.get('increment').enable();
          this.addProductForm.get('price').disable();
          this.addProductForm.get('start').setValidators([Validators.required]);
          this.addProductForm.get('start').enable();
          this.addProductForm.get('bidding_price').enable();
          this.addProductForm.get('start_bid').enable();

        }
      });
    this.addProductForm.get('is_free').valueChanges.subscribe(shipping => {
      if (shipping === false) {
        this.addProductForm.get("shipping_price").enable();
        this.addProductForm
          .get("shipping_price")
          .setValidators([
            Validators.required,
            Validators.pattern(Pattern.numericRegex),
          ]);
      } else {
        this.addProductForm.get("shipping_price").disable();
      }
    });

    this.addProductForm.get('fixed_price').valueChanges.subscribe(
      (fixed_price) => {
        if(fixed_price === true){
          this.addProductForm.get('price').enable();
          this.addProductForm.get('price').setValidators([Validators.required, Validators.pattern(Pattern.numericRegex)])
        } else{
          this.addProductForm.get('price').setValue(0)
          this.addProductForm.get('price').clearValidators();
          this.addProductForm.get('price').disable();
          this.calculateTotalValue();
        }
      }
    )

    this.addProductForm.get('variation').valueChanges.subscribe(
      (variation) => {
        if(variation === true){
          $('#stock_count').hide();
          this.show_variation = true;
          this.addProductForm.get('stock_count').disable();
          this.addProductForm.get('stock_count').clearValidators();
        } else{
          $('#stock_count').show();
          this.show_variation = false;
          this.addProductForm.get('stock_count').enable();
          this.addProductForm.get('stock_count').setValidators([Validators.required]);
        }
        console.log(this.variations, this.selectedCategory, this.show_variation);
      }
    )
  }

  initializeForm() {
    this.addProductForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(40), Validators.required]],
      category: ['', Validators.required],
      is_free: [false],
      condition: ["", Validators.required],
      about_product: ["", [Validators.maxLength(500), Validators.required]],
      subline: [""],
      end_date: [""],
      end_time: [""],
      image: [""],
      price: [
        "",
        [Validators.required, Validators.pattern(Pattern.numericRegex)],
      ],
      fixed_price: [true],
      bidding: [false],
      bidding_price: [""],
      start_bid: [""],
      on_stock: [""],
      stock_count: ["", Validators.required],
      increment: ["", Validators.required],
      shipping_details: [""],
      ship_to: [null],
      product_location: [null],
      ask_for_change: [false],
      make_offer: [false],
      contact_messenger: [false],
      shipping_price: [''],
      start: [''],
      push_on_searchlist: [false],
      push_on_marketplace: [false],
      shipping_time: ["", Validators.required],
      categorypromo_on_top: [false],
      push_on_home: [false],
      push_on_nearbyme: [false],
      total: [this.totalAmount, [Validators.required]],
      variation: [false],
      attributes: this.formBuilder.array(
        [],
      ),
    })
    this.addProductForm.get('start').disable();
    this.addProductForm.get('variation').disable();
  }

  categorySelected(evt){
    this.selectedCategory = evt;
    this.addProductForm.controls['category'].setValue(evt.id);
    this.variations = null;
    this.addProductForm.controls['variation'].setValue(false);
    this.addProductForm.controls['variation'].enable();
    // this.show_variation = false;
  }

  getShipto(){
    this.productService.getShipto().subscribe(
      (res) => {
        console.log(res);
        this.shiptoArray = res;
      }
    )
  }

  getProductLocations(){
    this.productService.getProductLocation().subscribe(
      (res) => {
        console.log(res);
        this.productLocationArray = res;
      }
    )
  }

  // createAttributes() {
  //   this.attributesArray.push(
  //     this.formBuilder.group({
  //       attr_type: ["", [Validators.required, RxwebValidators.unique()]],
  //       attr_name: ["", [Validators.required, RxwebValidators.unique()]],
  //       price: [0, Validators.required],
  //     })
  //   );
  // }

  // addAttributes(): void {
  //   this.attributesArray = this.addProductForm.get("attributes") as FormArray;
  //   this.createAttributes();
  // }

  // removeAttributes(i): void {
  //   this.attributesArray = this.addProductForm.get("attributes") as FormArray;
  //   this.attributesArray.removeAt(i);
  // }

  calculateTotalValue() {
    var total = 0;
    
    if(this.addProductForm.get('push_on_home').value)
      total += 10;
    if(this.addProductForm.get('push_on_searchlist').value)
      total += 10;
    if(this.addProductForm.get('categorypromo_on_top').value)
      total += 10;
    if(this.addProductForm.get('push_on_nearbyme').value)
      total += 10;
    if(this.addProductForm.get('push_on_marketplace').value)
      total += 10;
    this.totalAmount = total;
    return;
  }

  onSubmit(form: NgForm) {
    if((this.addProductForm.get('variation').value === true && !this.variations) || (this.addProductForm.get('variation').value === false && !this.addProductForm.get('stock_count').value)){
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      this.variationError = 'This field is required';
      setTimeout(() => this.variationError = null, 5000);
      return
    }
    if (this.uploadingFiles && this.uploadingFiles.length) {
      this.addProductForm.controls['image'].setErrors(null);
    } else {
      this.addProductForm.controls['image'].setErrors({'imageRequired': true});
      this.addProductForm.markAllAsTouched();
      this.submitted = false;
      return;
    }
    delete this.addProductForm.value.image;
    const data = this.addProductForm.value;
    const attributes = this.addProductForm.value.attributes;
    delete data.attributes;
    
    this.submitted = true;
    console.log(this.addProductForm);
    if (this.addProductForm.invalid) {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      return;
    }
    data.total = this.totalAmount;
    this.fd.set("seller", this.userService.getUser().user_details.id);
    if (data.total.toString().includes("CHF")) {
      data.total = Number(
        data.replace(/[CHF,]/g, "")
      );
    }

    console.log(data);
    for (const key in data) {
      if (key) {
        if (key === "category") {
          let categories: any = [];
          categories.push(this.selectedCategory.id)
            this.fd.append('category', JSON.stringify(categories));
        } 
        else if(key === 'ship_to' || key === 'product_location') {
          let arr = [];
          if(data[key])
          data[key].map((x) => {
            arr.push(x);
          })
          console.log(arr);
          this.fd.append(key, JSON.stringify(arr));
        } 
        else {
          if(key === 'end_date' && data[key]){
            let date: Date = this.addProductForm.get('end_date').value;
            date.setDate(date.getDate() + 1);
            data[key] = date.toISOString().split('T')[0]
          }
          this.fd.set(key, data[key]);
        }
      }
    }
    if(this.addProductForm.get('bidding').value){
      this.fd.set('price', this.addProductForm.get('bidding_price').value);
    }
    console.log(this.fd);
    if(this.variations){
      this.fd.set('attributes', JSON.stringify(this.variations.variationsList));
      this.fd.set('attribute_values', JSON.stringify(this.variations.attribute_values));
    }
    console.log(this.fd);
    if (this.uploadingFiles.length > 0) {
      this.uploadingFiles.forEach((file) => this.fd.append("image", file));
    } else {
      this.fd.delete("image");
    }
    let ids = [];
    console.log(this.fd);
    this.productService.addProduct(this.fd).subscribe(res => {
      console.log(res);
      if(this.variations && this.variations.images){
        let productVariations = res.data.productVariations;
        productVariations.map((vary) => {
          this.variations.images.map((img, i, arr) => {
            if(img.id !== null && img.id !== undefined && img.id === vary.attr.id){
              arr[i].id = vary.id
              ids.push(vary.id)
            }
          })
        })
        if(this.variations.images.length){
          let filteredId = [];
          $.each(ids, function(i, el){
              if($.inArray(el, filteredId) === -1) filteredId.push(el);
          });
          this.productService.uploadAttributeImages(this.variations.images, filteredId).subscribe(
            (res) => {console.log(res)},
            (err) => {console.log(err)}
          )
        }
      }
      
      
      this.toastrService.success('Product added successfully');
      this.uploadingFiles.forEach(file => this.fd.delete('image'));
      this.router.navigate(['/']);
      this.variationService.tempFormData = null;
      // this.preview = [];
      // this.uploadingFiles = [];
      // this.addProductForm.reset();
      // form.reset();
      // this.variations = null;
      // this.addProductForm.clearValidators();
      // this.submitted = false;
      // this.addProductForm.setValue({ 'total': 0 });
      
    }, err => {
      this.uploadingFiles.forEach(file => this.fd.delete('image'));
      this.preview = [];
      this.uploadingFiles = [];
      this.submitted = true;
    });
  }

  onFileUpload(data) {
    this.uploadingFiles = data.files;
    this.preview = data.preview;
  }

  removeImage(i) {
    this.uploadingFiles.splice(i, 1);
    this.preview.splice(i, 1);
    console.log(this.uploadingFiles);
  }

  checkDarkMode() {
    var dark = localStorage.getItem("dark");

    if (dark == "true") {
      this.themeService.setDarkTheme(true);
    } else {
      this.themeService.setDarkTheme(false);
    }
  }
  changeTab(tab) {
    this.tab = tab;
  }

  selectIncrement(value) {
    if (this.addProductForm.get("increment").enabled) {
      this.selectedIncrement = value;
    }
  }

  selectDelivery(value) {
    this.selectedDelivery = value;
  }

  selectPayment(payment) {
    if (this.payments.includes(payment)) {
      this.payments = this.payments.filter((item) => item !== payment);
    } else {
      this.payments.push(payment);
    }
  }
  onChange: any = () => {};
  onTouch: any = () => {};
  val = "";

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
