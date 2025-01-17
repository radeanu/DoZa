import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { FormLogin } from '@shared/types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  isLoginRoute = true;
  myForm: FormGroup = new FormGroup({
    uName: new FormControl('', Validators.required),
    uPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  @Input() route: string;
  @Output() formValues = new EventEmitter<FormLogin>();
  @Output() routeState = new EventEmitter<boolean>();

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this._checkForNewFormControls();
  }

  submit(): void {
    if (this.myForm.invalid) {
      return;
    }

    this.formValues.emit(this._getFormData);
  }

  getErrorMsg(control: string): string {
    if (
      !this.myForm.controls[control].invalid ||
      !this.myForm.controls[control].touched
    ) {
      return;
    }
    if (this.myForm.controls[control].hasError('minlength')) {
      return 'login-form.REQUIRED_LENGTH';
    }

    if (this.myForm.controls[control].hasError('email')) {
      return 'login-form.INVALID_EMAIL';
    }

    return 'login-form.INVALID';
  }

  private get _getFormData(): FormLogin {
    const data: FormLogin = {
      userName: this.myForm.get('uName').value,
      password: this.myForm.get('uPassword').value,
    };

    return this.isLoginRoute
      ? data
      : {
          ...data,
          email: this.myForm.get('uEmail').value,
          birthday: this.datePipe.transform(
            this.myForm.get('uData').value,
            'dd/MM/yyyy'
          ),
          gender: this.myForm.get('uGender').value,
        };
  }

  private _checkForNewFormControls(): void {
    if (this.route === 'sign-up') {
      this.routeState.emit(false);
      this.isLoginRoute = false;
      this.myForm.addControl(
        'uEmail',
        new FormControl('', [Validators.required, Validators.email])
      );
      this.myForm.addControl(
        'uData',
        new FormControl('', [Validators.required])
      );
      this.myForm.addControl(
        'uGender',
        new FormControl('', [Validators.required])
      );
    }
  }
}
