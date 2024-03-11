import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { asignacionA } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Alerta

import Swal from 'sweetalert2';


@Component({
  selector: 'app-comp-asignar-asesor',
  templateUrl: './comp-asignar-asesor.component.html',
  styleUrls: ['./comp-asignar-asesor.component.scss']
})
export class CompAsignarAsesorComponent implements OnInit {

  asesores:asignacionA[]=[];
  Nombres: any;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;

  constructor(
    private dialog: MatDialog,
    private http:HttpService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let Id_Socio = localStorage.getItem("Id_Socio");
    this.http.mostrarAsesor(Id_Socio).subscribe((data:any)=>{
      this.asesores=data;
     
      });
  
  
      
      this.formGeneral = this.formBuilder.group({
        Nombres: ['', [Validators.required]],
      });
  
  }
  guardarasesor() {
    if (this.formGeneral){
      this.Nombres = this.formGeneral.value.Nombres;
      let Id_Publicacion = localStorage.getItem("id_publicacion");
      

     
      
      this.http.insertarusuarioasignacion( Id_Publicacion,this.Nombres).subscribe((data: any)=> {
        if(data == 1){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El asesor fue asignado',
            showConfirmButton: false,
            timer: 1500
          })
    
          
          this.closeDialog();
        }
        else{
          //("Error al insertar");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al insertar',
           
          })
        }
      });



   }
  }

 
  
  prueba(){
    let Id_Publicacion = localStorage.getItem("id_publicacion");
    //let asesor = localStorage.getItem("Asesor");
    let valor = localStorage.getItem("mi_valor");
    this.Nombres = this.formGeneral.value.Nombres;
   
  
    if (valor=="1"){
  
      this.http.updateUsuarioReasignacion(Id_Publicacion,this.Nombres ).subscribe((resp:any)=> {
        if(resp == 1){
  
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El asesor fue reasignado',
            showConfirmButton: false,
            timer: 1500
          })
          this.closeDialog();
    
        }else{
          //alert("Error al actualizar");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al actualizar',
           
          })
        }
    });
      
   
  }else if(valor=="2"){
  
    this.guardarasesor();
    
  }
  }
  
  
    closeDialog() {
      this.dialog.closeAll();
    }

}
