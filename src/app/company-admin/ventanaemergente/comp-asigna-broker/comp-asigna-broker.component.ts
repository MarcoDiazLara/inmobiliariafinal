import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { asignacionBro } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global/global.service';
import { ActivatedRoute } from '@angular/router';

// Alerta

import Swal from 'sweetalert2';

@Component({
  selector: 'app-comp-asigna-broker',
  templateUrl: './comp-asigna-broker.component.html',
  styleUrls: ['./comp-asigna-broker.component.scss']
})


export class CompAsignaBrokerComponent implements OnInit {

  brokers: asignacionBro[] = [];
  Nombres: any;
  formGeneral!: FormGroup;
  loading = false;
  hide2 = true;
  id: any;
  correo: any;
  nombreinmu: any;

  constructor(
    private dialog: MatDialog,
    private http: HttpService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private globalservice: GlobalService,
    

  ) { }

  ngOnInit(): void {

    this.http.infousuInmu(localStorage.getItem("Id_Inmueble")).subscribe((data:any)=>{
      this.id = data[0].Id_Usuario;
      this.correo = data[0].Email;
      this.nombreinmu = data[0].Nombre_Inmueble;
    });
    let Id_Socio = localStorage.getItem("Id_Socio");
    this.http.mostrarBroker(Id_Socio).subscribe((data: any) => {
      this.brokers = data;
      console.log(this.brokers);
    });



    this.formGeneral = this.formBuilder.group({
      Nombres: ['', [Validators.required]],
    });

  }
  ggg(){
    console.log(this.formGeneral.value.Nombres)
  }
  guardarasesor() {
    this.http.openasesor(); 
    if (this.formGeneral) {
      this.Nombres = this.formGeneral.value.Nombres;
      
      let Id_Inmueble = localStorage.getItem("Id_Inmueble");
      console.log(Id_Inmueble);



      this.http.insertarusuarioasignacion( this.Nombres,Id_Inmueble).subscribe((data: any) => {
        let nombrebroker;
        this.brokers.forEach((broker: any)=>{
            if(this.Nombres == broker.Id_Usuario){
              nombrebroker = broker.Nombres + " "+ broker.Apellido_Paterno + " "+ broker.Apellido_Materno;
            }
        })
        if (data == 1) { 
          let mensaje = "El inmueble :"+ this.nombreinmu + " ha sido asignado al broker: "  + nombrebroker;
          this.http.Notis(mensaje, this.Nombres, Id_Inmueble, "2").subscribe((data:any)=>{

          })
          this.http.Notis(mensaje,this.id, Id_Inmueble, "4").subscribe((data:any)=>{

          })

          Swal.fire({
            title: "Exito!",
            text: "El Broker fue asignado",
            icon: "success"
          });

          this.closeDialog();
        }
        else {
          alert("Error al insertar");
        }
      });
    
      this.http.closeDialog(); 


    }
  }



  prueba() {
    this.http.openasesor(); 
    let Id_Inmueble = localStorage.getItem("Id_Inmueble");
    let valor = localStorage.getItem("mi_valor");
    this.Nombres = this.formGeneral.value.Nombres;


    if (valor == "1") {
        
      this.http.updateUsuarioReasignacion(Id_Inmueble, this.Nombres).subscribe((resp: any) => {
        let nombrebroker;
        this.brokers.forEach((broker: any)=>{
            if(this.Nombres == broker.Id_Usuario){
              nombrebroker = broker.Nombres + " "+ broker.Apellido_Paterno + " "+ broker.Apellido_Materno;
            }
        })
        
        if (resp == 1) {
          let mensaje = "El inmueble :"+ this.nombreinmu + " ha sido reasignado al broker: "  + nombrebroker;
          this.http.Notis(mensaje, this.Nombres, Id_Inmueble, "2").subscribe((data:any)=>{

          })
          this.http.Notis(mensaje,this.id, Id_Inmueble, "4").subscribe((data:any)=>{

          })
      
          Swal.fire({
            title: "Exito!",
            text: "El Broker fue actualizado",
            icon: "success"
          });

          this.closeDialog();
          // window.location.reload();
          this.http.closeDialog(); 
        } else {
          alert("Error al actualizar");
        }
      });


    } else if (valor == "2") {

      this.guardarasesor();

    }
  }


  closeDialog() {
    this.dialog.closeAll();
  }

}

