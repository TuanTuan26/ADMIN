import {AbstractControl, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Validator} from './field.interface';

export class ValidatorUtils {

  static phonePattern = /(?=^0[1-9][0-9]{8,9}$)|(?=^\+[1-9]{1,4}[0-9]{8,10}$)/;

  static required: Validator = {
    name: 'required',
    validator: Validators.required,
    message: 'Khong duoc de trong',
  };

  static email: Validator = {
    name: 'email',
    validator: Validators.email,
    message: 'validation.email'
  };

  static username: Validator = {
    name: 'pattern',
    validator: Validators.pattern('[a-zA-Z0-9_]*'),
    message: 'validation.pattern.username'
  };

  static phoneNumber: Validator = {
    name: 'pattern',
    validator: Validators.pattern(ValidatorUtils.phonePattern),
    message: 'validation.pattern.phoneNumber'
  };

  static minLength(value: number): Validator {
    return {
      name: 'minlength',
      validator: Validators.minLength(value),
      message: 'validation.minlength',
      params: {min: value}
    };
  }

  static maxLength(value: number): Validator {
    return {
      name: 'maxlength',
      validator: Validators.maxLength(value),
      message: 'validation.maxlength',
      params: {max: value}
    };
  }

  static pattern(value: string | RegExp, message: string): Validator {
    return {
      name: 'pattern',
      validator: Validators.pattern(value),
      message
    };
  }

  static serverSideFieldValidatorOnCreate(apiCalls: (value: string) => Observable<any>, message: string) {
    return {
      name: 'serverSideFieldValidator',
      validator: (control: AbstractControl) => {
        if (control.value) {
          return apiCalls(control.value)
            .pipe(
              map(_ => ({serverSideFieldValidator: true})),
              catchError(_ => of(null))
            );
        } else {
          return of(null);
        }
      },
      message
    };
  }

  static serverSideFieldValidatorOnUpdate(apiCalls: (id: number, value: string) => Observable<any>, id: number, message: string) {
    return {
      name: 'serverSideFieldValidator',
      validator: (control: AbstractControl) => {
        if (control.value) {
          return apiCalls(id, control.value)
            .pipe(
              map(_ => ({serverSideFieldValidator: true})),
              catchError(_ => of(null))
            );
        } else {
          return of(null);
        }
      },
      message
    };
  }
}
