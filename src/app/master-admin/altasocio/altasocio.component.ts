import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoSocio, Inmuebles,Estados, Municipios, Asentamiento } from 'src/app/services/Interface/Interfaces';
import Swal from 'sweetalert2';

interface Status {
  value: string;
  viewValue: string;
}

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
  
  estados1: Status[] = [
    {value: 'Activo', viewValue: 'Activo'},
    {value: 'Inactivo', viewValue: 'Inactivo'},
  ];
  
imageForm!: FormGroup;
selectedImages!: FileList;
  formGeneral!:FormGroup;
  loading = false;
  hide2 = true;


  constructor(
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
    private httpClient: HttpClient,
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
      correo: ['', [Validators.required]],
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
      

    if (this.formGeneral.valid){
      let date = new Date();
    
      this.subir_imagenes();
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


      //logo xd
      let dia = date.getDate();
      let dia1 = date.getDate().toString();;
      if(dia < 10 ){
        dia1 = "0" + dia1;
       }
      let mes = (date.getMonth()+1);
      let mes1 = (date.getMonth()+1).toString();
      if(mes < 10){
        mes1 = "0"+mes1;
       }
      let anio = date.getFullYear().toString();
      let nom_aux =  anio + mes1 + dia1;

      let Logo = "https://inmobiliaria.arvispace.com/imagenes/"+ nom_aux + this.selectedImages[0].name;
      let id = localStorage.getItem("Id_Usuario");
     
      let imageInput = this.formGeneral.value.imageInput;

      // Apartado de Informacion Usuarios

      let nombre = this.formGeneral.value.nombre;
      let apellidopaterno = this.formGeneral.value.apellidopaterno;
      let apellidomaterno = this.formGeneral.value.apellidomaterno;
      let contra = this.formGeneral.value.password;
      let curp = this.formGeneral.value.curp;
      let rfc = this.formGeneral.value.rfc;
      let correo = this.formGeneral.value.correo;
      let contactoprincipal = this.formGeneral.value.contactoprincipal;
      let contactoemergencia = this.formGeneral.value.contactoemergencia;
      let nombreusuario = this.formGeneral.value.nombreusuario;
      let estatus = this.formGeneral.value.estatus;
      let descripcionusuario = this.formGeneral.value.descripcionusuario;
      let imageUsua = this.formGeneral.value.imageUsua;
      

      //Nombre_Razon_Social: any,Img_Logo: any,RFC: any,Email: any,Tel_Empresa: any,Calle: any,Num_Ext: any,Num_Int:any,Id_Asentamiento:any,Id_Tipo_Socio: any, v_Id_Usuario: any
      //alert('nombrerazons: '+ nombrerazons + 'rfcempresa: ' + rfcempresa + 'calle: '+ calle + 'numext: ' + numext +  'contactoempresa: ' + contactoempresa + 'numint: '+ numint + 'email: ' + email  + 'imageInput' + imageInput + 'tipo_socio' + tipo_socio + 'estados' + estados+ 'municipio'+ municipio + 'asentamientos' + asentamientos); 
      
      // this.httpService.insertarSocio(nombrerazons,Logo, rfcempresa,email, contactoempresa,calle, numext, numint, asentamientos, tipo_socio, id,).subscribe((data: any)=> {
      //   if(data == 1){
      //     alert("Se ha insertado el socio");
      //   }else{
      //     alert("Error al insertar");
      //   }
      // })

      this.httpService.altaSocioCompleto(nombre,apellidopaterno,apellidomaterno,nombreusuario,contra,correo,contactoempresa,contactoemergencia, "10",estatus, localStorage.getItem("Id_Usuario"),
      descripcionusuario,rfc,curp,localStorage.getItem("Id_Usuario"),nombrerazons,Logo,rfcempresa,email,contactoempresa,calle,numext,numint,asentamientos,tipo_socio,localStorage.getItem("Id_Usuario")).subscribe((data:any) =>{
        if(data == 1){
          //alert("se Ha insertado")
          this.httpService.EnviarCorreo(correo,"Bienvenido a InmobeWise. \n Hola, "+ nombre + " ya puedes usar nuestros servicios. \n Saludos del equipo de InmobeWise.").subscribe((data)=>{
              
          })
          Swal.fire(
            'Exitosamente!',
            'Se ha registrado un nuevo socio',
            'success'
            
          )
        }else{
          //alert("No se pudo insertar")
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo insertar',
           
          })
        }
      })

    //   console.log("Razon: "+ nombrerazons + " RFC: "+ rfcempresa + " Correo: "+ email + " Contacto_ Empresa: "+contactoempresa+ " Calle: "+ calle +" NUM_EXT: "+ numext+
    //   " NUM_INT: "+ numint+ " TipoSocio: "+ tipo_socio + " Asentamiento: "+ asentamientos +" Logo: "+ Logo + " Nombre: "+ nombre+ " Ap_Paterno: "+ apellidopaterno + "Ap_Materno: "+ apellidomaterno+
    //    " CURP: "+ curp + " RFC: "+ rfc + " Contacto_Emergencia: "+ contactoemergencia + " Correo: "+ correo + " Nombre_Usuario: "+ nombreusuario + " contra: "+ contra+ "Estatus: "+ estatus + " Descripcion: "+ descripcionusuario );

     }else{
      alert("XDXDXD");
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
