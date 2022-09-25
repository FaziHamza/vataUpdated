import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Errors, UserService } from "../../../core";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
