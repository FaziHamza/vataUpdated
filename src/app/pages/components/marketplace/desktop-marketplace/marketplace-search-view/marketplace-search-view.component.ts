import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, UserService, AppSizeStateService } from 'src/app/core';
import { CategoriesHolderService } from 'src/app/shared/services/categories-holder.service';
import { FilterModalComponent, TimeLeftPipe } from 'src/app/shared';
import { createQueryString } from 'src/app/shared/utils/querystring-generator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SaveSearchModalComponent } from 'src/app/shared/components/save-search-modal/save-search-modal.component';
declare var $;
import { ThemeService } from '../../../../../shared/services/theme/theme.service';
import { Observable } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../../product/product.service';
@Component({
  selector: 'app-marketplace-search-view',
  templateUrl: './marketplace-search-view.component.html',
  styleUrls: ['./marketplace-search-view.component.scss']
})
export class MarketplaceSearchViewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  isThemeDark: Observable<boolean>;
  isMobileScreen = false;
  public categoryId = null;
  viewType = 'list';
  firstTime = true;
  subCategoryId = null;
  public categoryData = null;
  currentUrl;
  public productData: any = [];
  currentFilterQueryStr;
  currentFilters: any = {};
  categoriesSelected = [];
  filterTags = [];
  attributes: any = [];
  attributeQueryString = '';

  onViewSelect(type) {
    this.viewType = type;
   }

   clearAll() {
     this.currentFilters = {};
     this.currentFilterQueryStr = '';
     this.filterTags = [];
     let id = this.subCategoryId ? this.subCategoryId : this.categoryId;
      this.getProduct(id);
   }
   
   saveSearchForm: FormGroup;


   public onSaveSearch(): void {
    if (!this.saveSearchForm.invalid) {
      let user = this.userService.getUser();
      let url = '/booking/saveSearch/';
      let postData = { user: user.user_details.id, query_string: JSON.stringify(this.currentFilterQueryStr) ? JSON.stringify(this.currentFilterQueryStr) : `category=${this.categoryId}`, title: this.saveSearchForm.value.searchTitle };
      this.apiService.post(url, postData).subscribe(
        (res) => {
          this.dialog.open(SaveSearchModalComponent, {
            width: '50%',
            data: {
              name: 'SaveSearch modal'
            }
          });
          this.saveSearchForm.reset();
          this.trigger.closeMenu();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
    

  onSort(sortQuery) {
    this.apiService.get(this.currentUrl + sortQuery + '&' + this.currentFilterQueryStr).subscribe(
      (res: any) => {
        this.productData = res;
      }
    );
  }

  reMapedFilters = [];
  constructor(
    private _route: ActivatedRoute, 
    private userService: UserService,
    private _router: Router, private apiService: ApiService, private dialog: MatDialog,
    private categoriesHolderService: CategoriesHolderService,
    private fb: FormBuilder,
    private themeService: ThemeService,
    public appSize: AppSizeStateService,
    private productService: ProductService,
    private timeLeft: TimeLeftPipe
  ) {
   }

  ngAfterViewInit() {
    $('.list-view-shops').click(function () {
      $('#Path_166').addClass('active-s');
      $('#Path_168').removeClass('active-s');
    });

    $('.block-view-shops').click(function () {
      $('#Path_168').addClass('active-s');
      $('#Path_166').removeClass('active-s');
    });
  }
  ngOnInit() {
    this.saveSearchForm = this.fb.group({
      searchTitle: [null, [Validators.required]]
    });
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();

    this.parseQueryParams();
    this.categoriesSelected = this.categoriesHolderService.getCategories();
  }

  checkDarkMode() {
    var dark = localStorage.getItem('dark');
    console.log("dark >", dark);
    
    if (dark == 'true') {
      this.themeService.setDarkTheme(true);
    } else {
      this.themeService.setDarkTheme(false);
    }
  }

  private getCategoryData(id) {
    console.log(id);
    this.apiService.get('/product/categoryModify/' + id).subscribe(
      (res: any) => {
        console.log(id);
        this.getProduct(id);
        this.categoryData = res;
        console.log(this.categoryData);
        if(!res.childrens.length){
          this.productService.getAttributesByCategory(id).subscribe(
            (res) => {
              console.log(res);
              this.attributes = [...res];
              console.log(this.attributes);
            }
          )
        }
      }
    );
  }

  onAttributeSelect(event) {
    event.source.value.selected = !event.source.value.selected;
    // console.log(event);
    this.generateAttributeQueryParams();
  }

  generateAttributeQueryParams(){
    let str = '';
    this.attributes.map((attr) => {
      attr.values.map((val) => {
        if(val.selected){
          str += val.id  + ','
        }
      })
    })
    this.attributeQueryString = str.slice(0, str.length - 1);
    console.log(this.attributeQueryString);
    let id = this.subCategoryId ? this.subCategoryId : this.categoryId;
    this.getProduct(id);
  }

  openDialog(): void {    
    const dialogRef = this.dialog.open(FilterModalComponent, {
      width: '80%',
      data: {
        name: 'filter modal',
        condition: true,
        price: true,
        selectedFilter: this.currentFilters
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.currentFilters = result;
        this.filterTags = this.generateTagsArray(result);
        this.currentFilterQueryStr = createQueryString(result, 'id');
        let id = this.subCategoryId ? this.subCategoryId : this.categoryId;
        this.getProduct(id);
      }
    });
  }

  generateTagsArray(selectedFilters) {
    const tags = [];
    Object.keys(selectedFilters).map((key) => {
      const val = selectedFilters[key];
      if (typeof val === 'boolean' && val) {
        tags.push(key);
      }
      if (Array.isArray(val)) {
        val.forEach(element => {
          tags.push(element['name']);
        });
      }
     });
     return tags;
  }

  public getProduct(id) {
    if (this.currentUrl == null || id) {
      this.currentUrl = '/product/productInfo/?category=' + id + '&';
    }
    let parsedUrl = this.currentUrl + this.currentFilterQueryStr;
    if(this.attributeQueryString.length){
      parsedUrl += '&attribute_values=' + this.attributeQueryString;
    }
    console.log(parsedUrl);
    this.apiService.get(parsedUrl).subscribe(
      (res: any) => {
        this.productData = res;
        console.log(res);
      }
    );
  }

  filterProductData(){
    return this.productData ? this.productData.filter(x => ((x.bidding && !this.timeLeft.transform(x.end_datetime).includes('Time Ended')) || !x.bidding)) : []
  }
  
  public parseQueryParams() {
    this._route.params.subscribe(
      (res) => {
        this.categoryId = this._route.snapshot.paramMap.get('category');
        this.subCategoryId = this._route.snapshot.paramMap.get('subcategory');
        if (this.categoryId) {
          if (!this.subCategoryId) {
            this.getCategoryData(this.categoryId);
          } else if (this.subCategoryId) {
            this.getCategoryData(this.subCategoryId);
          } else {
            this._router.navigateByUrl('/home');
          }
        }
      },
      (err) => {
        this._router.navigateByUrl('/home');
      }
    );
  }

  routeTo(id) {
    this._router.navigate(['marketplace', id]);
  }

  onCatSelect(catData) {
    this.categoriesHolderService.setCategory(catData.name);
  }

}
