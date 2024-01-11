import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-metododepago',
  templateUrl: './metododepago.component.html',
  styleUrls: ['./metododepago.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class MetododepagoComponent implements OnInit {
  fechaActual: Date;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder,private dialog: MatDialog,private httpService: HttpService) { 
    this.fechaActual = new Date();
  }
     
     plan!:string|null;
     nombreplan!:string;
     precio!:string;

  ngOnInit(): void {
   
    setInterval(() => this.actualizarFecha(), 60000);
    this.plan=localStorage.getItem("tipodeplan");
    if(this.plan=="1"){
      this.nombreplan="Plan Basico";
      this.precio="$999.00"
    }
     if(this.plan=="2"){
      this.nombreplan="Plan Intermedio";
      this.precio="$1499.00"
     }
     else{
      if(this.plan=="3"){
        this.nombreplan="Plan premiums";
        this.precio="$2999.00"

      }
     }
  }

  Comprar(){
    let date = new Date();
    let dia = date.getDate();
    let dia1 = date.getDate().toString();;
    if(dia < 10 ){
      dia1 = "0" + dia1;
    }
    let mes = (date.getMonth()+1);
    let mes1 = (date.getMonth()+1).toString();
    if(mes < 10){
      mes1 = "0"+mes1;
    }
    let anio = date.getFullYear().toString();
    let nom_aux =  anio + "-"+ mes1 +"-"+ dia1;
    this.httpService.compraPlanes(localStorage.getItem("Id_Usuario"),localStorage.getItem("tipodeplan"),"Completado", "Activo", nom_aux).subscribe((data : any)=>{
      if(data == 1){
        this.httpService.obtenerInfoUsuario(localStorage.getItem("Id_Usuario")).subscribe((data1:any)=>{
          this.httpService.EnviarCorreo(data1.Email, "Gracias por contratar un plan con nosotros, disfruta de tus nuevos beneficios, con amor InmobeWise").subscribe((data)=>{

          })
        })
      this.mostrarAlerta();
      }
    })
        
  }
  mostrarAlerta() {
    Swal.fire(
      'Exitosamente!',
      'Se ha registrado tu compra en el sistema ',
      'success'
      
    )
    this.CerraDialogo();
  }

  CerraDialogo(){
    this.dialog.closeAll();
 
    }
    actualizarFecha() {
      this.fechaActual = new Date();
    }

 
}
