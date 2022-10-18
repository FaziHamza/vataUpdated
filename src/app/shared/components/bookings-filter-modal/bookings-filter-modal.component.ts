import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingsService } from '../../services/bookings.service';
import { FilterService } from '../../services/filter.service';
import { ApiService, AppSizeStateService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/pages/components/product/product.service';

@Component({
  selector: 'app-bookings-filter-modal',
  templateUrl: './bookings-filter-modal.component.html',
  styleUrls: ['./bookings-filter-modal.component.scss']
})
export class BookingsFilterModalComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  filterDetails;

  dataGet: any = {}
  sliderValue = 1;

  filterData = {
    colors: [] = [],
    conditions: [] = []
  };

  categoryData = [];
  subCategories = [];
  ngOnInit() {
    // this.getData();
  }
  selectedFilter = {
    gShock: false,
    casio: false,
    hublot: false,
    danielClein: false,
    orient: false,
    rolex: false,
    tissot: false,
    timeX: false,
    metal: false,
    plastic: false,
    forMan: false,
    forWoman: false,
    on_stock: false,
    make_offer: false,
    ask_for_change: false,
    data: [],
    price_range: {
      min: 0,
      max: 100000,
    },
  }

  constructor(private bookingService: BookingsService,
    private themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BookingsFilterModalComponent>,
    private filter: FilterService,
    private apiService: ApiService,
    public appSize: AppSizeStateService,
  ) {
    if (data) {
      debugger
      this.dataGet = data;
      this.selectedFilter = Object.keys(data.selectedFilter).length === 0 && data.selectedFilter.constructor === Object ? this.selectedFilter : data.selectedFilter;
      this.getRequiredData(this.selectedFilter.data);
      console.log(this.selectedFilter)
    }
  }
  getRequiredData(condition) {
    if (condition.length) {
      this.selectedFilter.data = condition;
    } else {
      // this.bookingService.getBookingsByCategory('').subscribe((response) => {
      //   this.filterDetails = response.data;
      // })
    }
  }

  getData() {
    this.subscriptions.push()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
  onConditionSelect(event) {
    this.selectedFilter.data.map(val => {
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

  onGShock(event) {
    this.selectedFilter.gShock = event.checked;
  }

  onCasio(event) {
    this.selectedFilter.casio = event.checked;
  }
  onHublot(event) {
    this.selectedFilter.hublot = event.checked;
  }
  onDanielClein(event) {
    this.selectedFilter.danielClein = event.checked;
  }
  onOrient(event) {
    this.selectedFilter.orient = event.checked;
  }
  onRolex(event) {
    this.selectedFilter.rolex = event.checked;
  }
  onTissot(event) {
    this.selectedFilter.tissot = event.checked;
  }
  onTimeX(event) {
    this.selectedFilter.timeX = event.checked;
  }
  onMetal(event) {
    this.selectedFilter.metal = event.checked;
  }
  onPlastic(event) {
    this.selectedFilter.plastic = event.checked;
  }
  onMan(event) {
    this.selectedFilter.forMan = event.checked;
  }
  onWoman(event) {
    this.selectedFilter.forWoman = event.checked;
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
