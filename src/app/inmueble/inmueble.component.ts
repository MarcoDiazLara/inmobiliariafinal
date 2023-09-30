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
  import {MatCheckboxModule} from '@angular/material/checkbox';






  // esto se tomo de ejemplo 

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule,MatRadioModule,MatCheckboxModule,NgFor
  ],
  
})
export class InmuebleComponent implements OnInit {
  indeterminate = false;
  fileName: string ="";
  isLinear = false;
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
 
  constructor(private _formBuilder: FormBuilder) {}












  



  ngOnInit(): void {
   
  }

}
