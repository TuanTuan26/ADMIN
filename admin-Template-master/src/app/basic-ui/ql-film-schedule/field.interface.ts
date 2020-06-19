import {Observable} from 'rxjs';
import {AsyncValidatorFn, FormArray, FormGroup, Validators} from '@angular/forms';
import {ComponentRef, Injector, TemplateRef, Type} from '@angular/core';

export interface Validator {
  name: string;
  validator: any;
  message: string;
  params?: any;
}

export interface FormElementConfig {
  label?: string;
  classes?: string[];
  collections?: any;
  type: AutocompleteConfig | ButtonConfig | CheckboxConfig | DateConfig | EditorConfig | InputConfig |
    MultipleLanguagesConfig | RadioButtonConfig | SelectConfig | ImageConfig | TextareaConfig;
  disabled?: boolean;
}

export interface Option {
  label: string;
  value: any;
  classes?: string[];
}

export interface HintConfig {
  hint?: {
    show?: boolean;
    limitedLength?: (value) => number;
  };
}

export interface ValueConfig {
  name: string;
  value?: any;
  readonly?: boolean;
}

export interface RequiredConfig {
  required?: boolean;
}

export interface ValidatorConfig {
  validations?: Validator[];
  asyncValidations?: Validator[];
}

export interface AutocompleteConfig extends ValidatorConfig, ValueConfig, RequiredConfig {
  kind: 'autocomplete';
  displayWith: (element) => string;
  filter?: (element: any) => void;
  options$: Observable<Option[]>;
}

export interface ButtonConfig {
  kind: 'button';
  icon?: 'search' | 'save';
  color?: 'warn' | 'primary';
  showSpinner?: boolean;
  spinnerLabel?: string;
  closeButton?: {
    label: string;
    close: () => void
  };
}

export interface CheckboxConfig extends ValueConfig {
  kind: 'checkbox';
}

export interface ImageConfig extends ValueConfig {
  kind: 'image';
  uploadLabel: string;
  alt?: string;
}

export interface InputConfig extends ValidatorConfig, ValueConfig, HintConfig, RequiredConfig {
  kind: 'input';
  inputType?: string;
  icon?: string;
}


export interface DateConfig extends ValidatorConfig, ValueConfig, RequiredConfig {
  kind: 'date';
  min?: {
    function: () => Date,
    message: string;
  };
  max?: {
    function: () => Date;
    message: string;
  };
  onDateChange?: (value?: any) => any;
}

export interface EditorConfig extends ValidatorConfig, ValueConfig, RequiredConfig {
  kind: 'editor';
  url: string;
  requestPartName: string;
}

export interface RadioButtonConfig extends ValidatorConfig, ValueConfig {
  kind: 'radiobutton';
  options: {
    label: string;
    value: any;
    classes?: string[];
    controlsConfig?: FormElementConfig[];
  }[];
  isRow?: boolean;
}

export interface SelectConfig extends ValidatorConfig, ValueConfig, RequiredConfig {
  kind: 'select';
  options: Option[];
}

export interface MultipleLanguagesConfig extends ValueConfig {
  kind: 'multipleLanguages';
  array?: FormArray;
  selectedIndex: number;
  groupFieldsConfig: {
    languageId: number;
    group?: FormGroup;
    fieldsConfig: FormElementConfig[]
  }[];
}

export interface TextareaConfig extends ValidatorConfig, ValueConfig, HintConfig, RequiredConfig {
  kind: 'textarea';
}
