import { Component, OnInit,OnDestroy } from '@angular/core';
import { DashboardService } from '../../../dashboard.service';
import { ApiService, UserService } from 'src/app/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-dashboard-booking-portfolio',
  templateUrl: './desktop-dashboard-booking-portfolio.component.html',
  styleUrls: ['./desktop-dashboard-booking-portfolio.component.scss']
})
export class DesktopDashboardBookingPortfolioComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  shopWorkImage: any;
  preview = [];
  uploadingFiles = [];

  formData = new FormData();

  constructor(
    private dashboardService: DashboardService,
    private apiService: ApiService,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getShopWorkImage();
  }
  
  onFileUpload(data) {
    this.uploadingFiles = data.files;
    this.preview = data.preview;

    const fileList: FileList = data.files;
    const file = fileList[0];
    this.formData.append('image', file, file.name);    
  }

  removeImage(i) {
    this.uploadingFiles.splice(i, 1);
    this.preview.splice(i, 1);
    console.log(this.uploadingFiles);
  }

  getShopWorkImage() {
    let shopId = this.userService.getUser().shop_details.id;
    this.subscriptions.push(
    this.dashboardService.getShopWorkImage(shopId).subscribe( res => {
      this.shopWorkImage = res;
      // console.log("ShopWorkImage", this.shopWorkImage);
    }))
  }

  postShopWorkImage() {
    
    let shopId = this.userService.getUser().shop_details.id;
    this.formData.append('shop', shopId);
    this.subscriptions.push(
    this.dashboardService.postShopWorkImage(this.formData).subscribe(res => {
      console.log(res);

      if (res) {
        this.toastrService.success('Shop Work Successfully Added');

        // getting all updated data after delete 
        this.getShopWorkImage();
      }
    }));
  }

  deleteModifyShopWorkImage(id) {
    this.subscriptions.push(
    this.dashboardService.deleteModifyShopWorkImage(id).subscribe(res => {
      console.log(res);

      // getting all updated data after delete 
      this.getShopWorkImage();
    }))
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
