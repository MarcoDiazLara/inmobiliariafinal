import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.scss']
})
export class EstatusComponent implements OnInit {
  formulario!: FormGroup;
  constructor( private formBuilder: FormBuilder,private httpService: HttpService,private dialog:MatDialog,) { 
    this.formulario = this.formBuilder.group({
      estatus: [''] // Aquí se inicializa el control del mat-select
    });
  }

  ngOnInit(): void {
  }
  EstatusActualizar(){
    this.httpService.EstausCompany(localStorage.getItem("Id_Usuxd"),this.formulario.value.estatus).subscribe((data:any)=>{

      Swal.fire({
        title: "Fue un exito",
        // text: "You clicked the button!",
        icon: "success"
      });
      // alert("Se cambio de estatus");
    })

this.CerraDialogo();
    
  }

  CerraDialogo(){
    this.dialog.closeAll();
 
    }

}
