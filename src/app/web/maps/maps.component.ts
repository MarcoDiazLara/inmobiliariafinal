import { Component, OnInit } from '@angular/core';
import { WebModule } from '../web.module';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { inmueblesBuscados } from 'src/app/services/Interface/Interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent  {
  public markers: any[];
  public zoom: number;
  public center = { lat: 24, lng: 12 };

  action: String | undefined;
  tpropiedad!: Number;
  ubicacion!: String;
  bandera!: number;
  tipoP!: number;

  datosInmueble: inmueblesBuscados[] = [];

  constructor(private router: Router, private route: ActivatedRoute
    , private http: HttpService) {
    this.markers = [];
    this.zoom = 12;
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log('Query Params: ', params);

      this.action = params['action'];
      this.tpropiedad = params['tpropiedad'];
      this.ubicacion = params['ubicacion'];
      this.bandera = params['bandera'];
      this.tipoP = params['tipoP'];

      console.log('Action: ', this.action);
      console.log('Propiedad: ', this.tpropiedad);
      console.log('Ubicacion: ', this.ubicacion);

    });

    // this.http.busquedaAvanzada('',this.tpropiedad,'','','','',this.ubicacion).subscribe((data:any)=>{
      
    //   this.datosInmueble = data;
    //   console.log(this.datosInmueble);
      
    //   console.log(this.markers);

    // });

    this.http.MenuFiltros(this.ubicacion, this.tpropiedad,this.tipoP).subscribe((resp:any)=> {

      this.datosInmueble = resp;
      this.createMarkers();

    })
    
    if (!navigator.geolocation) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Geolocalizacion no disponible',
       
      })
    }

    navigator.geolocation.getCurrentPosition((position) => {
      let lat = 0;
      const coords = position.coords;
      console.log('lat: ', position.coords.latitude, ' long: ', position.coords.longitude);
      this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.markers.push({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        label: {
          color: "black",
          text: "Estas Aqui"
         }
      })
    });
  }
  createMarkers() {
    this.datosInmueble.forEach(inmueble => {
      this.markers.push({
        position: {
          lat: Number(inmueble.latitud),
          lng: Number(inmueble.longitud),
        },
        label: {
          color: "black",
          text: inmueble.Nombre_Publicacion
         }
        
        
      });
    });
  }

  openDetails(marker: any) {
    // Encuentra el inmueble correspondiente a partir de los datos de los marcadores.
    const inmueble = this.datosInmueble.find(data => data.latitud == marker.position.lat && data.longitud == marker.position.lng);
    if (inmueble) {
      // Navega al componente "detalles" y pasa los parámetros necesarios
      
     this.router.navigate(['/inmueble/detalles'], { queryParams: { 'id_inmueble': inmueble.Id_Inmueble, 'id_usuario': inmueble.Id_Publicador, 'tpropiedad' : this.tpropiedad, 'ubicacion' : this.ubicacion }} );
    }
  }
}
