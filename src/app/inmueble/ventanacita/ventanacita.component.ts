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



  isLinear = false;

  

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



        










  ngOnInit(): void {
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


    this.httpService.mostrarContacto().subscribe((data:any)=>{
      this.medioC=data;
    })
  }
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

  let p_Id_Usuario=localStorage.getItem("Id_Usuario");
  let p_Id_Publicacion=localStorage.getItem("Publicacion");
  console.log(p_Id_Publicacion);

  // let nom_aux= "2023"+"-"+ "09"+ "-" +"09";

 let nom_aux =  anio  +"-"+ mes1  +  "-"+ dia1;
   
  // console.log(nom_aux);
    //     console.log("Nombre: "+p_Nombre+"Email: "+p_Email+"Telefono: "+p_Telefono+"Contacto: "+p_Id_Medio_Contacto
    // +"Mensaje: "+p_Mensaje+"Fecha: "+nom_aux+"Hora: "+p_Hora+ "id_Uduario: "+ p_Id_Usuario + "id_Pub: "+p_Id_Publicacion);
  this.httpService.AgendarC(nom_aux,p_Hora,p_Email,p_Id_Medio_Contacto,p_Nombre,p_Telefono,p_Mensaje,p_Id_Publicacion,p_Id_Usuario).subscribe((resp:any)=>{
    console.log("Respuesta del servicio:", resp);
    if (resp==1){
      let mensaje = p_Nombre + " ha agendado una nueva cita el " + nom_aux + " revisa tu calendario"
        // alert("Se Agendo Cita")
        this.httpService.Notis(mensaje, localStorage.getItem("Publicador")).subscribe((resp: any) =>{
          
        })

        Swal.fire(
          'Exitosamente!',
          'Se ha registrado una cita en el sistema',
          'success'
          
        )

        
       } else{
       alert("No se agendo")
       }

  }, (err) => {
    console.log(err);
  })

  }

}
