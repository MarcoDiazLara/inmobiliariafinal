import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import { ActulizarInmueble, EstatusInmueble } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';
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
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  // -----------------------------------------
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private httpService: HttpService, private dialog: MatDialog, private httpClient: HttpClient) { }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  options!: FormGroup;

  ngOnInit(): void {
    this.ObtenerEstatusInmueble();
   

    this.options = this._formBuilder.group({
      Nombre_de_Inmueble: ['', [Validators.required]],
      Descripcion: ['', [Validators.maxLength(300)]],
      // Descripcion: ['', [Validators.required]],
      Calle: ['', [Validators.required]],
      No_Interior: ['', [Validators.required]],
      No_Exterior: ['', [Validators.required]],
      Terreno: ['', [Validators.required]],
      Construccion: ['', [Validators.required]],
      Recamaras: ['', [Validators.required]],
      Banos: ['', [Validators.required]],
      Cocina_Integral: ['', [Validators.required]],
      Numero_Pisos: ['', [Validators.required]],
      Antiguedad: ['', [Validators.required]],
      Acabados: ['', [Validators.required]],
      Alberca: ['', [Validators.required]],
      Jardin: ['', [Validators.required]],
      GYM: ['', [Validators.required]],
      RoofGarden: ['', [Validators.required]],
      Estacionamiento: ['', [Validators.required]],
      Precio_Maximo: ['', [Validators.required]],
      Precio_Minimo: ['', [Validators.required]],
      Precio_Final: ['', [Validators.required]],
      pId_Estatus_Inmueble: ['', [Validators.required]],
      pId_Tipo_Publicacion: ['', [Validators.required]],
      img: ['',[Validators.required]]
    });
  }
  datos!: ActulizarInmueble;
 

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

  Actualizar(){
    let date = new Date();
    this.subir_imagenes();
    let prec_min = this.options.value.Precio_Minimo;
    let prec_max = this.options.value.Precio_Maximo;
    let prec_final = this.options.value.Precio_Final;
    let estatus = this.options.value.pId_Estatus_Inmueble;
    let tipoPubli = this.options.value.pId_Tipo_Publicacion;
    let id_inmueble = localStorage.getItem("idAux");
    let id_Usuario = localStorage.getItem("Id_Usuario");
    
    let dia = date.getDate();
    let dia1 = date.getDate().toString();;
    if (dia < 10) {
      dia1 = "0" + dia1;
    }
    let mes = (date.getMonth() + 1);
    let mes1 = (date.getMonth() + 1).toString();
    if (mes < 10) {
      mes1 = "0" + mes1;
    }
    let anio = date.getFullYear().toString();
    let nom_aux = anio + mes1 + dia1;


    let p_pic_1 = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + this.selectedImages[0].name;
    let p_pic_2 = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + this.selectedImages[1].name;
    let p_pic_3 = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + this.selectedImages[2].name;
    let p_pic_4 = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + this.selectedImages[3].name;
    let p_pic_5 = "https://inmobiliaria.arvispace.com/imagenes/" + nom_aux + this.selectedImages[4].name;

    this.httpService.actualizarimagenes(p_pic_1,p_pic_2,p_pic_3,p_pic_4,p_pic_5,id_inmueble).subscribe((data:any)=>{
      
    })
    this.httpService.publicarinmueble(prec_min,prec_max,prec_final,id_Usuario,id_inmueble,tipoPubli,estatus).subscribe((data:any)=>{
      Swal.fire({
        title: "Felicidades!",
        text: "Se ha actualizado tu inmueble!",
        icon: "success"
      });
    })
    
  }
  selectedImages!: FileList;
 
  onFileChange(event: any): void {
    this.selectedImages = event.target.files;
  }


  subir_imagenes(): void {
    const formData = new FormData();
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images[]', this.selectedImages[i]);
    }

    this.httpClient.post('https://inmobiliaria.arvispace.com/servicios/subirArchivo.php', formData)
      .subscribe((response) => {
        console.log(response);
      });
  }

}
