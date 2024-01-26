import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService} from 'src/app/services/http/http.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { EstatusInmueble } from 'src/app/services/Interface/Interfaces';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-subirpublicacion',
  templateUrl: './subirpublicacion.component.html',
  styleUrls: ['./subirpublicacion.component.scss']
})
export class SubirpublicacionComponent implements OnInit {
  opciones = ['Opción 1', 'Opción 2', 'Opción 3'];
  opcionSeleccionada: string = '';
  EstatusInmuebles: EstatusInmueble[] = [];
  EstatusInmueble!: EstatusInmueble;

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private dialog: MatDialog ) { }
  firstFormGroup!: FormGroup;

  ngOnInit(): void {
    this.ObtenerEstatusInmueble();
    this.firstFormGroup = this.formBuilder.group({
     Precio_Maximo: ['', [Validators.required]],
      Precio_Minimo: ['', [Validators.required]],
      Precio_Final: ['', [Validators.required]],
      pId_Estatus_Inmueble: ['', [Validators.required]],
      pId_Tipo_Publicacion: ['', [Validators.required]]
      

    })
  }

  
  ObtenerEstatusInmueble() {
    this.httpService.estatusPublicacionInmueble().subscribe((resp: any) => {
      if (resp !== 201) {
        this.EstatusInmueble = resp[0].Id_Estatus_Publicacion;
        this.EstatusInmuebles = resp;
      }
    }, (err) => {
      console.log(err);
    })
  }

  CerraDialogo() {
    this.dialog.closeAll();

  }
}
