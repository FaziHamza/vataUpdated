import { Component, OnInit, ViewChild } from '@angular/core';
import { createQueryString } from 'src/app/shared/utils/querystring-generator';
import { FilterModalComponent, SaveSearchModalComponent, BookingsFilterModalComponent } from 'src/app/shared';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AppSizeStateService, ApiService, UserService } from 'src/app/core';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { CategoriesHolderService } from 'src/app/shared/services/categories-holder.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-bookings-search-view',
  templateUrl: './bookings-search-view.component.html',
  styleUrls: ['./bookings-search-view.component.scss']
})
export class BookingsSearchViewComponent implements OnInit {
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;

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
  currentFilters = {};
  categoriesSelected = [];
  filterTags = [];

  onViewSelect(type) {
    this.viewType = type;
  }

  clearAll() {
    this.currentFilters = {};
    this.currentFilterQueryStr = '';
    this.filterTags = [];
    this.getProduct(this.categoryId);
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
    this.apiService.get(this.currentUrl + sortQuery).subscribe(
      (res: any) => {
        this.productData = res.data;
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
    public appSize: AppSizeStateService
  ) {
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

    if (dark == 'true') {
      this.themeService.setDarkTheme(true);
    } else {
      this.themeService.setDarkTheme(false);
    }
  }

  private getCategoryData(id) {
    this.apiService.get('/booking/categories/' + id).subscribe(
      (res: any) => {
        this.getProduct(id);
        this.categoryData = res;
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingsFilterModalComponent, {
      width: '80%',
      data: {
        name: 'filter modal',
        condition: true,
        color: true,
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
        this.getProduct(this.categoryId);
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
    if (this.currentUrl == null) {
      this.currentUrl = '/booking/shopFilters/?'
        + '&category=' + id + '&ordering=-price,-shipping_price&';
    }
    this.apiService.get(this.currentUrl + this.currentFilterQueryStr).subscribe(
      (res: any) => {
        this.productData = res.data;
        console.log(res);
      }
    );
  }

  public parseQueryParams() {
    this._route.queryParams.subscribe(
      (res) => {
        this.categoryId = this._route.snapshot.paramMap.get('category');
        this.subCategoryId = this._route.snapshot.paramMap.get('subcategory');

        if (this.categoryId) {
          if (!this.subCategoryId && this.categoryId) {
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
    this._router.navigate(['bookings', id]);
  }

  onCatSelect(catData) {
    this.categoriesHolderService.setCategory(catData.name);
  }

}
