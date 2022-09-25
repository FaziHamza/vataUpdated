import { Component, OnInit, Inject } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { ApiService, AppSizeStateService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/pages/components/product/product.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {
  isMobileScreen: Boolean = false;
  isThemeDark: Observable<boolean>;

  dataGet: any = {}
  sliderValue = 1;

  filterData = {
    colors: [] = [],
    conditions: [] = []
  };

  categoryData = [];
  subCategories = [];

  selectedFilter = {
    fixed_price: false,
    is_free: false,
    contact_messenger: false,
    push_on_home: false,
    push_on_searchlist: false,
    push_on_marketplace: false,
    push_on_nearbyme: false,
    categorypromo_on_top: false,
    on_stock: false,
    make_offer: false,
    ask_for_change: false,
    condition: [],
    price_range: {
      min: 0,
      max: 100000,
    },
  }

  // getting from service onInit
  
  constructor(
    private themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<FilterModalComponent>,
    private filter: FilterService,
    private apiService: ApiService,
    public appSize: AppSizeStateService,
  ) {
    if (data) {
      this.dataGet = data;
      this.selectedFilter = Object.keys(data.selectedFilter).length === 0 && data.selectedFilter.constructor === Object ? this.selectedFilter : data.selectedFilter;
      this.getRequiredData(this.selectedFilter.condition);
      console.log(this.selectedFilter)
    }
  }

  getRequiredData(condition) {
    if(condition.length) {
      this.selectedFilter.condition = condition;
    } else {
      this.apiService.get(ApiEndPoints.PRODUCT.CONDITION).subscribe(res => {
          this.selectedFilter.condition = res.map(condition => {
            return {
              name: condition.name,
              id: condition.id,
              isSelected: false
            };
          });
      });
    }
  }

  onConditionSelect(event) {
    this.selectedFilter.condition.map(val => {
      if (event.source.value.id === val.id) {
          val.isSelected = event.checked;
      }
      });
    // if (event.checked) {
    //   this.selectedFilter.condition.push(...this.filterData.conditions.filter(s => {
    //     return s.id === event.source.value.id;
    //   }));
    // } else {
    //   const resIndex = this.selectedFilter.condition.findIndex(
    //     function(e) { return e.id === event.source.value.id});
    //       if (resIndex !== -1) {
    //         this.selectedFilter.condition.splice(resIndex, 1);
    //       }
    //     }
    }

  // onColorSelect(event) {
  //   this.selectedFilter.attributes.map(val => {
  //     if (event.source.value.id === val.id) {
  //         val.isSelected = event.checked;
  //     }
  //     });
  //   if (event.checked) {
  //     this.selectedFilter.attributes.push(...this.filterData.colors.filter(s => {
  //       return s.id === event.source.value.id;
  //     }));
  //   } else {
  //     const resIndex = this.selectedFilter.attributes.findIndex(
  //       function(e) { return e.id === event.source.value.id});
  //         if (resIndex !== -1) {
  //           this.selectedFilter.attributes.splice(resIndex, 1);
  //         }
  //       }
  // }

  onFixedPrice(event) {
    this.selectedFilter.fixed_price = event.checked;
  }

  onFree(event) {
    this.selectedFilter.is_free = event.checked;
  }
  onMessenger(event) {
    this.selectedFilter.contact_messenger = event.checked;
  }
  onPushOnHome(event) {
    this.selectedFilter.push_on_home = event.checked;
  }
  onPushOnSearchList(event) {
    this.selectedFilter.push_on_searchlist = event.checked;
  }
  onPushOnMarketplace(event) {
    this.selectedFilter.push_on_marketplace = event.checked;
  }
  onPushNearby(event) {
    this.selectedFilter.push_on_nearbyme = event.checked;
  }
  onStock(event) {
    this.selectedFilter.on_stock = event.checked;
  }
  onMakeOffer(event) {
    this.selectedFilter.make_offer = event.checked;
  }
  onAskForChange(event) {
    this.selectedFilter.ask_for_change = event.checked;
  }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();
    console.log("data >", this.dataGet);
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

  // selected checkboxes using service state 
  checkSelected() {
    console.log("selectedFilters > ", this.selectedFilter);

    
    // for selection checkboxes 

    // for gender checkboxes

    // for type checkboxes
 

    // location
    
  }

  onConfirmClick(): void {
    this.dialogRef.close(this.selectedFilter);
  }


  // set the value in filters object to store in service and use ahead

  applyChanges() {

    // this.filter.getFilters(this.filters);
    console.log(this.selectedFilter);
    
    // close dialog
    this.onConfirmClick();
  }

}
