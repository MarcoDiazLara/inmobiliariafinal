import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { asignacionBro } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// Alerta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comp-broker',
  templateUrl: './comp-broker.component.html',
  styleUrls: ['./comp-broker.component.scss']
})


export class CompBrokerComponent implements OnInit {

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
    if (this.formGeneral) {
      this.Nombres = this.formGeneral.value.Nombres;
      let Asesor = localStorage.getItem("Agente");
      let Responsable = localStorage.getItem("Broker")
      let Socio = localStorage.getItem("Id_Socio")
      console.log(Asesor);



      this.http.insertaResponsable(Asesor,this.Nombres,Socio).subscribe((data: any) => {
        if (data == 1) {
      
          Swal.fire({
            title: "Exitosamente!",
            text: "El Broker fue asignado",
            icon: "success"
          });


          this.closeDialog();
        }
        else {
          alert("Error al insertar");
        }
      });



    }
  }


  prueba() {
    let valor = localStorage.getItem("mi_valor");
    this.Nombres = this.formGeneral.value.Nombres;
    let Asesor = localStorage.getItem("Agente");
      let Responsable = localStorage.getItem("Broker")
      let Socio = localStorage.getItem("Id_Socio")


    if (valor == "1") {

      this.http.actualizarResponsable(Asesor,this.Nombres,Socio).subscribe((resp: any) => {
        if (resp == 1) {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El broker fue reasignado',
            showConfirmButton: false,
            timer: 1500
          })
          this.closeDialog();

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
