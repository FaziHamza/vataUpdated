import { Component, OnInit } from '@angular/core';
import { Pattern } from 'src/app/shared/regex.pattern';
import { FormArray, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'desktop-add-product',
  templateUrl: './desktop-add-product.component.html',
  styleUrls: ['./desktop-add-product.component.scss']
})
export class DesktopAddProductComponent implements OnInit {
  tab: string = "marketplace";

  submitted = false;
  textRemainingName;
  textRemainingDesc;
  fd = new FormData();
  preview = [];
  uploadingFiles = [];
  categoryData;
  conditionData;
  categoryArray: FormArray;
  addProductForm: FormGroup;
  // addProductModel: Marketplace = new Marketplace();
  remainingText = {
    productName: void 0
  };

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    // private productService: ProductService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.onChanges();
    // this.productService.getCategories().subscribe((res: any) => {
    //   this.categoryData = res;
    // });

    // this.productService.getCondition().subscribe((res: any) => {
    //   this.conditionData = res;
    // });
  }

  changeTab(tab) {
    this.tab = tab;
    console.log(this.tab);
  }

  onChanges() {
    if (this.addProductForm.get('bidding').value === false) {
      this.addProductForm.get('start_bid').disable();
      this.addProductForm.get('bidding_price').disable();
    }
    if (this.addProductForm.get('is_free').value === false) {
      this.addProductForm.get('shipping_price').enable();
      this.addProductForm.get('shipping_price').setValidators([Validators.required, Validators.pattern(Pattern.numericRegex)]);
    }
    this.addProductForm.get('bidding').valueChanges
      .subscribe(bidding => {
        if (bidding === false) {
          this.addProductForm.get('start_bid').disable();
          this.addProductForm.get('bidding_price').disable();
        } else {
          this.addProductForm.get('start_bid').setValidators([Validators.required]);
          this.addProductForm.get('bidding_price').setValidators([Validators.required]);

          this.addProductForm.get('start_bid').enable();
          this.addProductForm.get('bidding_price').enable();
        }
      });
    this.addProductForm.get('is_free').valueChanges.subscribe(shipping => {
      if (shipping === false) {
        this.addProductForm.get('shipping_price').enable();
        this.addProductForm.get('shipping_price').setValidators([Validators.required, Validators.pattern(Pattern.numericRegex)]);
      } else {
        this.addProductForm.get('shipping_price').disable();
      }
    });
  }

  getFormattedPrice(value) {
    if (value) {
      value = value.toString().replace(/[CHF,]/g, '');
      if (isNaN(value)) {
        this.addProductForm.get('total').setErrors({ priceInvalid: true });
      }
      return 'CHF' + value;
    } else {
      return 'CHF0';
    }
  }

  initializeForm() {
    this.addProductForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(40), Validators.required]],
      categoryArray: this.formBuilder.array(
        [this.formBuilder.group({
          category: ['', Validators.required]
        })]
      ),
      is_free: [false],
      condition: ['', Validators.required],
      about_product: ['', [Validators.maxLength(500), Validators.required]],
      subline: [''],
      price: ['', [Validators.required, Validators.pattern(Pattern.numericRegex)]],
      fixed_price: [false],
      bidding: [false],
      start_bid: [''],
      bidding_price: [''],
      on_stock: [''],
      increment: ['', Validators.required],
      shipping_details: [''],
      ask_for_change: [false],
      make_offer: [false],
      contact_messenger: [true],
      shipping_price: [''],
      start: ['', Validators.required],
      push_on_searchlist: [''],
      push_on_marketplace: [false],
      shipping_time: ['', Validators.required],
      categorypromo_on_top: [true],
      push_on_home: [false],
      push_on_nearbyme: [true],
      total: ['CHF0', [Validators.required]]
    });
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (this.addProductForm.invalid) {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      return;
    }

    this.fd.set('seller', '1');
    if (this.addProductForm.value.total.toString().includes('CHF')) {
      this.addProductForm.value.total = Number(this.addProductForm.value.total.replace(/[CHF,]/g, ''));
    }
    for (const key in this.addProductForm.value) {
      if (key) {
        if (key === 'categoryArray') {
          this.addProductForm.value.categoryArray.forEach(category => {
            this.fd.append('category', category.category);
          });
        } else {
          this.fd.set(key, this.addProductForm.value[key]);
        }
      }
    }
    if (this.uploadingFiles.length > 0) {
      this.uploadingFiles.forEach(file => this.fd.append('image', file));
    } else {
      this.fd.delete('image');
    }

    // this.productService.addProduct(this.fd).subscribe(res => {
    //   console.log(res);
    //   this.toastrService.success('Product added successfully');
    //   this.uploadingFiles.forEach(file => this.fd.delete('image'));
    //   this.preview = [];
    //   this.uploadingFiles = [];
    //   // this.addProductForm.reset();
    //   form.resetForm();
    //   this.addProductForm.clearValidators();
    //   this.submitted = false;
    //   this.addProductForm.setValue({ 'total': 'CHF0' });
    // }, err => {
    //   this.uploadingFiles.forEach(file => this.fd.delete('image'));
    //   this.preview = [];
    //   this.uploadingFiles = [];
    //   this.submitted = true;
    // });
  }

  createCategory() {
    this.categoryArray.push(this.formBuilder.group({
      category: ''
    }));
  }

  addCategory(): void {
    this.categoryArray = this.addProductForm.get('categoryArray') as FormArray;
    this.createCategory();
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

  removeCategory(i): void {
    if (i < 1) { return; }
    this.categoryArray = this.addProductForm.get('categoryArray') as FormArray;
    this.categoryArray.removeAt(i);
  }

  onKeyUp(event, inputName) {
    if (event) {
      this.remainingText[inputName] = event.target.maxLength - event.srcElement.value.length;
    }
  }
}
