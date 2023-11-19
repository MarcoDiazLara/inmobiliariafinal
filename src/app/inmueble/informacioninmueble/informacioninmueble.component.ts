import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-informacioninmueble',
  templateUrl: './informacioninmueble.component.html',
  styleUrls: ['./informacioninmueble.component.scss'],
  // providers: [
  //   {
  //     provide: STEPPER_GLOBAL_OPTIONS,
  //     useValue: {showError: true},
  //   },
  // ],
})
export class InformacioninmuebleComponent implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  constructor(private _formBuilder: FormBuilder) { }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  ngOnInit(): void {
  }

}
