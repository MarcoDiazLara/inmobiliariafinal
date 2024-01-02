import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {  Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  FormArray } from '@angular/forms';


interface selects{
  value: string;
  viewValue: string;
}


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
    habitaciones: selects[] = [
      {value: 'Dormitorio', viewValue: 'Dormitorio'},
      {value: 'Baño', viewValue: 'Baño'},
    {value: 'Comedor', viewValue: 'Comedor'},
    {value: 'Sala', viewValue: 'Sala'},
    {value: 'Cocina', viewValue: 'Cocina'},
    {value: 'Sotano', viewValue: 'Sotano'},
    {value: 'Estudio', viewValue: 'Estudio'},
    {value: 'Jardin', viewValue: 'Jardin'},
    {value: 'Garaje', viewValue: 'Garaje'},
    {value: 'Local', viewValue: 'Local'},
    {value: 'Atico', viewValue: 'Atico'},
    {value: 'Lavanderia', viewValue: 'Lavanderia'},
    {value: 'Patio', viewValue: 'Patio'},
    {value: 'Biblioteca', viewValue: 'Biblioteca'},
    {value: 'Lavanderia', viewValue: 'Lavanderia'},
    {value: 'Roof garden', viewValue: 'Roof garden'},
    {value: 'Closet', viewValue: 'Closet'},
    ];

    elementos: selects[] = [
      {value: 'Ventana', viewValue: 'Ventana'},
      {value: 'Puerta', viewValue: 'Puerta'},
      {value: 'Interruptor', viewValue: 'Interruptor'},
      {value: 'Columnas centrales', viewValue: 'Columnas centrales'},
      {value: 'Tragaluz', viewValue: 'Tragaluz'},
      {value: 'Retrete', viewValue: 'Retrete'},
      {value: 'Lava manos', viewValue: 'Lava manos'},
      {value: 'Tina', viewValue: 'Tina'},
      {value: 'Jacuzzi', viewValue: 'Jacuzzi'},
      {value: 'Escaleras', viewValue: 'Escaleras'},
      {value: 'Lamparas', viewValue: 'Lamparas'},
      {value: 'Cancel', viewValue: 'Cancel'},
      {value: 'Porton', viewValue: 'Porton'},
      {value: 'Piso', viewValue: 'Piso'},
      {value: 'Techo', viewValue: 'Techo'},
      {value: 'Pared', viewValue: 'Pared'},
      {value: 'Regadera', viewValue: 'Regadera'},
      {value: 'Toma de Agua', viewValue: 'Toma de Agua'},
      {value: 'Chimenea', viewValue: 'Chimenea'},	
      {value: 'Barrita', viewValue: 'Barrita'},
    ];


    material: selects[] =[
      {value: 'Desconocido', viewValue: 'Desconocido'},
      {value: 'Aluminio', viewValue: 'Aluminio'},
      {value: 'Acero Inoxidable', viewValue: 'Acero Inoxidable'},
      {value: 'Madera', viewValue: 'Madera'},
      {value: 'Lozeta', viewValue: 'Lozeta'},
      {value: 'Marmol', viewValue: 'Marmol'},
      {value: 'Repillado', viewValue: 'Repillado'},
      {value: 'Piso Pulido', viewValue: 'Piso Pulido'},
      {value: 'Ceramica', viewValue: 'Ceramica'},
      {value: 'Cristal', viewValue: 'Cristal'},
      {value: 'Yeso', viewValue: 'Yeso'},
      {value: 'Tablaroca', viewValue: 'Tablaroca'},
      {value: 'Lamina', viewValue: 'Lamina'},
      {value: 'Hormigon', viewValue: 'Hormigon'},
      {value: 'Fibra de vidrio', viewValue: 'Fribra de vidrio'},
      {value: 'Carton', viewValue: 'Carton'},
      {value: 'Adobe', viewValue: 'Adobe'},
      {value: 'Plastico', viewValue: 'Plastico'},
      {value: 'Grava', viewValue: 'Grava'},
      {value: 'Ladrillo', viewValue: 'Ladrillo'},
      {value: 'Hierro', viewValue: 'Hierro'},
    ];

    acabados: selects[] = [
      {value: 'Ninguno', viewValue: 'Ninguno'},
      {value: 'Desconocido', viewValue: 'Desconocido'},
      {value: 'Pintura', viewValue: 'Pintura'},
      {value: 'Papel tapiz', viewValue: 'Papel tapiz'},
      {value: 'Revestimiento', viewValue: 'Revestimiento'},
      {value: 'Rustico', viewValue: 'Rustico'},
    ]


     ObtnerInformacio(){
      let date = new Date();
      // this.subir_imagenes();
      const itemsArray = this.miFormulario.get('items') as FormArray;
const firstItemName = itemsArray.controls[0]?.get('name')?.value;
console.log(firstItemName);
    // let Elementos_del_Inmueble = this.miFormulario.get('items').value.Elementos_del_Inmueble;
    // let tipo_material  = this.miFormulario.value.tipo_material;
    // let Acabados  = this.miFormulario.value.Acabados;
    // let  color = this.miFormulario.value.color;    
    // let Largo  = this.miFormulario.value.Largo;
    // let Ancho  = this.miFormulario.value.Ancho;
    // let Altura  = this.miFormulario.value.Altura;
    //+ Elementos_del_Inmueble + tipo_material + Acabados + Largo + Ancho +  Altura

    
         console.log("Puto dani" +name );

     }








  }

  

 

  

  

