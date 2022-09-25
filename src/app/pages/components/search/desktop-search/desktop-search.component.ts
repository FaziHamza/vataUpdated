import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, ApiService, AppSizeStateService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesHolderService } from 'src/app/shared/services/categories-holder.service';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { SaveSearchModalComponent, FilterModalComponent, TimeLeftPipe } from 'src/app/shared';
import { createQueryString } from 'src/app/shared/utils/querystring-generator';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { ProductService } from '../../product/product.service';

declare var $: any;

@Component({
  selector: 'app-desktop-search',
  templateUrl: './desktop-search.component.html',
  styleUrls: ['./desktop-search.component.scss']
})
export class DesktopSearchComponent implements OnInit {
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
  currentFilterQueryStr = '';
  currentFilters: any = {};
  filterTags = [];
  keyword = null;
  keylist = [];
  subcategories;
  selectedCategory = null;
  attributes = [];
  selectedFilter: any = {}
  attributeQueryString = '';

  onViewSelect(type) {
    this.viewType = type;
   }

  clearAll() {
    this.currentFilters = {};
    this.currentFilterQueryStr = '';
    this.filterTags = [];
    this.getSearchResults();
    this.keylist = [];
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
    this.apiService.get(this.currentUrl + sortQuery + this.currentFilterQueryStr).subscribe(
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
    private fb: FormBuilder,
    private themeService: ThemeService,
    public appSize: AppSizeStateService,
    private productService:ProductService,
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
  ngOnInit(): void {
    this.saveSearchForm = this.fb.group({
      searchTitle: [null, [Validators.required]]
    });
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();
    this.getCategories();
    this.parseQueryParams();
  }


  private getSearchResults(){
      this.currentUrl = '/product/productInfo/?'
      + 'q=' + this.keyword + this.currentFilterQueryStr
      if(this.selectedCategory)
        this.currentUrl += '&category=' + this.selectedCategory.id;
      console.log(this.currentUrl);
      if(this.attributeQueryString.length){
        this.currentUrl += '&attribute_values=' + this.attributeQueryString;
      }
    this.apiService.get(this.currentUrl).subscribe(
      (res: any) => {
        this.productData = res;
      }
    );
  }

  filterProductData(){
    return this.productData ? this.productData.filter(x => ((x.bidding && !this.timeLeft.transform(x.end_datetime).includes('Time Ended')) || !x.bidding)) : []
  }

  getCategories(){
    this.productService.getCategories(true).subscribe((res: any) => {
      this.categoryData = res;
    });
  }

  getCategoriesById(id){
    this.apiService.get(ApiEndPoints.CATEGORY.MARKETPLACE_CATEGORIES_BY_ID + id + '/').subscribe(
      (res) => {
        this.selectedCategory = res;
        this.getSearchResults();
        this.attributes = [];
        if(res.childrens.length)
          this.subcategories = res.childrens;
        else {
          this.subcategories = [];
          this.productService.getAttributesByCategory(id).subscribe(
            (res) => {
              this.attributes = [...res];
              console.log(this.attributes);
            }
          )
        }
      }
    )
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
        this.currentFilterQueryStr = '&' + this.currentFilterQueryStr;
        this.getSearchResults();
      }
    });
  }

  onAttributeSelect(event) {
    event.source.value.selected = !event.source.value.selected;
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
    this.getSearchResults();
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

  public parseQueryParams() {
    this._route.queryParams.subscribe(
      (res) => {
        this.keyword = this._route.snapshot.queryParamMap.get('keyword');

        if(this.keyword){
          this.currentFilters = {};
          this.currentFilterQueryStr = '';
          this.filterTags = [];
          this.selectedCategory = null;
          this.subcategories = [];
          this.getSearchResults();
          this.keylist.push(this.keyword);
          
        } else {
          this._router.navigateByUrl('/home');
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

  checkDarkMode() {
    var dark = localStorage.getItem('dark');
    console.log("dark >", dark);
    
    if (dark == 'true') {
      this.themeService.setDarkTheme(true);
    } else {
      this.themeService.setDarkTheme(false);
    }
  }
}
