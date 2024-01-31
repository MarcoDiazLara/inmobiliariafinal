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

  constructor(
    private dialog: MatDialog,
    private http: HttpService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private globalservice: GlobalService,
    

  ) { }

  ngOnInit(): void {
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
        if (data == 1) {
          // Swal.fire({
          //   position: 'top-end',
          //   icon: 'success',
          //   title: 'El Broker fue asignado',
          //   showConfirmButton: false,
          //   timer: 1500
          //})

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
        
        if (resp == 1) {
        // let tem_Usuarios: any=this.globalservice.usuarios$.value || []; 
        // let index = tem_Usuarios.findIndex((usu:any)=>usu.Id_Inmueble == resp.Id_Inmueble);
      
        // if (index != -1)
        // {
        // //  tem_Usuarios[index].Id_Inmueble =
        // this.globalservice.usuarios$.next(tem_Usuarios);
        // }
      
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

