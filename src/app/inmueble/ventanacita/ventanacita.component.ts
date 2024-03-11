import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormGroup, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, Validators,  ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { HttpService } from 'src/app/services/http/http.service';
import { medioC } from 'src/app/services/Interface/Interfaces';
import Swal from 'sweetalert2';
import { informacionAsesorAsignado } from 'src/app/services/Interface/Interfaces';




@Component({
  selector: 'app-ventanacita',
  templateUrl: './ventanacita.component.html',
  styleUrls: ['./ventanacita.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    NgFor

    
  ]

})
export class VentanacitaComponent implements OnInit {
  medioC:medioC[]=[

  ]
  
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;
  terceroFormGroup!:FormGroup;
  isLoggedIn: boolean = false;
  entrada: boolean = false;

  isLinear = false;

  asesor!: informacionAsesorAsignado;
  entradaAsesor : boolean = false;

  

  constructor(
    public dialogRef: MatDialogRef<VentanacitaComponent> ,
    private formBuilder: FormBuilder,private httpService:HttpService,
    private dialog:MatDialog,
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
   
  CerraDialogo(){
   this.dialog.closeAll();

   }



        
   weekendFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Solo permitir días de lunes a viernes (0 a 5)
    return day !== 0 && day !== 6;
  }









  ngOnInit(): void {
    this.isLoggedIn = this.httpService.getGlobalVariable();
    this.firstFormGroup=this.formBuilder.group({
      p_Nombre:['',[Validators.required]],
      p_Email:['',[Validators.required]],
      p_Telefono:['',[Validators.required]],
      p_Id_Medio_Contacto:['',[Validators.required]],
    })

    this.secondFormGroup=this.formBuilder.group({
      p_Mensaje:['',[Validators.required]],

    })

     this.terceroFormGroup=this.formBuilder.group({
      p_Fecha:['',[Validators.required]],
      p_FechaF:['',[Validators.required]],
      p_Hora:['',[Validators.required]],

     })

     this.httpService.informacionAsesor(localStorage.getItem("inmue")).subscribe((data:any)=>{
     
      if(data != "0"){
        this.asesor = data[0];
        this.entradaAsesor = !this.entradaAsesor;
      }
    })
      
     this.terceroFormGroup.get('p_Hora')?.valueChanges.subscribe((hora: string) => {
      if (hora < '06:00' || hora > '21:30') {
        this.entrada = true;
      }else{
        this.entrada = false;
      }
    });

    this.httpService.mostrarContacto().subscribe((data:any)=>{
      this.medioC=data;
    })
  }
  p_Id_Usuario!: string |null;
  open(){
    
    //let p_nom_inmueble = this.tercerFormGroup.value.p_nom_inmu;
    let p_Nombre=this.firstFormGroup.value.p_Nombre;
    let p_Email=this.firstFormGroup.value.p_Email;
    let p_Telefono= this.firstFormGroup.value.p_Telefono;
    let p_Id_Medio_Contacto=this.firstFormGroup.value.p_Id_Medio_Contacto;
    //----------------------------------------------
    let p_Mensaje=this.secondFormGroup.value.p_Mensaje;
    //-------------------------------------------------
    let p_Fecha= this.terceroFormGroup.value.p_Fecha;
  
    let p_Hora= this.terceroFormGroup.value.p_Hora;
    let dia = p_Fecha.getDate();
    let dia1 =  p_Fecha.getDate().toString();;
      if(dia < 10 ){
        dia1 = "0" + dia1;
  }
   let mes = (p_Fecha.getMonth()+1);
   let mes1=(p_Fecha.getMonth()+1).toString();
    if(mes < 10 ){
      mes1="0"+mes1;
    }
  let anio = p_Fecha.getFullYear().toString();
  //et p_Id_Usuario = "12";
  if(this.isLoggedIn){
    this.p_Id_Usuario=localStorage.getItem("Id_Usuario");
  }
  else{
    this.p_Id_Usuario = "0"
  }
 //p_Id_Usuario=localStorage.getItem("Id_Usuario");


  let p_Id_Publicacion=localStorage.getItem("Publicacion");
  

  // let nom_aux= "2023"+"-"+ "09"+ "-" +"09";

 let nom_aux =  anio  +"-"+ mes1  +  "-"+ dia1;

 
   if(this.entrada == false){
    if(this.entradaAsesor){
      this.httpService.AgendarC(nom_aux,p_Hora,p_Email,p_Id_Medio_Contacto,p_Nombre,p_Telefono,p_Mensaje,p_Id_Publicacion,this.asesor.Id_Usuario).subscribe((resp:any)=>{
  
        if (resp==1){
          let mensaje = p_Nombre + " ha agendado una nueva cita el " + nom_aux + " revisa tu calendario"
            // alert("Se Agendo Cita")

            this.httpService.Notis(mensaje, this.asesor.Id_Usuario, localStorage.getItem("inmue"),"1").subscribe((resp: any) =>{
              
            })

            this.httpService.Notis("Han agendado una cita para tu inmueble el "+nom_aux+", pronto tu asesor se comunicara contigo", localStorage.getItem("Publicador"), localStorage.getItem("inmue"),"1").subscribe((resp: any) =>{
              
            })
    
            Swal.fire(
              'Exitosamente!',
              'Se ha registrado una cita en el sistema',
              'success'
              
            )
            this.CerraDialogo();
            
           } else{
           //alert("No se agendo")
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se agendo',
           
          })
           }
    
      }, (err) => {
      
      })
    
    }else{
    this.httpService.AgendarC(nom_aux,p_Hora,p_Email,p_Id_Medio_Contacto,p_Nombre,p_Telefono,p_Mensaje,p_Id_Publicacion,this.p_Id_Usuario).subscribe((resp:any)=>{
    
      if (resp==1){
        let mensaje = p_Nombre + " ha agendado una nueva cita el " + nom_aux + " revisa tu calendario"
          // alert("Se Agendo Cita")
          this.httpService.Notis(mensaje, localStorage.getItem("Publicador"), localStorage.getItem("inmue"),"1").subscribe((resp: any) =>{
            
          })
  
          Swal.fire(
            'Exitosamente!',
            'Se ha registrado una cita en el sistema',
            'success'
            
          )
          this.CerraDialogo();
          
         } else{
         //alert("No se agendo")
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se agendo',
         
        })
         }
  
    }, (err) => {
    
    })
  
    }
   }else{
    
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La hora de la cita debe estar entre las 06:00 y las 21:30.',
     
    })
   }

  }

}
