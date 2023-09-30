import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatStepperModule} from '@angular/material/stepper';
  import {MatButtonModule} from '@angular/material/button';
  import { FormGroup } from '@angular/forms';
  import {MatSelectModule} from '@angular/material/select';
  import {MatRadioModule} from '@angular/material/radio';
  import { Inmuebles,Estados, Municipios, Asentamiento } from '../services/Interface/Interfaces';
  import { HttpService } from '../services/http/http.service';
  import { NgFor } from '@angular/common';


  // esto se tomo de ejemplo 




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
    MatInputModule, MatSelectModule,MatRadioModule,NgFor
  ],
  
})
export class InmuebleComponent implements OnInit {
  fileName: string ="";
  isLinear = false;

  inmuebles: Inmuebles[] =[];
  inmueble!: Inmuebles;
  estados: Estados[] =[];
  estado!: Estados;
  municipios: Municipios[] =[];
  municipio!: Municipios;

  asentamientos: Asentamiento[] =[];
  asentamiento!: Asentamiento;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  ngOnInit(){
    this.obtenerDatosInmuebles();
    
  
    this.firstFormGroup = this.formBuilder.group({
     pId_Tipo_Inmueble: ['',[Validators.required]]
    })
    this.secondFormGroup = this.formBuilder.group({
      pId_estado: ['',[Validators.required]],
      pId_municipio: ['',[Validators.required]],
      pId_asentamiento: ['',[Validators.required]]
     })
  }

  obtenerDatosInmuebles(){
    this.httpService.tipoInmueble().subscribe((resp:any)=>{
     if(resp !== 201){
      
       this.inmueble = resp[0].id_Tipo_Inmueble;
       this.inmuebles = resp;
     }
    },(err)=>{
     console.log(err);
    })
   }

   guardar(){
    console.log(this.firstFormGroup.value.pId_Tipo_Inmueble);
    this.httpService.obtenerEstado().subscribe((resp:any)=> {
      if(resp !== 201){
        this.estado = resp[0].id_Estado;
        this.estados = resp;
      }
     },(err)=>{
      console.log(err);
     })

     
    
   }

updateM(){
  console.log(this.secondFormGroup.value.pId_estado);
  this.httpService.obtenerMunicipio(this.secondFormGroup.value.pId_estado).subscribe((resp:any)=> {
    if(resp !== 201){
      this.municipio = resp[0].id_Municipio;
      this.municipios = resp;
    }
   },(err)=>{
    console.log(err);
   })
  
 
}

updateA(){
  
  this.httpService.obtenerAsentamiento(this.secondFormGroup.value.pId_estado,
    this.secondFormGroup.value.pId_municipio).subscribe((resp:any)=> {
    if(resp !== 201){
      this.asentamiento = resp[0].id_Asentamiento;
      this.asentamientos = resp;
    }
   },(err)=>{
    console.log(err);
   })
  
 
}



  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      // Aquí puedes realizar acciones adicionales con el archivo seleccionado, como enviarlo a un servidor.
    } else {
      this.fileName = "";
    }



  }

       
 






  

  // firstFormGroup = this.formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this.formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
 
 

  constructor(private formBuilder: FormBuilder
    , private httpService: HttpService) {}





 

}
