import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormLogin } from '@shared/types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  hide = true;
  @Output() formValues = new EventEmitter<FormLogin>();

  myForm: FormGroup = new FormGroup({
    uName: new FormControl('', Validators.required),
    uPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  submit(): void {
    if (this.myForm.invalid) {
      return;
    }

    const userName = this.myForm.get('uName').value;
    const password = this.myForm.get('uPassword').value;
    this.formValues.emit({ userName, password });
  }

  getErrorMsg(control: string): string {
    if (control === 'pass') {
      return this.myForm.controls.uPassword.hasError('minlength')
        ? 'Required more than 6 caracteres'
        : 'Invalid';
    }

    return this.myForm.controls.uName.invalid
      ? 'Invalid'
      : '';
  }
}
