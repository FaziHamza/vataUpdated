import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookProductService } from "../book-product.service";
import { MatDialogRef } from "@angular/material/dialog/dialog-ref";
import { WriteReviewModalV2Component } from "src/app/shared/components/write-review-modal-v2/write-review-modal-v2.component";
import { UserService } from "src/app/core";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";
import * as mapboxgl from "mapbox-gl";
import { environment } from "src/environments/environment";
import { SocialShareModalComponent } from "src/app/shared";

@Component({
  selector: "app-desktop-book-product",
  templateUrl: "./desktop-book-product.component.html",
  styleUrls: ["./desktop-book-product.component.scss"],
})
export class DesktopBookProductComponent implements OnInit {
  shopId;
  shopDetails;
  similarShops;
  reviews = [];
  newestReviews;
  ourWorks;
  services;
  sellerId;
  servicesForUser;
  servicesThatNeedReview;
  userInfo;
  dialogRef;
  map: mapboxgl.Map;
  style = "mapbox://styles/mapbox/streets-v11";
  lat;
  lng;
  @ViewChild("mapElement", { static: false }) mapElement: ElementRef;
  isShowDirection = false;
  config = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
    "nextArrow": false,
    "infinite": false
  };
  constructor(
    private route: ActivatedRoute,
    private bookProductService: BookProductService,
    private userService: UserService,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.getShopId();
    this.userInfo = this.userService.getUser();
  }

  getShopId() {
    this.route.params.subscribe((params) => {
      this.shopId = params["id"];
      this.getShopDetails();
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });
  }

  showDirection() {
    this.isShowDirection = !this.isShowDirection;
    var MapboxDirections = require("@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions");
    const dirControl = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      profile: "mapbox/driving",
    });
    const geo = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    if (this.isShowDirection) {
      this.map.addControl(dirControl, "top-left");
      dirControl.setOrigin([this.lng, this.lat]);
      this.map.addControl(geo);
    } else {
      this.map.removeControl(geo);
    }
    this.cdr.detectChanges();
  }

  getShopDetails() {
    this.bookProductService
      .getShopDetails(this.shopId)
      .subscribe((response) => {
        if (response.Status == "Success") {
          this.sellerId = response.data.shop_owner_id;
          const location = (response.data.location_shop as string).split(",");
          this.lng = location[0];
          this.lat = location[1];
          this.shopDetails = response.data;

          this.getSimilarShops();
          this.getServicesByCategory();
          this.getShopWorkImages();
          this.getShopReviews();
          console.log(this.mapElement.nativeElement);

          (mapboxgl as any).accessToken = environment.mapbox.accessToken;
          this.map = new mapboxgl.Map({
            container: this.mapElement.nativeElement,
            style: this.style,
            zoom: 13,
            center: [this.lng, this.lat],
          });
          // Add map controls
          this.map.addControl(new mapboxgl.NavigationControl());
          var marker = new mapboxgl.Marker()
            .setLngLat([this.lng, this.lat])
            .addTo(this.map);
        } else {
          // TODO
          // Toast here
        }
      });
  }

  getShopReviews() {
    let userId;
    if (this.userInfo) {
     userId = this.userInfo.user_details.id;
    }
    console.log("user info: ", this.userInfo);

    this.bookProductService
      .checkReviews(this.shopId, userId)
      .subscribe((response) => {
        console.log("check reviews", response);
        if (response.Status == "Success" && response.data.length > 0) {
          this.servicesForUser = response.data;
          this.findServicesThatNeedReview(this.servicesForUser);
          let serviceIds = this.servicesForUser.map((service) => {
            return service.id;
          });
          this.bookProductService
            .getShopReviews(this.shopId, serviceIds)
            .subscribe((response) => {
              console.log("shop reviews", response);
              if (response.Status == "Success") {
                this.reviews = response.data;
              }
            });

          this.bookProductService
            .getNewestShopReviews(this.shopId, [])
            .subscribe((response) => {
              console.log("newest shop reviews", response);
              if (response.Status == "Success") {
                this.newestReviews = response.data;
              }
            });
        }
      });

    // this.bookProductService.getShopReviews(this.shopId, []).subscribe((response) => {
    //   console.log("shop reviews", response);
    //   if (response.Status == 'Success') {
    //     this.shopReviews = response.data;
    //   }
    // })

    // this.bookProductService.getNewestShopReviews(this.shopId, []).subscribe((response) => {
    //   console.log("newest shop reviews", response);
    //   if (response.Status == 'Success') {
    //     this.newestShopReviews = response.data;
    //   }
    // })
  }

  findServicesThatNeedReview(services) {
    this.servicesThatNeedReview = services
      .filter(function (service) {
        if (service.need_to_review) {
          return true;
        }
        return false;
      })
      .map(function (service) {
        return {
          id: service.id,
          title: service.service_name,
        };
      });
  }

  getSimilarShops() {
    this.bookProductService
      .getSimilarShops(this.shopId)
      .subscribe((response) => {
        console.log("similar shops", response);
        if (response.data.length > 0) {
          this.similarShops = response.data;
        }
      });
  }

  getServicesByCategory() {
    this.bookProductService
      .getServicesByCategory(this.shopId)
      .subscribe((response) => {
        console.log("services by category", response);
        if (response.Status == "Success") {
          this.services = response.data;
        } else {
          // TODO
          // Toast ?
        }
      });
  }

  getShopWorkImages() {
    this.bookProductService
      .getShopWorkImages(this.shopId)
      .subscribe((response) => {
        console.log("shop work images", response);
        if (response.Status == "Success") {
          this.ourWorks = response.data;
        } else {
          // TODO
          // Toast ?
        }
      });
  }

  updateLikes(work) {
    // this.userStateService.getUserInfo
    // this.bookProductService.updateLikes()
  }

  writeReview(serviceId) {
    this.dialogRef = this.dialog.open(WriteReviewModalV2Component, {
      width: "100%",
      data: {
        type: "no-border",
        title: "Write a review",
        subTitle: "",
      },
    });

    this.dialogRef.componentInstance.onFormSubmit.subscribe((data) => {
      this.submitReview(data, serviceId);
    });
  }

  submitReview(data, serviceId, parentId = null) {
    console.log("Submitting review with data: ", data);
    data.feedback = data.desc;
    data.title = data.text;
    data.communication = data.communication_rating;
    data.shop_id = this.shopId;
    data.user_id = this.userInfo.user_details.id;
    data.service = serviceId;
    data.image = [];
    data.parent = parentId ? parentId : null;
    this.bookProductService.submitReview(data).subscribe((response) => {
      console.log(response);
      if (response.Status == "Success") {
        this.dialogRef.close();
        if (parentId) {
          this.reviews.push(response.data);
          this.newestReviews.push(response.data);
        } else {
          const service = this.servicesThatNeedReview.find(
            (service) => service.id == serviceId
          );
          const index = this.servicesThatNeedReview.indexOf(service);
          this.servicesThatNeedReview.splice(index, 1);
        }
      }
    });
  }

  reply(serviceId, parentId) {
    this.dialogRef = this.dialog.open(WriteReviewModalV2Component, {
      width: "100%",
      data: {
        type: "no-border",
        title: "Write a review",
        subTitle: "",
      },
    });

    this.dialogRef.componentInstance.onFormSubmit.subscribe((data) => {
      this.submitReview(data, serviceId, parentId);
    });
  }

  findRepliesForReview(reviewId, reviews) {
    let replies = [];
    reviews.forEach((review) => {
      if (review.parent && review.parent == reviewId) {
        replies.push(review);
      }
    });

    return replies;
  }

  addToFavourites() {
    this.bookProductService
      .addToFavourites(this.shopId, this.userInfo.user_details.id)
      .subscribe((response) => {
        if (response) {
          this.toastrService.success("Shop added to favourite successfully!");
        }
      });
  }

  navigateToMakeBooking(serviceId?) {
    if (serviceId) {
      this.router.navigate([this.router.url + "/make-booking/" + serviceId]);
    } else {
      this.router.navigate([this.router.url + "/make-booking"]);
    }
  }

  areServicesAvailable() {
    let retVal = false;

    if (this.services) {
      this.services.forEach((service) => {
        if (service.services.length > 0) {
          retVal = true;
        }
      })
    }

    return retVal;
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
}
