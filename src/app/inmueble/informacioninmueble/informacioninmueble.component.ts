import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';


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
  opciones = ['Opción 1', 'Opción 2', 'Opción 3'];
  opcionSeleccionada: string = '';
  
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  // -----------------------------------------
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
 
  constructor(private _formBuilder: FormBuilder,private dialog:MatDialog,) { }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  options!: FormGroup;
  ngOnInit(): void {
    this.options = this._formBuilder.group({
      Nombre_de_Inmueble: ['', [Validators.required]],
      Descripcion:['', [Validators.required]],
      Calle:['', [Validators.required]],
      No_Interior:['', [Validators.required]],
      No_Exterior:['', [Validators.required]],
      Terreno:['', [Validators.required]],
      Construccion:['', [Validators.required]],
      Recamaras:['', [Validators.required]],
      Banos:['', [Validators.required]],
      Cocina_Integral:['', [Validators.required]],
      Numero_Pisos:['', [Validators.required]],
      Antiguedad:['', [Validators.required]],
      Acabados:['', [Validators.required]],
      Alberca:['', [Validators.required]],
      Jardin:['', [Validators.required]],
      GYM:['', [Validators.required]],
      RoofGarden:['', [Validators.required]],
      Estacionamiento:['', [Validators.required]],
      Precio_Maximo:['', [Validators.required]],
      Precio_Minimo:['', [Validators.required]],
      Precio_Final:['', [Validators.required]],
    });
  }
  CerraDialogo(){
    this.dialog.closeAll();
 
    }

}
