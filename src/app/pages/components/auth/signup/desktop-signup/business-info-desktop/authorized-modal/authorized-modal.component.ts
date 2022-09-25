import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pattern } from 'src/app/shared/regex.pattern';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-authorized-modal',
  templateUrl: './authorized-modal.component.html',
  styleUrls: ['./authorized-modal.component.scss']
})
export class AuthorizedModalComponent implements OnInit {
  authorizedForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef:MatDialogRef<AuthorizedModalComponent>) { }

  ngOnInit() {
    this.authorizedForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', [Validators.required]],
      gender: ['', Validators.required],
    });
  }

  submit() {
    if (this.authorizedForm.valid) {
      this.dialogRef.close(this.authorizedForm.value);
    }
  }
}
