import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { asignacionA } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { __param } from 'tslib';
import { ActivatedRoute } from '@angular/router';


// Alerta

import Swal from 'sweetalert2';



@Component({
  selector: 'app-asignasrasesor',
  templateUrl: './asignasrasesor.component.html',
  styleUrls: ['./asignasrasesor.component.scss']
})
export class AsignasrasesorComponent implements OnInit {


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
    this.http.mostrarAsesor().subscribe((data:any)=>{
    this.asesores=data;
    console.log(this.asesores);
    });


    
    this.formGeneral = this.formBuilder.group({
      Nombres: ['', [Validators.required]],
    });

    
  }

  guardarasesor() {
    if (this.formGeneral){
      this.Nombres = this.formGeneral.value.Nombres;
      let Id_Publicacion = localStorage.getItem("id_publicacion");
      console.log(Id_Publicacion);

     
      
      this.http.insertarasesor( Id_Publicacion,this.Nombres).subscribe((data: any)=> {
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
          alert("Error al insertar");
        }
      });



   }


}

updateReasignaAsesor(){
  // this.http.updateReasignaAsesor( ).subscribe((resp:any)=> {
  //   if(resp !== 201){
  //     this.asesores = resp[0].Id_Usuario;
  //     this.asesores = resp;
  //   }
  //  },(err)=>{
  //   console.log(err);
  //  })


}


prueba(){
  let Id_Publicacion = localStorage.getItem("id_publicacion");
  let asesor = localStorage.getItem("Asesor");
  this.Nombres = this.formGeneral.value.Nombres;
 

  if (asesor!=null){

    this.http.updateReasignaAsesor(Id_Publicacion,this.Nombres ).subscribe((resp:any)=> {
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
        alert("Error al actualizar");
      }
  });
    
 
}else{

  this.guardarasesor()
  
}
}


  closeDialog() {
    this.dialog.closeAll();
  }


}
