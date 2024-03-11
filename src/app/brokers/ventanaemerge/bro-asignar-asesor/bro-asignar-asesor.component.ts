import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Asig_Inmu_Asesor } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { __param } from 'tslib';
import { ActivatedRoute } from '@angular/router';

// Alerta

import Swal from 'sweetalert2';


@Component({
  selector: 'app-bro-asignar-asesor',
  templateUrl: './bro-asignar-asesor.component.html',
  styleUrls: ['./bro-asignar-asesor.component.scss']
})
export class BroAsignarAsesorComponent implements OnInit {

  asesores:Asig_Inmu_Asesor[]=[];
  Nombres: any;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;

  id: any;
  correo: any;
  nombreinmu: any;

  constructor(
    private dialog: MatDialog,
    private http:HttpService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.http.infousuInmu(localStorage.getItem("Id_Inmueble")).subscribe((data:any)=>{
      this.id = data[0].Id_Usuario;
      this.correo = data[0].Email;
      this.nombreinmu = data[0].Nombre_Inmueble;
    });
    let Id_Responsable= localStorage.getItem("Id_Usuario");
    this.http.mostrarAsesor(Id_Responsable).subscribe((data:any)=>{
      this.asesores=data;
     
      });
  
  
      
      this.formGeneral = this.formBuilder.group({
        Nombres: ['', [Validators.required]],
      });
  
  }

  guardarasesor() {
    if (this.formGeneral){
      this.Nombres = this.formGeneral.value.Nombres;
      let Id_Usuario = this.formGeneral.value.Id_Asesor
      let Id_Inmueble = localStorage.getItem("Id_Inmueble");
   

     
      
      this.http.insertaAsesores( this.Nombres,Id_Inmueble).subscribe((data: any)=> {
        let nombreasesor;
        this.asesores.forEach((broker: any)=>{
            if(this.Nombres == broker.Id_Asesor){
              nombreasesor = broker.Nombres + " "+ broker.Apellido_Paterno + " "+ broker.Apellido_Materno;
            }
        })
        let mensaje = "El broker: "+ localStorage.getItem("Nombre_Usuario") + ", ha asigando el inmueble: "+ this.nombreinmu + " al asesor: " + nombreasesor;
        if(data == 1){

          this.http.Notis(mensaje, this.id, Id_Inmueble, "2").subscribe((data:any)=>{

          })
        
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
         // alert("Error al insertar");
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
    let Id_Inmueble= localStorage.getItem("Id_Inmueble");
    let valor = localStorage.getItem("mi_valor");
    this.Nombres = this.formGeneral.value.Nombres;
   
  
    if (valor=="1"){
  
      this.http.actualiza_asig_asesor(this.Nombres,Id_Inmueble).subscribe((resp:any)=> {
        let nombreasesor;
        this.asesores.forEach((broker: any)=>{
            if(this.Nombres == broker.Id_Asesor){
              nombreasesor = broker.Nombres + " "+ broker.Apellido_Paterno + " "+ broker.Apellido_Materno;
            }
        })
        if(resp == 1){

          
        let mensaje = "El broker: "+ localStorage.getItem("Nombre_Usuario") + ", ha reasigando el inmueble: "+ this.nombreinmu + " al asesor: " + nombreasesor;
        this.http.Notis(mensaje, this.id, Id_Inmueble, "2").subscribe((data:any)=>{

        })
          Swal.fire({
            title: "Exito!",
            text: "El Asesor fue asignado",
            icon: "success"
          });
          this.closeDialog();
    
        }else{
         // alert("Error al actualizar");
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
