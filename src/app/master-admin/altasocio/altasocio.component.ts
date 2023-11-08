import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoSocio, Inmuebles,Estados, Municipios, Asentamiento } from 'src/app/services/Interface/Interfaces';



@Component({
  selector: 'app-altasocio',
  templateUrl: './altasocio.component.html',
  styleUrls: ['./altasocio.component.scss']

})
export class AltasocioComponent implements OnInit {
  Socio !: tipoSocio;
  Socios : tipoSocio[] = [];
  inmuebles: Inmuebles[] =[];
  inmueble!: Inmuebles;
  estados: Estados[] =[];
  estado!: Estados;
  municipios: Municipios[] =[];
  municipio!: Municipios;

  asentamientos: Asentamiento[] =[];
  asentamiento!: Asentamiento;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  

  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;


  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
  ) { }


  ngOnInit(): void {
    this.obtenerTipo();
    this.obtenerEstado();
    this.formGeneral = this.formBuilder.group({
      nombrerazons: ['', [Validators.required]],
      rfcempresa: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactoempresa: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      numext: ['', [Validators.required]],
      numint: ['', [Validators.required]],
      tipo_socio: ['',[Validators.required]],
      pId_estado: ['',[Validators.required]],
      pId_municipio:['',[Validators.required]],
      pId_asentamiento:['',[Validators.required]],
      imageInput: ['', [Validators.required]],
      // Apartado de Usuario
      nombre: ['', [Validators.required]],
      apellidopaterno: ['', [Validators.required]],
      apellidomaterno: ['', [Validators.required]],
      curp: ['', [Validators.required]],
      rfc: ['', [Validators.required]],
      contactoprincipal: ['', [Validators.required]],
      contactoemergencia: ['', [Validators.required]],
      nombreusuario: ['',[Validators.required]],
      password: ['', [Validators.required]],
      estatus: ['', [Validators.required]],
      descripcionusuario: ['', [Validators.required]],
      imageUsua: ['', [Validators.required]],
    });
  }

  Guardardatos(){
      

    if (this.formGeneral){
      let nombrerazons = this.formGeneral.value.nombrerazons;
      let rfcempresa = this.formGeneral.value.rfcempresa;
      let email = this.formGeneral.value.email;
      let contactoempresa = this.formGeneral.value.contactoempresa;
      let calle = this.formGeneral.value.calle;
      let numext = this.formGeneral.value.numext; 
      let numint = this.formGeneral.value.numint;
      let tipo_socio = this.formGeneral.value.tipo_socio;
      let estados = this.formGeneral.value.estados;
      let municipio = this.formGeneral.value.municipio;
      let asentamientos = this.formGeneral.value.pId_asentamiento;
      let Logo = "https://inmobiliaria.arvispace.com/imagenes/unkown.jpg";
      let id = localStorage.getItem("Id_Usuario");
     
      let imageInput = this.formGeneral.value.imageInput;

      //Nombre_Razon_Social: any,Img_Logo: any,RFC: any,Email: any,Tel_Empresa: any,Calle: any,Num_Ext: any,Num_Int:any,Id_Asentamiento:any,Id_Tipo_Socio: any, v_Id_Usuario: any
      //alert('nombrerazons: '+ nombrerazons + 'rfcempresa: ' + rfcempresa + 'calle: '+ calle + 'numext: ' + numext +  'contactoempresa: ' + contactoempresa + 'numint: '+ numint + 'email: ' + email  + 'imageInput' + imageInput + 'tipo_socio' + tipo_socio + 'estados' + estados+ 'municipio'+ municipio + 'asentamientos' + asentamientos); 
      
      this.httpService.insertarSocio(nombrerazons,Logo, rfcempresa,email, contactoempresa,calle, numext, numint, asentamientos, tipo_socio, id).subscribe((data: any)=> {
        if(data == 1){
          alert("Se ha insertado el socio");
        }else{
          alert("Error al insertar");
        }
      })

     }
}

obtenerTipo(){
  this.httpService.tipoSocio().subscribe((data: any) => {
    if(data !== 201){
      
      this.Socio = data[0].Id_Tipo_Socio;
        this.Socios = data;
    }
  },(err)=>{
   console.log(err);
  
  })

}

obtenerEstado(){

  this.httpService.obtenerEstado().subscribe((resp:any)=> {
    if(resp !== 201){
      this.estado = resp[0].id_Estado;
      this.estados = resp;
    }
   },(err)=>{
    console.log(err);
   })
 }

 
updateM(){
  this.httpService.obtenerMunicipio(this.formGeneral.value.pId_estado).subscribe((resp:any)=> {
    if(resp !== 201){
      this.municipio = resp[0].id_Municipio;
      this.municipios = resp;
    }
   },(err)=>{
    console.log(err);
   })
}

updateA(){
  this.httpService.obtenerAsentamiento(this.formGeneral.value.pId_estado,
    this.formGeneral.value.pId_municipio).subscribe((resp:any)=> {
    if(resp !== 201){
      this.asentamiento = resp[0].id_Asentamiento;
      this.asentamientos = resp;
    }
   },(err)=>{
    console.log(err);
   })
  
 
}


}
