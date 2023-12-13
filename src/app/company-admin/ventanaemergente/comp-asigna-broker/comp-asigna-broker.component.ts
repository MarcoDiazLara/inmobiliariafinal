import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { asignacionBro } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Alerta

import Swal from 'sweetalert2';

@Component({
  selector: 'app-comp-asigna-broker',
  templateUrl: './comp-asigna-broker.component.html',
  styleUrls: ['./comp-asigna-broker.component.scss']
})


export class CompAsignaBrokerComponent implements OnInit {

  brokers:asignacionBro[]=[];
  Nombres: any;

  

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
    this.http.mostrarBroker(Id_Socio).subscribe((data:any)=>{
      this.brokers=data;
      console.log(this.brokers);
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

 
  
  prueba(){
    let Id_Publicacion = localStorage.getItem("id_publicacion");
    let valor = localStorage.getItem("mi_valor");
    this.Nombres = this.formGeneral.value.Nombres;
   
  
    if (valor=="1"){
  
      this.http.updateReasignaAsesor(Id_Publicacion,this.Nombres ).subscribe((resp:any)=> {
        if(resp == 1){
  
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El broker fue reasignado',
            showConfirmButton: false,
            timer: 1500
          })
          this.closeDialog();
    
        }else{
          alert("Error al actualizar");
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

