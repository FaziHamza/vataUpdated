import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../../shared/services/theme/theme.service';
import { CatalogService } from '../catalog.service';
import { element } from 'protractor';

@Component({
  selector: 'app-desktop-catalog',
  templateUrl: './desktop-catalog.component.html',
  styleUrls: ['./desktop-catalog.component.scss']
})
export class DesktopCatalogComponent implements OnInit {
  loading = false;
  isThemeDark: Observable<boolean>;
  categoryType: boolean = false;
  categoryAlphaDataMarketplace;
  categoryAlphaDataBooking;
  marketplaceCategories:any[] = [];
  bookingCategories:any[] = [];
  categoryAllData;
  allChars: any[] = [];
  query = "";
  notFound = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="105" height="105" viewBox="0 0 800.000000 600.000000" preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.16, written by Peter Selinger 2001-2019
  </metadata>
  <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M3000 4729 c0 -13 -9 -123 -20 -244 -11 -121 -20 -223 -20 -227 0 -5 -103 -8 -230 -8 l-230 0 0 -229 0 -228 -57 -6 c-32 -4 -143 -14 -248 -23 -104 -9 -191 -17 -192 -18 -4 -3 215 -2487 219 -2491 2 -3 670 54 1484 125 813 72 1485 130 1493 130 11 0 12 21 6 115 l-7 115 156 0 156 0 0 135 0 135 38 0 c20 0 79 -5 131 -10 52 -6 96 -8 98 -6 5 5 224 2488 220 2492 -1 1 -652 59 -1447 128 -795 69 -1469 129 -1497 132 -51 6 -53 5 -53 -17z m1524 -364 c659 -58 1200 -106 1201 -107 6 -6 -171 -1987 -177 -1994 -4 -3 -14 -4 -23 -1 -13 6 -15 113 -15 997 l0 990 -1151 0 -1151 0 6 48 c3 26 8 77 12 115 l6 67 47 -5 c25 -3 586 -53 1245 -110z m736 -1370 l0 -1005 -1255 0 -1255 0 0 1005 0 1005 1255 0 1255 0 0 -1005z m-2760 -355 l0 -900 1194 -2 1195 -3 -1217 -106 c-669 -59 -1219 -105 -1222 -102 -4 4 -180 1986 -176 1990 2 2 164 19 204 22 l22 1 0 -900z"/>
  <path d="M3474 3491 c-100 -24 -152 -135 -110 -235 26 -63 110 -105 182 -91 51 9 120 77 129 128 23 121 -84 226 -201 198z"/>
  <path d="M4098 3168 c-52 -73 -112 -159 -134 -190 -21 -32 -42 -57 -46 -58 -5 0 -39 33 -77 73 -62 64 -71 70 -85 57 -22 -23 -397 -530 -403 -546 -4 -12 94 -14 656 -14 l662 0 -12 23 c-25 46 -452 772 -459 780 -4 5 -50 -51 -102 -125z"/>
  </g>
  </svg>`;
  subNotFound = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 800.000000 600.000000" preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.16, written by Peter Selinger 2001-2019
  </metadata>
  <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M3000 4729 c0 -13 -9 -123 -20 -244 -11 -121 -20 -223 -20 -227 0 -5 -103 -8 -230 -8 l-230 0 0 -229 0 -228 -57 -6 c-32 -4 -143 -14 -248 -23 -104 -9 -191 -17 -192 -18 -4 -3 215 -2487 219 -2491 2 -3 670 54 1484 125 813 72 1485 130 1493 130 11 0 12 21 6 115 l-7 115 156 0 156 0 0 135 0 135 38 0 c20 0 79 -5 131 -10 52 -6 96 -8 98 -6 5 5 224 2488 220 2492 -1 1 -652 59 -1447 128 -795 69 -1469 129 -1497 132 -51 6 -53 5 -53 -17z m1524 -364 c659 -58 1200 -106 1201 -107 6 -6 -171 -1987 -177 -1994 -4 -3 -14 -4 -23 -1 -13 6 -15 113 -15 997 l0 990 -1151 0 -1151 0 6 48 c3 26 8 77 12 115 l6 67 47 -5 c25 -3 586 -53 1245 -110z m736 -1370 l0 -1005 -1255 0 -1255 0 0 1005 0 1005 1255 0 1255 0 0 -1005z m-2760 -355 l0 -900 1194 -2 1195 -3 -1217 -106 c-669 -59 -1219 -105 -1222 -102 -4 4 -180 1986 -176 1990 2 2 164 19 204 22 l22 1 0 -900z"/>
  <path d="M3474 3491 c-100 -24 -152 -135 -110 -235 26 -63 110 -105 182 -91 51 9 120 77 129 128 23 121 -84 226 -201 198z"/>
  <path d="M4098 3168 c-52 -73 -112 -159 -134 -190 -21 -32 -42 -57 -46 -58 -5 0 -39 33 -77 73 -62 64 -71 70 -85 57 -22 -23 -397 -530 -403 -546 -4 -12 94 -14 656 -14 l662 0 -12 23 c-25 46 -452 772 -459 780 -4 5 -50 -51 -102 -125z"/>
  </g>
  </svg>`;
  limitMarketplaceResponses = 10;
  limitBookingResponses = 10;

