import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  Input,
  AfterContentInit
} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { UserService, LoaderService } from 'src/app/core';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../../../shared/services/theme/theme.service';

declare var stripe: any;
declare var elements: any;
declare var mPaymentHelper: any;

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit, OnDestroy, AfterContentInit {

  isThemeDark: Observable<boolean>;

  subscriptionId;
  stripePlanId;
  @Input() paymentData;
  isYearlyPlan = false;
  @ViewChild("cardInfo", {static: true}) cardInfo: ElementRef;

  example = null;
  form = null;

  card: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  coupon_code;
  cardHandler = this.onChange.bind(this);
  error: string;
  constructor(
    private themeService: ThemeService,

    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private paymentService: PaymentService,
    private loaderService: LoaderService
  ) {}
  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
    this.checkDarkMode();

    this.activatedRoute.queryParams.subscribe(params => {
      this.subscriptionId = params["planId"];
      this.stripePlanId = params["stripeId"];
      this.isYearlyPlan = params["isYearly"];
      this.coupon_code = params["coupon_code"];
    });
    this.example = document.getElementById("example-2");
    this.form = document.getElementsByTagName("form")[1] || document.getElementsByTagName("form")[0];
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

  ngAfterContentInit() {
    // this.subscriptionId = this.paymentData.planDetails["planId"];
    //   this.stripePlanId = this.paymentData.planDetails["stripeId"];
    //   this.isYearlyPlan = this.paymentData.planDetails["isYearly"];
    mPaymentHelper.attachListeners(".cell.example.example2 .input");
    const elementStyles = {
      base: {
        color: "#FB3B71",
        fontWeight: 500,
        fontSize: "16px",
        fontSmoothing: "antialiased",

        "::placeholder": {
          color: "#CFD7DF"
        },
        ":-webkit-autofill": {
          color: "#e39f48"
        }
      },
      invalid: {
        color: "#E25950",

        "::placeholder": {
          color: "#FFCCA5"
        }
      }
    };

    const elementClasses = {
      focus: "focused",
      empty: "empty",
      invalid: "invalid"
    };

    this.cardNumber = elements.create("cardNumber", {
      style: elementStyles,
      classes: elementClasses,
      placeholder: "0000 0000 0000 0000"
    });

    this.cardNumber.mount("#example2-card-number");

    this.cardExpiry = elements.create("cardExpiry", {
      style: elementStyles,
      classes: elementClasses
    });
    this.cardExpiry.mount("#example2-card-expiry");

    this.cardCvc = elements.create("cardCvc", {
      style: elementStyles,
      classes: elementClasses
    });
    this.cardCvc.mount("#example2-card-cvc");

    mPaymentHelper.registerElements(
      [this.cardNumber, this.cardExpiry, this.cardCvc],
      "example2"
    );

    this.form.addEventListener("submit", e => {
      this.loaderService.hide();
      // e.preventDefault();

      // Show a loading screen...
      this.example.classList.add("submitting");

      // Disable all inputs.
      mPaymentHelper.disabledInputs(this.form);

      stripe.createToken(this.cardNumber).then(result => {
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
    });
  }

  ngOnDestroy() {
    this.cardCvc.destroy();
    this.cardExpiry.destroy();
    this.cardNumber.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
}
