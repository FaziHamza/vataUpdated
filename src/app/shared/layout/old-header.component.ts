import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef, ViewChild, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';

import { User, UserService, ApiService, LoaderService } from '../../core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, NavigationEnd, Event } from '@angular/router';
import { HeaderService } from './header.service';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ProductService } from 'src/app/pages/components/product/product.service';
import { BasketComponent } from '../components/basket/basket.component';

import { AppSizeStateService } from 'src/app/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

declare var $;

@Component({
  selector: 'app-old-layout-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './old-header.component.html',
  animations: [
    trigger(
      'inOutAnimation',
      [
        // the "in" style determines the "resting" state of the element when it is visible.
        state('in', style({ opacity: 1 })),

        // fade in when created. this could also be written as transition('void => *')
        transition(':enter', [
          style({ opacity: 0 }),
          animate(400)
        ]),

        // fade out when destroyed. this could also be written as transition('void => *')
        transition(':leave',
          animate(400, style({ opacity: 0 })))
      ])
  ]
})

export class OldHeaderComponent implements OnInit, AfterViewInit {
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
  @ViewChildren(MatMenuTrigger) triggerMenu: QueryList<MatMenuTrigger>;


  isThemeDark: boolean = false;
  cartData;
  tempCartData;
  @Output() notification = new EventEmitter();
  public isProcessing = false;
  public user: User;
  public result = null;
  @Input() public type = 'marketplace';
  public searchURL = '';
  public searchData;
  profile_pic;
  notFound = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="30" viewBox="0 0 800.000000 600.000000" preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.16, written by Peter Selinger 2001-2019
  </metadata>
  <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M3000 4729 c0 -13 -9 -123 -20 -244 -11 -121 -20 -223 -20 -227 0 -5 -103 -8 -230 -8 l-230 0 0 -229 0 -228 -57 -6 c-32 -4 -143 -14 -248 -23 -104 -9 -191 -17 -192 -18 -4 -3 215 -2487 219 -2491 2 -3 670 54 1484 125 813 72 1485 130 1493 130 11 0 12 21 6 115 l-7 115 156 0 156 0 0 135 0 135 38 0 c20 0 79 -5 131 -10 52 -6 96 -8 98 -6 5 5 224 2488 220 2492 -1 1 -652 59 -1447 128 -795 69 -1469 129 -1497 132 -51 6 -53 5 -53 -17z m1524 -364 c659 -58 1200 -106 1201 -107 6 -6 -171 -1987 -177 -1994 -4 -3 -14 -4 -23 -1 -13 6 -15 113 -15 997 l0 990 -1151 0 -1151 0 6 48 c3 26 8 77 12 115 l6 67 47 -5 c25 -3 586 -53 1245 -110z m736 -1370 l0 -1005 -1255 0 -1255 0 0 1005 0 1005 1255 0 1255 0 0 -1005z m-2760 -355 l0 -900 1194 -2 1195 -3 -1217 -106 c-669 -59 -1219 -105 -1222 -102 -4 4 -180 1986 -176 1990 2 2 164 19 204 22 l22 1 0 -900z"/>
  <path d="M3474 3491 c-100 -24 -152 -135 -110 -235 26 -63 110 -105 182 -91 51 9 120 77 129 128 23 121 -84 226 -201 198z"/>
  <path d="M4098 3168 c-52 -73 -112 -159 -134 -190 -21 -32 -42 -57 -46 -58 -5 0 -39 33 -77 73 -62 64 -71 70 -85 57 -22 -23 -397 -530 -403 -546 -4 -12 94 -14 656 -14 l662 0 -12 23 c-25 46 -452 772 -459 780 -4 5 -50 -51 -102 -125z"/>
  </g>
  </svg>`;


  showNotificationIndicator = false;
  showNotificationIndicatorTemp = false;
  marketplace_categories = [];
  booking_categories = [];
  constructor(
    private userService: UserService,
    private router: Router,
    public headerService: HeaderService,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private productService: ProductService,
    private dialog: MatDialog,
    public appSize: AppSizeStateService
  ) {
    if (this.router.url.startsWith('/bookings')) {
      this.type = 'bookings';
    } else if (this.router.url.startsWith('/marketplace')) {
      this.type = 'marketplace';
    } else if (this.router.url.startsWith('/deals')) {
      this.type = 'deals';
    }
    this.generateURL(this.type);

    // Setup event listener
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // TODO Remove
        const current_url = event.url;

        // if (current_url.startsWith('/booking')) {
        //   this.type = 'marketplace';
        // } else if (current_url.startsWith('/marketplace')) {
        //   this.type = 'marketplace';
        // } else if (current_url.startsWith('/deals')) {
        //   this.type = 'deals';
        // }
        this.generateURL(this.type);
        // TODO Remove
        $('.wrapper').removeClass('show');
        $('.wrapper').removeClass('mobile');
      }
    });
  }


  currentUser: User;

  ngAfterViewInit() {
    $(".close-search").click(function () {
      $(".header-search input[type='text']").val("");
      $(".header-search input[type='text']").click();
      $(".wrapper").removeClass("show mobile");
      this.result = null;
    }.bind(this));

    $(".open-search").click(function () {
      $(".wrapper").toggleClass("show mobile");
      $(".header-search input[type='text']").select();
      this.search("");
    }.bind(this));

    $(".open-search").click(function () {
      $(".mobile-menu").removeClass("mobile-menu-block");
      $(".home-mobile-menu").toggleClass("hide-home-mobile-menu");
    });
  }

  ngOnInit() {
    this.checkDarkMode();    
    
    this.tempCartData = JSON.parse(window.localStorage.getItem('temp_cart'));
    if(this.tempCartData)
      this.showNotificationIndicatorTemp = true;
    else
      this.showNotificationIndicatorTemp = false

    this.user = this.userService.getUser();
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.getMarketPlaceCategories();
    this.getBookingCategories();
    if(this.userService.getUser()) {
      this.tempCartData = null;
      this.productService.getCart().subscribe(data => {
        if(data && this.userService.getUser()){
          this.cartData = data;
          this.emitIfItemsInCart();
        }
      });
      this.productService.addedToCart$.subscribe(data => { 
        if(data && this.userService.getUser() && !data.temp){
          this.cartData = data;
          this.emitIfItemsInCart();
        }
      })
    } else{
      this.productService.addedToCart$.subscribe(data => {
        if (data !== null && data.temp) {
          this.tempCartData = data
          let total_price = 0;
          this.tempCartData.items.map((item) => {
            total_price += item.price;
          })
          this.tempCartData.total_price = total_price;
          this.showNotificationIndicatorTemp = true;
        }
      });
    }
    
    if (this.user && this.user.user_details.profile_pic != null && this.user.user_details.profile_pic !== '') {
      this.profile_pic = this.user.user_details.profile_pic;
    } else {
      this.profile_pic = '/assets/img/avatar.png';
    }
    // this.userService.setUserData(this.user);
    // get mobile page title, this is set by each component by calling the PageTitleservice

    this.searchData = new BehaviorSubject(this.result);
  }

  basketDialog(): void {

    var width = '100%';
    if (!this.appSize.getIsMobileResolution()) {
      width = '50%';
    } else {
      width = '100%';
    }

    const dialogRef = this.dialog.open(BasketComponent, {
      width: width,
      data: {
        type: 'no-border',
        title: 'Basket',
        subTitle: '',
        cartData: this.cartData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  emitIfItemsInCart() {
    if (this.cartData.business_cart.items.length > 0 || this.cartData.private_cart.items.length > 0) {
      this.notification.emit(true);
      this.showNotificationIndicator = true;
    } else {
      this.notification.emit(false);
      this.showNotificationIndicator = false;
    }
  }

  onKeyDown(event: any) {
    if (event.keyCode !== 13) {
      event.preventDefault();
      this.search(event.target.value);
      this.cdr.detectChanges();
    } 

  }

  gotoSearchDetails(event){
    if (event.target.value) {
      this.router.navigate(['/search'], {queryParams: {
        keyword: event.target.value,
      }});    
      this.triggerMenu.toArray()[3].closeMenu();
    }
  }

  public search(term = ""): void {
    this.isProcessing = true;
    this.result = null;
    this.getSearchObservable(term).subscribe(
      (res: any) => {
        console.log(res);
        this.isProcessing = false;
        this.result = res;
      },
      err => {
        this.isProcessing = false;
        console.log(err);
      }
    );
  }

  public getSearchObservable(term) {
    this.cdr.detectChanges();
    const params = new HttpParams()
  .set('skipLoader', 'skip');
  let calls = [];
  calls.push(this.apiService.get(`/product/search/?q=` + term,  params))
  calls.push(this.apiService.get(`/booking/search?q=` + term,  params))
  return forkJoin(calls)
    // return this.apiService.get(this.searchURL + term,  params);
  }

  generateURL(type) {
    switch (type) {
      case 'marketplace':
        this.searchURL = `/product/search/` + '?q=';
        break;
      case 'bookings':
        this.searchURL = `/booking/search` + '?q=';
    }
  }

  onSignOut() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/auth/login');
  }

  stopGoodMenuClosing(event) {
    event.stopPropagation();
  }

  getMarketPlaceCategories() {
    this.headerService.getMarketplaceCategories().subscribe(
      data => {
        var temp = [];
        data.results.forEach(element => {
          if (element.parent == null) {
            if (element.icon_content) element.icon_content = element.icon_content.replace('fill="#121212"', 'fill="' + element.icon_fill + '"');
            temp.push(element);
          }
        });
        this.marketplace_categories = data.results
      }, error => {
        //TODO 
        console.log(error);
      }
    );
  }

  getBookingCategories() {
    this.headerService.getBookingCategories().subscribe(
      (res: any) => {
        console.log(res);
        var temp = [];
        if(res.results)
        res.results.map(element => {
          if (element.parent == null) {
            if (element.icon_content) element.icon_content = element.icon_content.replace('fill="#121212"', 'fill="' + element.icon_fill + '"');
            temp.push(element);
          }
        });
        this.booking_categories = res.results;
      },
      (err) => {
        // TODO
        console.log(err);
      }
    );
  }

  checkDarkMode() {
    var dark = localStorage.getItem('dark');
    console.log("dark >", dark);
    
    if (dark == 'true') {
      this.isThemeDark = true;
    } else {
      this.isThemeDark = false;
    }
  }

}