  constructor(
    private themeService: ThemeService,
    public catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();
    this.initializeCatogories();
    this.allChars = this.catalogService.genCharArray();
    this.catalogService.getCategoriesByAlpha("*").subscribe(res => {
      this.categoryAlphaDataMarketplace = res;
    });
    this.catalogService.getBookingCategoriesByAlpha("*").subscribe(res => {
      this.categoryAlphaDataBooking = res;
      console.log(res);
    });
  }

  initializeCatogories(){
    this.loading = true;
    // this.marketplaceCategories = [];
    // this.bookingCategories = [];
    this.catalogService.getAllCatagories(this.limitMarketplaceResponses, this.limitBookingResponses).subscribe(res => {
      this.loading = false;
      console.log(res);
      this.categoryAllData = res;

      res[0].results.forEach(element => {
        let temp = []
        if (element.parent == null) {
          if (element.icon_content) element.icon_content = element.icon_content.replace('fill="#121212"', 'fill="' + element.icon_fill + '"');
          temp.push(element);
        }
        if(element.childrens.length){
          element.childrens.map((child, childindex, childrens) => {
            res[0].results.map((marketCatagory, marketindex, marketarray) => {
              if(marketCatagory.id === child.id){
                childrens[childindex] = marketCatagory;
              }
            })
          })
        }
      });
      const tempMarketplaceCat = [];
      res[0].results.map((element) => {
        if(!element.ancestors.length){
          tempMarketplaceCat.push(element);
        }
      })
      this.marketplaceCategories = tempMarketplaceCat;
      
      res[1].results.forEach(element => {
        let temp = []
        if (element.parent == null) {
          if (element.icon_content) element.icon_content = element.icon_content.replace('fill="#121212"', 'fill="' + element.icon_fill + '"');
          temp.push(element);
        }
        if(element.childrens.length){
          element.childrens.map((child, childindex, childrens) => {
            res[1].results.map((bookingCatagory, bookingindex, bookingarray) => {
              if(bookingCatagory.id === child.id){
                childrens[childindex] = bookingCatagory;
              }
            })
          })
        }
      });
      const tempBookingCat = [];
      res[1].results.map((element) => {
        if(!element.ancestors.length){
          tempBookingCat.push(element);
        }
      })
      this.bookingCategories = tempBookingCat;
    }, err => {
      this.loading = false;
    })
  }

  addToSelection(char, marketplace = false, booking = false) {
    let charIndex = this.allChars.findIndex(key => key.value === char.value);
    if (charIndex === -1) {
      return;
    }
    this.allChars[charIndex].selected = !this.allChars[charIndex].selected;
    this.generateQuery(this.allChars);
    if(marketplace)
    this.catalogService.getCategoriesByAlpha(this.query).subscribe(res => {
      this.categoryAlphaDataMarketplace = res;
    });
    if(booking)
    this.catalogService.getBookingCategoriesByAlpha(this.query).subscribe(res => {
      this.categoryAlphaDataBooking = res;
    });
  }

  generateQuery(charArr: any[]) {
    const selectedValues: any[] = charArr.filter(key => key['selected'] === true);
    this.query = selectedValues.map(res => {
      return res['value'];
    }).join(',');
    if (!this.query) {
      this.query = "*";
    }
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

  changeCategoryType() {
    this.categoryType = !this.categoryType;
  }

  showMoreMarketplaceCategories() {
    this.limitMarketplaceResponses += 20;
    this.initializeCatogories();
  }

  showMoreBookingCategories() {
    this.limitBookingResponses += 5;
    this.initializeCatogories();
  }

}
