import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { Inmuebles, Estados, Municipios, Asentamiento } from '../services/Interface/Interfaces';
import { HttpService } from '../services/http/http.service';
import { NgFor } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WebModule } from '../web/web.module';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GoogleMapsModule } from '@angular/google-maps';
import { MetododepagoComponent } from 'src/app/metododepago/metododepago.component';
import { MatDialog } from '@angular/material/dialog';



interface Food {
  value: string;
  viewValue: string;
}

interface coordenadas{
  estado: string;
  latitud: string;
  longitud: string;
}

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule, MatRadioModule, NgFor,
    MatDividerModule,
    WebModule,
    GoogleMapsModule,
    CommonModule


  ],


})
export class InmuebleComponent implements OnInit {
  // Define un FormControl con validadores para números

  foods: Food[] = [
    { value: '0', viewValue: '0' },
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
  ];

  coordenadas: coordenadas[] = [
    {estado:"1", latitud: "21.88804073871199",longitud:"-102.30993101620344"},
    {estado:"2", latitud: "30.71212132055079",longitud:"-115.48332409858078"},
    {estado:"3", latitud: "25.145419833079753",longitud:"-111.61833362855981"},
    {estado:"4", latitud: "19.163182204037433",longitud:"-90.19291419689353"},
    {estado:"5", latitud: "27.41198025211732",longitud:"-101.57552686274903"},
    {estado:"6", latitud: "27.41198025211732",longitud:"-101.57552686274903"},
    {estado:"7", latitud: "16.842767216498036",longitud:"-92.98906236379204"},
    {estado:"8", latitud: "28.969293722730836",longitud:"-106.08799791066491"},
    {estado:"9", latitud: "19.406162088343624",longitud:"-99.154363031929071"},
    {estado:"10", latitud: "24.506405793837946",longitud:"-104.72296157289905"},
    {estado:"11", latitud: "20.82618210504494",longitud:"-100.98154438412429"},
    {estado:"12", latitud: "17.56633536168782",longitud:"-99.68090820312501"},
    {estado:"13", latitud: "20.530244843859304",longitud:"-99.12622709663654"},
    {estado:"14", latitud: "19.9812989330851",longitud:"-104.01743249488544"},
    {estado:"15", latitud: "19.540187868190788",longitud:"-99.86360758219998"},
    {estado:"16", latitud: "19.154515489688436",longitud:"-101.31355428847229"},
    {estado:"17", latitud: "18.750810846967987",longitud:"-99.10611263969679"},
    {estado:"18", latitud: "22.0607583176246",longitud:"-105.1835626031284"},
    {estado:"19", latitud: "26.195481652248198",longitud:"-99.8697957176187"},
    {estado:"20", latitud: "16.989382",longitud:"-97.051033"},
    {estado:"21", latitud: "18.973767",longitud:"-98.030326"},
    {estado:"22", latitud: "20.634213",longitud:"-100.347803"},
    {estado:"23", latitud:"20.043071",longitud:"-87.781958"},
    {estado:"24", latitud: "21.995158",longitud:"-100.216968"},
    {estado:"25", latitud: "24.847133",longitud:"-107.547147"},
    {estado:"26", latitud: "29.464274",longitud:"-109.570278"},
    {estado:"27", latitud: "18.193643",longitud:"-92.471219"},
    {estado:"28", latitud: "24.605024",longitud:"-98.328898"},
    {estado:"29", latitud: "19.512960",longitud:"-98.215865"},
    {estado:"30", latitud: "18.660055",longitud:"-96.091116"},
    {estado:"31", latitud: "20.657859",longitud:"-89.129107"},
    {estado:"32", latitud: "23.446671",longitud:"-102.807200"}
  ];


