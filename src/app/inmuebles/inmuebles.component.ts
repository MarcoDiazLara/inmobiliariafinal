import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatStepperModule} from '@angular/material/stepper';
  import {MatButtonModule} from '@angular/material/button';
  import { FormGroup } from '@angular/forms';
  import {NgFor} from '@angular/common';
  import {MatSelectModule} from '@angular/material/select';
  import {MatRadioModule} from '@angular/material/radio';

  // esto se tomo de ejemplo 

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, NgFor, MatSelectModule,MatRadioModule
  ],

})
export class InmueblesComponent implements OnInit {
  fileName: string ="";
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      // Aquí puedes realizar acciones adicionales con el archivo seleccionado, como enviarlo a un servidor.
    } else {
      this.fileName = "";
    }


  }

       
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];





  miFormulario!: FormGroup;
  

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) {}



  ngOnInit(): void {
  }

}
