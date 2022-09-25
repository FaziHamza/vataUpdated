import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { AlertModalComponent } from "../../../../shared/components/alert-modal/alert-modal.component";
import { BiddingListModalComponent } from "../../../../shared/components/bidding-list-modal/bidding-list-modal.component";
import { AskForChangeModalComponent } from "../../../../shared/components/ask-for-change-modal/ask-for-change-modal.component";
import { AppSizeStateService } from "src/app/core";

import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { UserService } from "src/app/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { ToastrService } from "ngx-toastr";
import { SocialShareModalComponent } from "src/app/shared/components/social-share-modal/social-share-modal.component";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { MatDialog } from '@angular/material/dialog';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { DashboardService } from '../../dashboard/dashboard.service';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { Lightbox } from 'ngx-lightbox';
import { TimeLeftPipe } from 'src/app/shared';
import { forkJoin } from 'rxjs';

@Component({
  selector: "app-product-web",
  templateUrl: "./product-web.component.html",
  styleUrls: ["./product-web.component.scss"],
  animations: [
    trigger("inOutAnimation", [
      // the "in" style determines the "resting" state of the element when it is visible.
      state("in", style({ opacity: 1, transform: "scale(1)" })),

      // fade in when created. this could also be written as transition('void => *')
      transition(":enter", [
        style({ opacity: 0, transform: "scale(2)" }),
        animate(400),
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(
        ":leave",
        animate(400, style({ opacity: 0, transform: "scale(1)" }))
      ),
    ]),
  ],
})
export class ProductWebComponent implements OnInit {
  @ViewChild("slickModal") slickModal: SlickCarouselComponent;
  config = {
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    infinite: false,
    "prevArrow": false,
      "nextArrow": false,
  };
  productId;
  user = null;
  reviewData;
  similarProducts = [];
  imageSuperset = [];
  images = [];
  productImages = [];
  productData;
  currentBid;
  isFavourite = false;
  sellerData = [];
  isBiddingExpired = false;
  sellerId;
  biddingList = [];
  bidDetails;
  variantsArr = [];
  sizeVariant;
  colorVariant;
  bidCount;
  shopRatingInfo;
  price;
  attributes = [];
  options = [];
  variations = [];
  selectedVariation = {};
  on_stock = 0;
  constructor(
    private dialog: MatDialog,
    private router: ActivatedRoute,
    private _router: Router,
    private productService: ProductService,
    private userService: UserService,
    private toastrService: ToastrService,
    private cdr: ChangeDetectorRef,
    private dashboardService: DashboardService,
    public appSize: AppSizeStateService,
    private themeService: ThemeService,
    private _lightbox: Lightbox,
    private timeLeft: TimeLeftPipe
  ) {}

  ngOnInit() {
    this.checkDarkMode();
    this.user = this.userService.getCurrentUser().user_details ? this.userService.getCurrentUser().user_details : this.userService.getUser();
    this.router.params.subscribe((params) => {
      const id = params["id"];
      this.productImages = [];
      this.similarProducts = [];
      this.sellerData = [];
      this.images = [];
      this.attributes = [];
      // this.http.post(environment.BIDDING_SOCKET + '/' + id)
      const lo = new WebSocket(`${environment.BIDDING_SOCKET}${id}`);
      lo.onmessage = (data) => {
        console.log(data);
        let parsedData = null;
        this.productService.bidDetails(id).subscribe((res) => {
          this.biddingList = res.bidding_list;
        });
        parsedData = JSON.parse(data.data);
        console.log(parsedData);
        this.currentBid = parsedData.product_status.latest_bid;
        this.isBiddingExpired = parsedData.product_status.expired;
        this.bidCount = parsedData.product_status.bid_count;
        this.toastrService.info(`Bid has been updated to ${this.currentBid}`);
        if (this.isBiddingExpired) {
          this.toastrService.info(`Bidding has been closed for this product`);
          this._router.navigate(['/']);
        }
      };
      lo.onopen = () => {
        console.log("socket opened");
      };
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      this.productId = id;
      this.productService.bidDetails(this.productId).subscribe((res) => {
        this.biddingList = res.bidding_list;
        this.bidDetails = res;
        this.bidCount = res.count_product_bid;
      });
      if (id) {
        this.productService.getProductInfo(id).subscribe((res: any) => {
          this.productData = res;
          console.log(this.productData);
          this.currentBid = this.productData.latest_bid;
          if (this.productData.size_attributes?.length) {
            this.price = this.productData.size_attributes[0].price + this.productData.price;
            this.sizeVariant = this.productData.size_attributes[0].id;
          } else {
            this.price = parseInt(this.productData.price);
          }
          if (this.productData.color_attributes?.length) {
            this.colorVariant = this.productData.color_attributes[0].id;
          }
          if(this.productData.productVariations.length){
            let keys = Object.keys(this.productData.productVariations[0].attr)
            keys.map((attr) => {
              if(attr !== 'id' && attr !== 'Price' && attr !== 'Quantity' && attr !== 'Action' && attr !== 'Photos'){
                this.attributes.push(attr);
              }
            })
            this.attributes.map((at) => {
              this.options[at] = [];
              this.productData.productVariations.map((vary, j) => {
                vary.attr.id = vary.id;
                if(j === 0){
                  this.selectedVariation[at] = vary.attr[at];
                  this.selectedVariation['id'] = vary.attr.id;
                  this.on_stock = vary.attr['Quantity'];
                  this.price = parseInt(this.productData.price)
                  this.price += parseInt(vary.attr['Price'])
                }
                
                this.variations.push(vary.attr);
                if(!this.options[at].includes(vary.attr[at]))
                  this.options[at].push(vary.attr[at]);
              })
            })
            this.productImages = [...this.productData.image];
            this.productData.productVariations.map((vary) => {
              vary.image.map((img) => {
                this.images.push(img);
              })
            })
            this.productImages.map(i => this.images.push(i));
            this.imageSuperset = [...this.images];
            console.log(this.selectedVariation);
          } else{
            this.on_stock = this.productData.stock_count;
            this.images = this.productData.image;
          }
          this.sellerId = res.seller;
          this.dashboardService.getShopRatingInfo(this.sellerId).subscribe(res => {
            this.shopRatingInfo = res.data;
          })
          this.productService
            .getSimilarProducts(this.productId)
            .subscribe((sres) => {
              console.log(sres);
              this.similarProducts = [...sres];
              this.cdr.detectChanges();
            });

            this.productService
            .getProductsOfSeller(this.sellerId)
            .subscribe((sellerData) => {
              this.sellerData = [...sellerData];
              this.cdr.detectChanges();
            });
        });
      }
      this.cdr.detectChanges();
    });
  }

  print(){
    console.log("USER = ", this.user);
  }

  filterProductData(data){
    return data ? data.filter(x => ((x.bidding && !this.timeLeft.transform(x.end_datetime).includes('Time Ended')) || !x.bidding)) : []
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

  addFavourite() {
    let favId = null;
    this.isFavourite = !this.isFavourite;
    const userId = this.userService.getUser().user_details.id;

    if (!this.productData.is_fav_product) {
      this.productService
        .addFavourite({ user_id: userId, product_id: this.productData.id })
        .subscribe(
          (res) => {
            console.log(res);
            favId = res["id"];
            this.getProduct(this.productId);
          },
          (err) => {
            this.isFavourite = false;
          }
        );
    } else {
      this.productService
        .removeFavourite(this.productId, userId)
        .subscribe((res) => {
          console.log(res);
          this.getProduct(this.productId);
          this.isFavourite = true;
        });
    }
  }

  getProduct(id) {
    this.productService.getProductInfo(id).subscribe((res: any) => {
      this.productData = res;
      this.currentBid = this.productData.latest_bid;
      this.sellerId = res.seller_data.id;
      console.log(this.productData, this.sellerId);
    });
  }

  shopSavedDialog(): void {
    var width = "100%";
    if (!this.appSize.getIsMobileResolution()) {
      width = "25%";
    } else {
      width = "100%";
    }

    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: width,
      data: {
        type: "no-border",
        title: "Whatsupstoners shop has been saved",
        subTitle: "",
        buttonText: "Got it",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
    });
  }

  openShareLink(): void {
    const dialogRef = this.dialog.open(SocialShareModalComponent, {
      width: "25%",
      data: {
        type: "no-border",
        title: "Whatsupstoners shop has been saved",
        subTitle: "",
        buttonText: "Got it",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
    });
  }

  placeBidDialog(form, bidData): void {
    var width = "100%";
    if (!this.appSize.getIsMobileResolution()) {
      width = "35%";
    } else {
      width = "100%";
    }

    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: width,
      data: {
        type: "border",
        title: "You have just take a try to place a bid",
        subTitle: "Do you want to confirm this action?",
        buttonText: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.addBid(bidData).subscribe(
          (res) => {
            console.log(res);
            this.toastrService.success("Your bid was placed.");
            this.productService
              .bidDetails(this.productId)
              .subscribe((bidDetails: any) => {
                console.log(res);
                this.bidDetails = bidDetails;
                this.currentBid = bidDetails.current_bid_value;
              });
            form.reset();
          },
          (err) => {
            form.reset();
          }
        );
      }
      console.log("The dialog was closed", result);
    });
  }

  askForChangeDialog(): void {
    var width = "100%";
    if (!this.appSize.getIsMobileResolution()) {
      width = "40%";
    } else {
      width = "100%";
    }

    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: width,
      data: {
        type: "border",
        title: "You have just take a try to ask for a change",
        subTitle: "Do you want to confirm this action?",
        buttonText: "Confirm",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const dialogRef = this.dialog.open(AskForChangeModalComponent, {
          width: width,
          data: {
            productId: this.productId,
            userId: this.userService.getUser().user_details.id,
            productTitle: this.productData.title,
          },
        });
      }
    });
  }

  biddingListDialog(): void {
    var width = "100%";
    if (!this.appSize.getIsMobileResolution()) {
      width = "35%";
    } else {
      width = "100%";
    }

    const dialogRef = this.dialog.open(BiddingListModalComponent, {
      width: width,
      data: {
        type: "border",
        title: "Bidding List",
        subTitle: "",
        biddingData: this.biddingList,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
    });
  }

  addToCart(redirect = false) {
    let cartId = null;    
    if(this.userService.getUser()){
      cartId = this.userService.getCartId(this.productData.is_seller_subscribed);
      const data = {
        cart_id: cartId,
        variant_id: this.selectedVariation['id'],
        product_id: this.productId,
      };
      if(!data.variant_id)
      delete data.variant_id;
      console.log(data);
      this.productService.addProductToCart(data).subscribe((res) => {
        console.log(res);
        this.productService.updateCart(res);
        if(redirect)
          this._router.navigate(['/order']);
        else
          this.toastrService.success("Added to cart successfully.");
      });
    } else{
      let items = window.localStorage.getItem('temp_cart') ? JSON.parse(window.localStorage.getItem('temp_cart')).items: [];
      items.push(this.productData)
      let cartData = window.localStorage.getItem('temp_cart') ? JSON.parse(window.localStorage.getItem('temp_cart')).cart: [];
      cartData.push(
        {
          cart_id: cartId,
          variant_id: this.selectedVariation['id'],
          product_id: this.productId,
          productData: this.productData
        }
      )
      const data = {
        cart: cartData,
        items: items,
        temp: true
      };
      this.productService.updateCart(data);
      window.localStorage.setItem('temp_cart', JSON.stringify(data));
      this.toastrService.success("Added to cart successfully.");
    }
    
  }

  buyNow(){
    if(this.userService.getUser()){
      let calls = [];
      calls.push(this.productService.clearCartData({cart_id: this.userService.getCartId(true)}))
      calls.push(this.productService.clearCartData({cart_id: this.userService.getCartId(false)}))
      forkJoin(calls).subscribe(
        (result) => {
          this.addToCart(true);
        }
      )
    } else {
      this._router.navigate(['/auth/login']);
    }
  }

  addBid(form) {
    console.log(form);
    const bidData = {
      expiry_date: this.productData.end_datetime,
      bid_price: form.value.bidValue,
      user_id: this.userService.getUser().user_details.id,
      product_id: this.productId,
    };
    if (form.value.bidValue) {
      this.placeBidDialog(form, bidData);
    }
  }


  onChangeOption(event, attribute, option) {
    this.selectedVariation[attribute] = option;
    let found = false;
    this.variations.map((vary) => {
      let j = 0;
      this.attributes.map((attr, i, arr) => {

        if(vary[attr] !== this.selectedVariation[attr])
          return;

        if(j === arr.length - 1 && vary[attr] === this.selectedVariation[attr] && !found){
          this.on_stock = vary['Quantity'];
          this.price = parseInt(this.productData.price);
          this.price += parseInt(vary['Price']);
          this.selectedVariation['id'] = vary['id'];
          // this.productData.productVariations.map((prod) => {
          //   if(vary.id === prod.id){
          //     if(prod.image.length){
          //       this.images = prod.image;
          //     } 
          //     return;
          //   }
          // })
          found = true;
          return;
        }
        j++;
      })

      if(found)
        return;

    })
  }

  onSaveSeller() {
    if (!this.productData.is_save_seller) {
      const userId = this.userService.getUser().user_details.id;
      this.productService
        .saveSeller({ user: userId, seller: this.productData.seller })
        .subscribe((res) => {
          // TODO: Seller name from API response.
          this.getProduct(this.productId);
          this.shopSavedDialog();
        });
    }
  }
}