  constructor(private formBuilder: FormBuilder, private dialog: MatDialog
    , private httpService: HttpService,
    private httpClient: HttpClient,
    private router: Router) { }


  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?\d*(\.\d+)?$/) // Acepta números enteros y decimales
  ]);

  imageForm!: FormGroup;
  selectedImages!: FileList;


  public center = { lat: 20, lng: -98 };


  fileName: string = "";
  isLinear = false;

  cheks: any[] = [];

  inmuebles: Inmuebles[] = [];
  inmueble!: Inmuebles;
  estados: Estados[] = [];
  estado!: Estados;
  municipios: Municipios[] = [];
  municipio!: Municipios;

  asentamientos: Asentamiento[] = [];
  asentamiento!: Asentamiento;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  tercerFormGroup!: FormGroup;
  bandera: number = 0;
  latitud: number = 0.0000;
  longitud: number = 0.0000;
  p_ubi_maps: string = "0.00000,0.00000";
  plan !: any;
  zoom: any;
  

  ngOnInit() {

    this.obtenerDatosInmuebles();
    this.guardar();
    this.plan = localStorage.getItem("Id_Tipo_Plan");



    //Imagenes
    this.imageForm = this.formBuilder.group({
      images: [''],
    });

    this.firstFormGroup = this.formBuilder.group({
      pId_Tipo_Inmueble: ['', [Validators.required]],
      pId_Tipo_Publicacion: ['', [Validators.required]]
    })
    this.secondFormGroup = this.formBuilder.group({
      pId_estado: ['', [Validators.required]],
      pId_municipio: ['', [Validators.required]],
      pId_asentamiento: ['', [Validators.required]],
      p_calle: ['', [Validators.required]],
      p_prec_min: ['', [Validators.required]],
      p_prec_max: ['', [Validators.required]],
      p_prec_final: ['', [Validators.required]]
    })
    this.tercerFormGroup = this.formBuilder.group({
      p_nom_inmu: ['', [Validators.required]],
      p_desc: ['', [Validators.maxLength(300)]],
      // p_desc: ['', [Validators.required]],
      p_num_int: ['', [Validators.required]],
      p_num_ext: ['', [Validators.required]],
      p_terreno: ['', [Validators.required]],
      p_constru: ['', [Validators.required]],
      p_num_recamaras: ['', [Validators.required]],
      p_banos: ['', [Validators.required]],
      p_pisos: ['', [Validators.required]],
      p_gym: ['', [Validators.required]],
      p_esta: ['', [Validators.required]],
      p_jardin: ['', [Validators.required]],
      p_cocina: ['', [Validators.required]],
      p_alberca: ['', [Validators.required]],
      p_roof: ['', [Validators.required]],
      p_anti: ['', [Validators.required]],
      p_acabados: ['', [Validators.maxLength(10)]]
    })

  }
 

  obtenerDatosInmuebles() {
    this.httpService.tipoInmueble().subscribe((resp: any) => {
      if (resp !== 201) {

        this.inmueble = resp[0].id_Tipo_Inmueble;
        this.inmuebles = resp;
      }
    }, (err) => {
      console.log(err);
    })
  }

  guardar() { // refiere al estado
  
    this.httpService.obtenerEstado().subscribe((resp: any) => {
      if (resp !== 201) {
        this.estado = resp[0].id_Estado;
        this.estados = resp;
      }
    }, (err) => {
      console.log(err);
    })



  }

  ubicarEstado(){
    let xd: any;
  
    this.coordenadas.forEach(i =>{
        if(i.estado == this.secondFormGroup.value.pId_estado){
          xd = i;
        }
    })
    
    
    let lat = Number (xd.latitud);
    let lng = Number (xd.longitud);
    
      const newMarker = {
        position: { lat, lng },
        label: 'Inmueble',
      };

      // Borra el marcador activo anterior, si existe
      if (this.activeMarker) {
        this.activeMarker = null;
      }

      this.zoom = 7;  // Puedes ajustar este valor según tus necesidades.
    this.center = newMarker.position;
      
  }

  updateM() {
    this.httpService.obtenerMunicipio(this.secondFormGroup.value.pId_estado).subscribe((resp: any) => {
      if (resp !== 201) {
        this.municipio = resp[0].id_Municipio;
        this.municipios = resp;
      }
    }, (err) => {
      console.log(err);
    })
  }

  updateA() {
    this.httpService.obtenerAsentamiento(this.secondFormGroup.value.pId_estado,
      this.secondFormGroup.value.pId_municipio).subscribe((resp: any) => {
        if (resp !== 201) {
          this.asentamiento = resp[0].id_Asentamiento;
          this.asentamientos = resp;
        }
      }, (err) => {
        console.log(err);
      })


  }


  xd() {
    console.log(this.tercerFormGroup.value.p_gym);
  }

  obtenerLocalizacion() {
    if (!navigator.geolocation) {
      //alert('Geolocalización No Compatible');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Geolocalización No Compatible',

      })
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log('lat: ', position.coords.latitude, ' long: ', position.coords.longitude);
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      let lat = Number (this.latitud);
      let lng = Number (this.longitud);
      this.bandera = 1;
      const newMarker = {
        position: { lat, lng },
        label: 'Inmueble',
      };

      // Borra el marcador activo anterior, si existe
      if (this.activeMarker) {
        this.activeMarker = null;
      }

      // Establece el nuevo marcador como activo
      this.activeMarker = newMarker;
      Swal.fire(
        'Exitosamente!',
        'Haz sido localizado',
        'success'

      )
    });
  }




  subirInmueble() {
    if(this.selectedImages.length == 5){
    let date = new Date();

    this.subir_imagenes();
    let p_nom_inmueble = this.tercerFormGroup.value.p_nom_inmu;
    let p_desc_inmueble = this.tercerFormGroup.value.p_desc;
    let p_calle1 = this.secondFormGroup.value.p_calle;
    let p_num_ext1 = this.tercerFormGroup.value.p_num_ext;
    let p_num_int1 = this.tercerFormGroup.value.p_num_int;
    let p_terreno1 = this.tercerFormGroup.value.p_terreno;
    let p_construccion = this.tercerFormGroup.value.p_constru;
    let p_recamara = this.tercerFormGroup.value.p_num_recamaras;
    let p_bano = this.tercerFormGroup.value.p_banos;
    let p_cocina1 = this.tercerFormGroup.value.p_cocina;
    let p_num_pisos = this.tercerFormGroup.value.p_pisos;
    let p_antiguedad = this.tercerFormGroup.value.p_anti;
    let p_acabados1 = this.tercerFormGroup.value.p_acabados;
    let p_alberca1 = this.tercerFormGroup.value.p_alberca;
    let p_jardin1 = this.tercerFormGroup.value.p_jardin;
    let p_gym1 = this.tercerFormGroup.value.p_gym;
    let p_roof = this.tercerFormGroup.value.p_roof;
    let p_estacionamiento = this.tercerFormGroup.value.p_esta;



    this.p_ubi_maps = this.latitud + "," + this.longitud;




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

    let aux = this.generateRandomCombination();


    let p_360 = aux;
    let p_video = "video 1";
    let p_id_asentamiento = this.secondFormGroup.value.pId_asentamiento;
    let p_id_tipo_inmueble = this.firstFormGroup.value.pId_Tipo_Inmueble;
    let p_update = localStorage.getItem("Id_Usuario");
    let p_prec_min1 = this.secondFormGroup.value.p_prec_min;
    let p_prec_max1 = this.secondFormGroup.value.p_prec_max;
    let p_prec_final1 = this.secondFormGroup.value.p_prec_final;
    let p_Id_Tipo = this.firstFormGroup.value.pId_Tipo_Publicacion;





    this.httpService.registrarInmuebles(p_nom_inmueble, p_desc_inmueble, p_calle1, p_num_ext1, p_num_int1, p_terreno1,
      p_construccion, p_recamara, p_bano, p_cocina1, p_num_pisos, p_antiguedad, p_acabados1, p_alberca1, p_jardin1, p_gym1,
      p_roof, p_estacionamiento, p_pic_1, p_pic_2, p_pic_3, p_pic_4, p_pic_5, p_360, p_video, p_id_asentamiento, p_id_tipo_inmueble, p_update, p_prec_min1, p_prec_max1,
      p_prec_final1, p_Id_Tipo, this.latitud, this.longitud).subscribe((data: any) => {
        if (data == 1) {

          Swal.fire(
            'Exitosamente!',
            'Se ha registrado tu inmueble exitosamente, un encargado pronto validara tu inmueble y sera publico',
            'success'

          )
          // alert("Se subio el inmueble");
          this.router.navigate(["/inmueble/avisos"]);

        } else {

          //alert("Error al subir inmueble");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al subir inmueble',

          })
        }
      })}else{
        Swal.fire({
          icon: "error",
          text: "Son necesarias solo 5 imagenes",
        });
      }
  }


  mapOptions: google.maps.MapOptions = {
    center: { lat: 20, lng: -98 }, // Coordenadas iniciales del mapa
    zoom: 6, // Nivel de zoom inicial
  };



  activeMarker: any = null;
  map: google.maps.Map | null = null;
  onMapClick(event: google.maps.MapMouseEvent) {
    // Aquí puedes agregar el código para crear un marcador en la ubicación del clic
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      console.log(`Latitud: ${lat}, Longitud: ${lng}`);
      this.latitud = event.latLng.lat();
      this.longitud = event.latLng.lng();

      const newMarker = {
        position: { lat, lng },
        label: 'Inmueble',
      };

      // Borra el marcador activo anterior, si existe
      if (this.activeMarker) {
        this.activeMarker = null;
      }

      // Establece el nuevo marcador como activo
      this.activeMarker = newMarker;


    } else {
      console.log('No se pudo obtener la posición.');
    }
  }


  // aqui empieza metodo para subir imagenes



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


  isLoggedIn: boolean = false;

  modalVisible = false; // Inicialmente oculto


  @ViewChild('ventanaEmergente') ventanaEmergente: any;

  generateRandomCombination() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let combination = '';

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      combination += characters.charAt(randomIndex);
    }

    return combination;
    // console.log(combination);
  }

  openDialog(bandera: number): void {
    let auxi = bandera.toString();
    localStorage.setItem("tipodeplan", auxi);
    const dialogRef = this.dialog.open(MetododepagoComponent, {
    });


  }
}
