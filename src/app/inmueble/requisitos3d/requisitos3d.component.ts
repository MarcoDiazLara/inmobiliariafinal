import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {  Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  FormArray } from '@angular/forms';




interface ColorOption {
  name: string;
  value: string;
}
@Component({
  selector: 'app-requisitos3d',
  templateUrl: './requisitos3d.component.html',
  styleUrls: ['./requisitos3d.component.scss']
})
export class Requisitos3dComponent  implements OnInit {
  form: FormGroup;
  // usuarios: FormArray;
  forms: FormGroup[] = [];
   formGeneral!:FormGroup;
  numberOfForms: number = 1; // Valor inicial
  dynamicForms: FormGroup[] = [];
  miFormulario!: FormGroup;
  

  selectedColor: string = '';
  colorOptions: ColorOption[] = [
    { name: 'Rojo', value: 'red' },
    { name: 'Verde', value: 'green' },
    { name: 'Azul', value: 'blue' },
    // Puedes agregar más opciones según tus necesidades
  ];
  
  constructor(private fb: FormBuilder , public dialog: MatDialog) {
    this.form = this.fb.group({
      usuarios: this.fb.array([])
    });
    // this.generateForms();
    // this.initializeForms(0); // Specify the desired number of forms


  }
 

  
  get items(): FormArray {
    return this.miFormulario.get('items') as FormArray;
  }

  agregarItem() {
    this.items.push(this.fb.group({
      // Definir los campos del formulario aquí
      items: this.fb.array([]),
      name: ['', [Validators.required]],
      Nombre_de_habitacion: ['', [Validators.required]],
      Elementos_del_Inmueble:['',[Validators.required]],
      Acabados: ['', [Validators.required]],
      Color:['', [Validators.required]],
      tipo_material:['', [Validators.required]],
      Largo:['', [Validators.required]],
      Ancho:['', [Validators.required]],
      Altura:['', [Validators.required]],
      img:['', [Validators.required]],
      
    }));
  }

  eliminarItem(index: number) {
    this.items.removeAt(index);
  }
  ngOnInit() {
    this.miFormulario = this.fb.group({
      items: this.fb.array([]),
      name: ['', [Validators.required]],
      Nombre_de_habitacion: ['', [Validators.required]],
      Elementos_del_Inmueble:['',[Validators.required]],
      Acabados: ['', [Validators.required]],
      Color:['', [Validators.required]],
      tipo_material:['', [Validators.required]],
      Largo:['', [Validators.required]],
      Ancho:['', [Validators.required]],
      Altura:['', [Validators.required]],
      img:['', [Validators.required]],

      
      
    });
 
//     this.formGeneral = this.fb.group({
//       name: ['', [Validators.required]],
//       Nombre_de_habitacion: ['', [Validators.required]],
//       Elementos_del_Inmueble:['',[Validators.required]],
//       Acabados: ['', [Validators.required]],
//       Color:['', [Validators.required]],
//       tipo_material:['', [Validators.required]],
//       Largo:['', [Validators.required]],
//       Ancho:['', [Validators.required]],
//  });
  }
  // generateForms() {
  //   this.dynamicForms = [];
  //   this.initializeForms(this.numberOfForms);
  // }


 

  get usuarios() {
    return this.form.get('usuarios') as FormArray;
  }

  agregarUsuario() {
    this.usuarios.push(this.fb.group({
      username: ['']
    }));
  }

  eliminarUsuario(index: number) {
    this.usuarios.removeAt(index);
  }



  // private initializeForms(numberOfForms: number) {
  //   for (let i = 0; i < numberOfForms; i++) {
  //     const form = this.fb.group({
  //        Numero_de_Cuartos: ['', [Validators.required]],
  //     Numero_de_Elementos: ['', [Validators.required]],
  //     name: ['', [Validators.required]],
  //     Nombre_de_habitacion: ['', [Validators.required]],
  //     Elementos_del_Inmueble:['',[Validators.required]],
  //     Acabados: ['', [Validators.required]],
  //     Color:['', [Validators.required]],
  //     tipo_material:['', [Validators.required]],
  //     Largo:['', [Validators.required]],
  //     Ancho:['', [Validators.required]],
  //     });

  //    this.dynamicForms.push(form);
  //    }
  // }

  // clearForms() {
  //   this.dynamicForms = [];
  //   this.numberOfForms = 1; // Puedes ajustar esto según tus necesidades
  // }

  CerraDialogo(){
    this.dialog.closeAll();
 
    }
  }

  

 

  

  

