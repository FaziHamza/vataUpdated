import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormArray, Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../dashboard/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../product/product.service';
import { BookingsService } from 'src/app/shared/services/bookings.service';
import { Pattern } from 'src/app/shared/regex.pattern';
import { TimeUtils } from 'src/app/core/services/time.utils';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {
  @Output() onChangeTab = new EventEmitter();
  tab = 'booking';
  submitted = false;
  user;
  membersData;
  serviceCategories;
  id;
  serviceData;
  pattern: Pattern = new Pattern();
  timeUtils: TimeUtils = new TimeUtils();
  membersArray = [];
  addBookingForm: FormGroup;
  remainingText = {
    description: void 0,
    note: void 0
  };
  constructor(
    private bookingService: BookingsService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dashboard: DashboardService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dashboard.getServiceCategories().subscribe(res => {
      this.serviceCategories = res;
    });
    this.initializeForm();
    this.user = this.userService.getUser();
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.setValues();
      }
    });
    this.onChanges();
    this.bookingService.getFamilyMembers().subscribe(members => {
      this.membersData = members;
      const formArray = this.membersData.map(c => new FormControl(false));
      this.addBookingForm.addControl('membersArray', new FormArray(formArray));
    });
  }

  setValues() {
    this.dashboard.getServiceById(this.id).subscribe(res => {
      this.serviceData = res[0];
      this.addBookingForm.patchValue({
        service_name: this.serviceData['service_name'],
        price: this.serviceData['price'],
      description: this.serviceData['description'],
      note: this.serviceData['note'],
      parallel: this.serviceData['parallel'].toLowerCase(),
      durationMin: this.serviceData['duration'].split(':')[1],
      durationHours: this.serviceData['duration'].split(':')[0],
      paddingMin: this.serviceData['padding_time'].split(':')[1],
      processing_time_dservice_hours: this.serviceData['processing_time_dservice'].split(':')[0],
      processing_time_dservice_min: this.serviceData['processing_time_dservice'].split(':')[1],
      proccessing_time_aservice_hours: this.serviceData['proccessing_time_aservice'].split(':')[0],
      proccessing_time_aservice_min: this.serviceData['proccessing_time_aservice'].split(':')[1],
      intervalHours: this.serviceData['interval'].split(':')[0],
      intervalMin: this.serviceData['interval'].split(':')[1],
      padding_time_type: this.serviceData['padding_time_type'].toLowerCase(),
      category: this.serviceData['category'].id,
      tax_rate: this.serviceData['tax_rate'],
      shop_id: this.serviceData['shop_id'],
    });
    this.patchMembers(this.serviceData['members']);
  });
  }


  initializeForm() {
    this.addBookingForm = this.formBuilder.group({
      service_name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(Pattern.numericRegex)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      note: ['', [Validators.required, Validators.maxLength(500)]],
      parallel: [''],
      durationMin: ['', Validators.required],
      durationHours: ['', Validators.required],
      padding_time: [''],
      processing_time_dservice_hours: [''],
      processing_time_dservice_min: [''],
      proccessing_time_aservice_hours: [''],
      proccessing_time_aservice_min: [''],
      intervalHours: [''],
      intervalMin: [''],
      padding_time_type: [''],
      category: ['', Validators.required],
      tax_rate: [''],
      shop_id: [''],
      advance_options: [true],
      selectAll: [false]
    });
  }

  disableFields(action, fieldsControlNames: string[]) {
    if (action === 'disabled') {
      fieldsControlNames.forEach(controlName => {
        this.addBookingForm.get(controlName).disable();
      });
    } else if (action === 'enable') {
      fieldsControlNames.forEach(controlName => {
        this.addBookingForm.get(controlName).enable();
      });
    }
  }

  onChanges() {
    const fieldsToBeDisabled = [
      'parallel', 'padding_time', 'padding_time_type',
      'proccessing_time_aservice_hours', 'proccessing_time_aservice_min',
      'intervalHours', 'intervalMin', 'tax_rate', 'processing_time_dservice_hours',
      'processing_time_dservice_min'
    ];

    this.addBookingForm.get('advance_options').valueChanges.subscribe(option => {
      if (option === false) {
        this.disableFields('disabled', fieldsToBeDisabled);
      } else {
        this.disableFields('enable', fieldsToBeDisabled);
      }
    });
  }
  patchMembers(members) {
    const formArray: FormArray = this.addBookingForm.get('membersArray') as FormArray;
    this.membersData.forEach((res, i) => {
      members.forEach((member, index) => {
        if (res.id === member.id) {
          formArray.controls[i].setValue(true);
        }
      });
    });
    if (this.membersData.length === members.length) {
      this.addBookingForm.get('selectAll').setValue(true);
    }
  }

  onCheckChange(event) {
    const formArray: FormArray = this.addBookingForm.get('membersArray') as FormArray;
    console.log(event);
    const checkedItems = [];
      formArray.controls.forEach((res, i) => {
        if (res.value) {
          checkedItems.push(this.membersData[i].id);
        } else {
          checkedItems.splice(i, 1);
        }
      });
      if (checkedItems.length === this.membersData.length) {
        this.addBookingForm.get('selectAll').setValue(true);
      } else {
        this.addBookingForm.get('selectAll').setValue(false);
      }
      this.membersArray = checkedItems;
      console.log(this.membersArray);
  }

  onSelectAll(event) {
    if (event.checked) {
      this.membersArray = [];
      this.addBookingForm.controls['membersArray']['controls'].map((item, i) => {
        item.setValue(true);
      });
    } else {
      this.addBookingForm.controls['membersArray']['controls'].map((item, i) => {
        item.setValue(false);
      });
    }
  }

  onKeyUp(event, inputName) {
    if (event) {
      this.remainingText[inputName] = event.target.maxLength - event.srcElement.value.length;
    }
  }
  
  onSubmit(form: NgForm) {
    delete this.addBookingForm.value.membersArray;
    if (!this.addBookingForm.value.advance_options) {
        delete this.addBookingForm.value.interval;
        delete this.addBookingForm.value.proccessing_time_aservice;
        delete this.addBookingForm.value.processing_time_dservice;
        delete this.addBookingForm.value.padding_time;
        delete this.addBookingForm.value.padding_time_type;
        delete this.addBookingForm.value.tax_rate;
        delete this.addBookingForm.value.parallel;
    } else {
      this.addBookingForm.value.interval = this.addBookingForm.value.intervalHours + ':' + this.addBookingForm.value.intervalMin;
      this.addBookingForm.value.padding_time = '00:' + this.addBookingForm.value.padding_time;
      this.addBookingForm.value.processing_time_dservice = this.addBookingForm.value.processing_time_dservice_hours +
        ':' + this.addBookingForm.value.processing_time_dservice_min;
      this.addBookingForm.value.proccessing_time_aservice = this.addBookingForm.value.proccessing_time_aservice_hours +
        ':' + this.addBookingForm.value.proccessing_time_aservice_min;
      this.addBookingForm.value.duration = this.addBookingForm.value.durationHours + ':' + this.addBookingForm.value.durationMin;
    }

    delete this.addBookingForm.value.proccessing_time_aservice_hours;
        delete this.addBookingForm.value.proccessing_time_aservice_min;
        delete this.addBookingForm.value.processing_time_dservice_hours;
        delete this.addBookingForm.value.processing_time_dservice_min;
        delete this.addBookingForm.value.intervalHours;
        delete this.addBookingForm.value.intervalMin;
        delete this.addBookingForm.value.advance_options;


        this.membersArray.forEach(element => {
          this.addBookingForm.value.members = element;
        });
    // delete this.addBookingForm.value.advance_options;
    delete this.addBookingForm.value.selectAll;
    this.addBookingForm.value.shop_id = this.user.shop_details.id;
    const obj = this.addBookingForm.value;
    const formData = new FormData();
   
    this.submitted = true;
    if (this.addBookingForm.invalid) {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      return;
    }
    
    delete this.addBookingForm.value.durationHours;
    delete this.addBookingForm.value.durationMin;
    for ( var key in obj ) {
      if (key === 'membersArray' && Array.isArray(obj[key]) && !obj[key].length) {
        formData.append(key, '[]')
      }
      if (key === 'members') {
        formData.append('members', '[' + this.membersArray.map(i => `"${i}"`).join(',') + ']');
      } else {
        formData.append(key, obj[key]);
      }
      }
    if (this.id) {
      this.bookingService.editService(obj).subscribe(() => {
        this.toastr.success('Service edited successfully.');
        this.addBookingForm.reset();
        form.resetForm();
      }, err => {
        console.log(err);
      });
    } else {
      this.bookingService.addBooking(formData).subscribe(() => {
        this.toastr.success('Booking added successfully.');
        this.addBookingForm.reset();
        form.resetForm();
      }, err => {
        console.log(err);
      });
      this.submitted = false;
    }
  }

  changeTab(tab) {
    this.tab = tab;
    this.onChangeTab.emit(tab);
  }
}
