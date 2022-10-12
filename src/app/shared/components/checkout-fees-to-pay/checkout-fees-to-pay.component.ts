import { AfterContentInit, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderService } from 'src/app/core/services/loader.service';
import { UserService } from 'src/app/core/services/user.service';
import { PaymentService } from '../../services/payment.service';
declare var stripe: any;
declare var mPaymentHelper: any;

@Component({
  selector: 'app-checkout-fees-to-pay',
  templateUrl: './checkout-fees-to-pay.component.html',
  styleUrls: ['./checkout-fees-to-pay.component.scss']
})

export class CheckoutFeesToPayComponent implements OnInit, AfterContentInit {
  dataGet: any = {};
  copied: boolean = false;
  example = null;
  form = null;
  card: any;
  cardExpiry: any;
  cardCvc: any;
  coupon_code;
  subscriptionId;
  stripePlanId;
  @Input() paymentData;
  isYearlyPlan = false;
  addCheckoutForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CheckoutFeesToPayComponent>,
    private userService: UserService,
    private paymentService: PaymentService,
    private formBuilder: FormBuilder,
  ) {
    if (data) {
      this.dataGet = data;
    }
  }
  submitted = false;
  onTouch: any = () => { };
  onChange: any = () => { };
  val = "";
  ngOnInit() {
    this.IntilizeForm();
  }
  IntilizeForm() {
    this.addCheckoutForm = this.formBuilder.group({
      cardNumber: ['', [Validators.maxLength(16), Validators.required]],
      cardHolder: ['', Validators.required],
      month: ['', Validators.required],
      cvc: ['', Validators.required],
      remember: [false],
    })
  }
  copyText(text) {
    navigator.clipboard.writeText(text);
    this.copied = !this.copied;
    console.log(text + ' > text copied');
  }
  ngAfterContentInit() {

  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  create(addCheckout) {
    debugger
    let cardNumber = this.addCheckoutForm.value.cardNumber;
    if(this.addCheckoutForm.valid){
      stripe.createToken(cardNumber).then(result => {
        // Stop loading!
        console.log(result);
  
        if (result.token) {
          this.paymentService
            .addUserCard({
              user: this.userService.getTempRegisteredUser().id,
              id: result.token.id
            })
            .subscribe(
              (res: any) => {
                console.log(res);
                this.paymentService
                  .addUserSubscription({
                    user: this.userService.getTempRegisteredUser().id,
                    card_id: res.id,
                    subscription: this.subscriptionId,
                    yearly: this.isYearlyPlan,
                    coupon_code: this.coupon_code
                  })
                  .subscribe(
                    (paymentStatus: any) => {
                      if (paymentStatus.status === "success") {
                        this.example.classList.remove("submitting");
                      } else {
                        this.example.classList.add("error");
                      }
                      this.example.classList.add("submitted");
                    },
                    error => {
                      console.log(error);
                      this.example.classList.remove("submitting");
  
                      this.example.classList.add("error");
                    }
                  );
              },
              error => {
                console.log(error);
                this.example.classList.remove("submitting");
  
                this.example.classList.add("error");
              }
            );
          // If we received a token, show the token ID.
          // this.example.querySelector('.token').innerHTML = result.token.id;
        } else {
          // Otherwise, un-disable inputs.
          mPaymentHelper.enableInputs(this.form);
        }
      }, err => {
        this.example.classList.remove("submitting");
        this.example.classList.add("error");
      });
    }
   
  }

}
