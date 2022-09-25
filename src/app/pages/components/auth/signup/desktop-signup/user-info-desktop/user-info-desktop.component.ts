import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, PatternValidator, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

import { UserService } from '../../../../../../core';
import { TempSignupDataService } from 'src/app/core/services/temp-signup-data-service';
import { Pattern } from 'src/app/shared/regex.pattern';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'user-info-desktop',
  templateUrl: './user-info-desktop.component.html',
  styleUrls: ['./user-info-desktop.component.scss']
})
export class UserInfoDesktopComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  userInfoForm: FormGroup;

  @Output() selectStep = new EventEmitter<number>();
  today = new Date(); 
  gender = 'm';
  more: boolean = false;

  step: number = 2;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private signupData: TempSignupDataService,
    private toast: ToastrService
  ) {
    this.today.setDate(this.today.getDate());
   }

  ngOnInit() {
    this.createForm();
    this.checkDataExist();    
  }

  checkDataExist() {
    let data = this.signupData.getUserInfo();

    if(data){
      console.log("data >", data);

      // gender selected
      this.gender = data.gender;

      this.userInfoForm.patchValue({
        first_name: data.first_name,
        last_name: data.last_name,
        birth_date: data.birth_date,
        username: data.username,
        gender: data.gender,
        custom: data.custom,
        email: data.email,
        confirmEmail: data.confirmEmail,
        password: data.password,
        confirmPassword: data.confirmPassword
      });

      // activate the input label as focused to mark MDB label to top
      this.signupData.activateMDBinput();
    }
    else {
      console.log('no data');
    }
  }

  createForm() {
    this.userInfoForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern(Pattern.nameRegex)]],
      last_name: ['', [Validators.required, Validators.pattern(Pattern.nameRegex)]],
      birth_date: ['', [Validators.required, this.minimumAge(13)]],
      username: ['', [Validators.required]],
      gender: ['m', [Validators.required]],
      custom: [''],
      email: ['', [Validators.required, Validators.pattern(Pattern.emailRegex)]],
      confirmEmail: ['', [Validators.required, Validators.pattern(Pattern.emailRegex)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });

    this.userInfoForm.get('username').valueChanges
      .subscribe(user => {
        var exp = new RegExp('')
        if(user.includes(' '))
        this.userInfoForm.get('username').setErrors({spaceExists: true});
        // else
        // this.userInfoForm.get('username').setErrors({spaceExists: false});

      })
  }

  minimumAge(age): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value) {
          // carefull, moment months range is from 0 to 11
          let value: any =  moment(control.value).format('YYYY-MM-DD').split('-');
          value = {
            year: value[0],
            month: value[1],
            day: value[2]
          }
          const date = moment({ year: +value.year, month: (+value.month) - 1, day: +value.day }).startOf('day');
          if (date.isValid()) {
            // https://momentjs.com/docs/#/displaying/difference/
            const now = moment().startOf('day');
            const yearsDiff = date.diff(now, 'years');
            if (yearsDiff > -age) {
              return { 'ageInvalid': true }
            }
          }
        }
        return null;
      };
  }

  genderSelect(gender) {
    this.gender = gender;
    this.userInfoForm.patchValue({ gender: this.gender });
    
    if (gender === 'c') {
      this.userInfoForm.controls['custom'].setValidators([Validators.required])
    } else {
      this.userInfoForm.controls['custom'].setValidators(null);
    }
    
  }

  showMore() {
    this.more = !this.more;
  }

  onSelectStep() {
    this.selectStep.emit(this.step);
  }

  async checkEmailExists(email) {
    this.subscription.add(this.userService.checkEmailExists(email).subscribe(
      (res: any) => {
        if (!res.status) {
          this.userInfoForm.get('email').setErrors(null);
          this.checkUsernameExists();
        } else {
          this.toast.error("Email already exists.");
          this.userInfoForm.get('email').setErrors({emailAlreadyExists: true});
        }
      },
      (err) => {
        // TODO error handling
        if (err.status == false) {
          
        }
        console.log(err);
      }
    ));
  }

  
  async checkUsernameExists() {
    this.subscription.add(this.userService.checkNickNameExists(this.userInfoForm.get('username').value).subscribe(
      (res: any) => {
        if (!res.status) {
          this.proceed();
          this.userInfoForm.markAllAsTouched();
          if (this.userInfoForm.valid) {
            // this.userService.update(this.userInfoForm.value)
            console.log(this.userInfoForm.value);
            this.userInfoForm.value.birth_date = moment(this.userInfoForm.value.birth_date).format('YYYY-MM-DD');
            this.signupData.setUserInfo(this.userInfoForm.value);
            this.onSelectStep();
          }
          this.userInfoForm.get('username').setErrors(null);
        } else {
          this.toast.error("Username already exists.");
          this.userInfoForm.get('username').setErrors({nicknameAlreadyExists: true});
        }
      },
      (err) => {
        // TODO error handling
      } 
    ));
  }

  proceed() {
    const userInfo = this.userService.getTempRegisteredUser();
    if (userInfo && userInfo.id && this.userInfoForm.valid) {
      this.onSelectStep();
    } else if (this.userInfoForm.valid) {
      this.checkEmailExists(this.userInfoForm.get('email').value);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
