import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { an } from '@fullcalendar/core/internal-common';
import { ModalComponent } from 'src/app/inmueble/modal/modal.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CardInmuebles, Inmuebles, TipoOperacion } from '../Interface/Interfaces';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "https://inmobiliaria.arvispace.com/servicios/";
  //url = "http://localhost/servicios/";

  public variableGlobal: boolean = false;

  constructor(
    private httpclient: HttpClient, private dialog:MatDialog
  ) { }

  // mostrarDatos() {
  //   let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   let params = 'param1';
  //   return this.http.post(this.urlGlobal + 'nombre_archivo_php.php', params, { headers });
  // }

  // actualizarDatos(param1: string , param2: number) {
  //   let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   let params = 'param1=' + param1 +
  //                '&param2=' + param2;
  //   return this.http.post(this.urlGlobal + 'nombre_archivo_php.php', params, { headers });
  // }

  iniciarSesion(nombreU: string, password: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'nombreU=' + nombreU + '&password=' + password;
    return this.httpclient.post(this.url + 'consultar_login.php', params, { headers });
  }


  //p_nombres,p_a_paterno,p_a_materno,p_nom_usuario,p_contrasena,p_correo,p_tel_fijo,p_cel
  registroCompleto(p_nombres: string, p_a_paterno: string, p_a_materno: string
    , p_nom_usuario: string, p_contrasena: string, p_correo: string, p_tel_fijo: string, p_cel: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nombres=' + p_nombres + '&p_a_paterno=' + p_a_paterno +
      '&p_a_materno=' + p_a_materno + '&p_nom_usuario=' + p_nom_usuario + '&p_contrasena=' + p_contrasena
      + '&p_correo=' + p_correo + '&p_tel_fijo=' + p_tel_fijo + '&p_cel=' + p_cel;
    return this.httpclient.post(this.url + 'insertarUsuario.php', params, { headers });
  }

  // p_nom_inmueble,p_desc_inmueble,p_calle,p_num_ext,p_num_int,p_terreno,p_construccion,p_recamara,p_bano,p_cocina
  // p_num_pisos,p_antiguedad,p_acabados,p_alberca,p_jardin,p_gym,p_roof,p_estacionamiento,p_ubi_maps,p_pic_1
  // p_pic_2,p_pic_3,p_pic_4,p_pic_5,p_360,p_video,p_id_asentamiento,p_id_tipo_inmueble,p_prec_min,p_prec_max,p_prec_final

  registrarInmuebles(p_nom_inmueble: string, p_desc_inmueble: string, p_calle: string, p_num_ext: string, p_num_int: string,
    p_terreno: string, p_construccion: string, p_recamara: string, p_bano: string, p_cocina: string, p_num_pisos: string, p_antiguedad: string,
    p_acabados: string, p_alberca: string, p_jardin: string, p_gym: string, p_roof: string, p_estacionamiento: string,
    p_pic_1: string, p_pic_2: string, p_pic_3: string, p_pic_4: string, p_pic_5: string, p_360: string, p_video: string, p_id_asentamiento: number,
    p_id_tipo_inmueble: number, p_update: any, p_prec_min: any, p_prec_max: any, p_prec_final: any, p_id_Tipo: any, p_latitud: any, p_longitud: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nom_inmueble=' + p_nom_inmueble + '&p_desc_inmueble=' + p_desc_inmueble + '&p_calle=' + p_calle + '&p_num_ext=' + p_num_ext + '&p_num_int=' + p_num_int + '&p_terreno=' + p_terreno +
      '&p_construccion=' + p_construccion + '&p_recamara=' + p_recamara + '&p_bano=' + p_bano + '&p_cocina=' + p_cocina + '&p_num_pisos=' + p_num_pisos + '&p_antiguedad=' + p_antiguedad +
      '&p_acabados=' + p_acabados + '&p_alberca=' + p_alberca + '&p_jardin=' + p_jardin + '&p_gym=' + p_gym + '&p_roof=' + p_roof + '&p_estacionamiento=' + p_estacionamiento +
      '&p_pic_1=' + p_pic_1 + '&p_pic_2=' + p_pic_2 + '&p_pic_3=' + p_pic_3 + '&p_pic_4=' + p_pic_4 + '&p_pic_5=' + p_pic_5 + '&p_360=' + p_360 + '&p_video=' + p_video + '&p_id_asentamiento=' + p_id_asentamiento + '&p_id_tipo_inmueble=' + p_id_tipo_inmueble
      + '&p_update=' + p_update + '&p_prec_min=' + p_prec_min + '&p_prec_max=' + p_prec_max + '&p_prec_final=' + p_prec_final + '&p_id_Tipo=' + p_id_Tipo + '&p_latitud=' + p_latitud + '&p_longitud=' + p_longitud;
    return this.httpclient.post(this.url + 'insertarInmueble.php', params, { headers });
  }

  obtenerEstado() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'mostrarEstados.php', params, { headers });
  }

  obtenerMunicipio(p_estado: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_estado=" + p_estado;
    return this.httpclient.post(this.url + 'mostrarMunicipio.php', params, { headers });
  }

  obtenerAsentamiento(p_estado: string, p_municipio: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_estado=" + p_estado + "&p_municipio=" + p_municipio;
    return this.httpclient.post(this.url + 'mostarAsentamiento.php', params, { headers });
  }

  obtenerAsesores(p_nombre: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_nombre=" + p_nombre;
    return this.httpclient.post(this.url + 'buscarUsuAsesor.php', params, { headers });
  }

  eliminarAsesores(p_id_usuario: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id_usuario=" + p_id_usuario;
    return this.httpclient.post(this.url + 'eliminarAsesorUsuario.php', params, { headers });
  }

  setGlobalVariable(value: boolean) {
    this.variableGlobal = value;
  }

  getGlobalVariable() {
    return this.variableGlobal;
  }

  cerrarSesion() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "assdfghjk";
    return this.httpclient.post(this.url + 'cerrarSesion.php', params, { headers });
  }

  mostrarInmuebles(Ubicacion: String, TipoPropiedad: Number) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_ubicacion=' + Ubicacion + '&p_TipoInmueble=' + TipoPropiedad;
    return this.httpclient.post(this.url + 'consultarInmueble.php', params, { headers });
  }

  mostrarMunicipios(Municipio: String) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'Estado=' + Municipio;
    return this.httpclient.post(this.url + 'ser_select_municipio.php', params, { headers });
  }

  mostrarTipoInmueble() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpclient.post(this.url + 'consultarTipoInmueble.php', { headers });
  }

  busquedaAvanzada(idMunicipio: String, tipoInmueble: Number, recamaras: String, antiguedad: String, estacionamiento: String, bano: String, p_ubicacion: String) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_Municipio=' + idMunicipio + '&p_Tipo_Inmueble=' + tipoInmueble + '&p_Recamara=' + recamaras + '&p_Antiguedad=' + antiguedad + '&p_estacionamiento=' + estacionamiento + '&p_bano=' + bano + '&p_ubicacion=' + p_ubicacion;
    return this.httpclient.post(this.url + 'Filtros.php', params, { headers });
  }

  cambiarContra(p_id: any, password: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id=" + p_id + "&password=" + password;
    return this.httpclient.post(this.url + 'cambiarContrasena.php', params, { headers });
  }

  obtenerInfoUsuario(p_id: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id=" + p_id;
    return this.httpclient.post(this.url + 'obtenerInfoUsuario.php', params, { headers });
  }
  obtenerInfoFavoritos(p_id: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id_usuario=" + p_id;
    return this.httpclient.post(this.url + 'obtenerInfoFavoritos.php', params, { headers });
  }

  obtenerInfoUsuario2(p_id: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id_usuario=" + p_id;
    return this.httpclient.post(this.url + 'obtenerInfoUsuario2.php', params, { headers });
  }

  updateInfoUsuario(p_id: any, p_nombres: any, p_a_paterno: any, p_a_materno: any, p_CURP: any,
    p_RFC: any, p_tel_principal: any, p_tel_emer: any, p_correo: any, p_nombre_usu: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id=" + p_id + "&p_nombres=" + p_nombres + "&p_a_paterno=" + p_a_paterno + "&p_a_materno=" + p_a_materno + "&p_CURP=" + p_CURP + "&p_RFC=" + p_RFC +
      "&p_tel_principal=" + p_tel_principal + "&p_tel_emer=" + p_tel_emer + "&p_correo=" + p_correo + "&p_nombre_usu=" + p_nombre_usu;
    return this.httpclient.post(this.url + 'sp_web_updateInfoUsuario.php', params, { headers });
  }


  obtenerTipoUser() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'obtenerTipoUsuario.php', params, { headers });
  }

  registroCompletoBroker(p_nombres: string, p_a_paterno: string, p_a_materno: string
    , p_nom_usuario: string, p_contrasena: string, p_correo: string, p_tel_fijo: string, p_cel: string,
    p_tipo_usuario: any, p_estatus: any, p_id_admin: any, p_desc_usu: any, p_RFC: any, p_CURP: any, p_creado: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nombres=' + p_nombres + '&p_a_paterno=' + p_a_paterno +
      '&p_a_materno=' + p_a_materno + '&p_nom_usuario=' + p_nom_usuario + '&p_contrasena=' + p_contrasena
      + '&p_correo=' + p_correo + '&p_tel_fijo=' + p_tel_fijo + '&p_cel=' + p_cel + '&p_tipo_usuario=' + p_tipo_usuario + '&p_estatus=' + p_estatus + '&p_id_admin=' + p_id_admin
      + '&p_desc_usu=' + p_desc_usu + '&p_RFC=' + p_RFC + '&p_CURP=' + p_CURP + '&p_creado=' + p_creado;
    return this.httpclient.post(this.url + 'insertarUsuarioBroker.php', params, { headers });
  }

  tipoSocio() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'mostrarTipoSocio.php', params, { headers });
  }
  EnviarCorreo(Correo_destino: any, mensaje: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'Correo_destino=' + Correo_destino + "&mensaje=" + mensaje;
    return this.httpclient.post(this.url + 'EnviaCorreo.php', params, { headers });

  }

  cambiarC(p_correo: any, password: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_correo=" + p_correo + "&password=" + password;
    return this.httpclient.post(this.url + 'cambiarC.php', params, { headers });

  }

  // mostrarReasignacion() {
  //   let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   return this.httpclient.post(this.url + 'consultarReasignacionInmuebles.php', { headers });
  // }


  mostrarReasignacion(Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_Id_Socio=" + Id_Socio;
    return this.httpclient.post(this.url + 'consultarReasignacionInmuebles.php', params, { headers });
  }



  // mostrarAsesor() {
  //   let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   return this.httpclient.post(this.url + 'sp_web_consulta_asesores.php', { headers });
  // }

  mostrarAsesor(Id_Responsable: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Responsable=' + Id_Responsable;
    return this.httpclient.post(this.url + 'sp_web_consulta_asesores.php', params, { headers });
  }

  // AsesoresAginados_NoAsigandos() {
  //   let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   return this.httpclient.post(this.url + 'consultarAsesor_Asignado_NoAsignado.php', { headers });
  // }


  Aginados_NoAsigandos(IdSocio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_IdSocio=' + IdSocio;
    return this.httpclient.post(this.url + 'sp_web_asignados_noAsignados.php', params, { headers });
  }

  updateUsuarioReasignacion(p_Id_Inmueble: any, p_Id_Usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_Id_Inmueble=" + p_Id_Inmueble + "&p_Id_Usuario=" + p_Id_Usuario;
    return this.httpclient.post(this.url + 'sp_web_actualiza_usuario_asignado.php', params, { headers });
  }


  insertarSocio(Nombre_Razon_Social: any, Img_Logo: any, RFC: any, Email: any, Tel_Empresa: any, Calle: any, Num_Ext: any, Num_Int: any, Id_Asentamiento: any, Id_Tipo_Socio: any, v_Id_Usuario: any) {
    //'$vNombre_Razon_Social','$vImg_Logo','$vRFC','$vEmail','$vTel_Empresa','$vCalle','$vNum_Ext','$vNum_Int','$vId_Asentamiento','$vId_Tipo_Socio'
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'Nombre_Razon_Social=' + Nombre_Razon_Social + "&Img_Logo=" + Img_Logo + "&RFC=" + RFC + "&Email=" + Email + "&Tel_Empresa=" + Tel_Empresa + "&Calle=" + Calle + "&Num_Ext=" + Num_Ext
      + "&Num_Int=" + Num_Int + "&Id_Asentamiento=" + Id_Asentamiento + "&Id_Tipo_Socio=" + Id_Tipo_Socio + "&v_Id_Usuario=" + v_Id_Usuario;
    return this.httpclient.post(this.url + 'insertarSocio.php', params, { headers });
  }

  insertarusuarioasignacion(Id_Usuario: any, Id_Inmueble: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Usuario=' + Id_Usuario + "&p_Id_Inmueble=" + Id_Inmueble
    return this.httpclient.post(this.url + 'sp_web_insertar_usuario_asignacion.php', params, { headers });
  }


  mostrarContacto() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'mostrarcontacto.php', params, { headers });
  }



  mostrarDetalles(p_id_usu: any, p_id_inmu: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id_usu=" + p_id_usu + "&p_id_inmu=" + p_id_inmu;
    return this.httpclient.post(this.url + 'obtenerInfoInmu.php', params, { headers });
  }


  AgendarC(p_Fecha: any, p_Hora: any, p_Email: any, p_Id_Medio_Contacto: any, p_Nombre: any,
    p_Telefono: any, p_Mensaje: any, p_Id_Publicacion: any, p_Id_Usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_Fecha=" + p_Fecha + "&p_Hora=" + p_Hora + "&p_Email=" + p_Email + "&p_Id_Medio_Contacto=" + p_Id_Medio_Contacto
      + "&p_Nombre=" + p_Nombre + "&p_Telefono=" + p_Telefono + "&p_Mensaje=" + p_Mensaje + "&p_Id_Publicacion=" + p_Id_Publicacion
      + "&p_Id_Usuario=" + p_Id_Usuario;
    return this.httpclient.post(this.url + 'AgendraCita.php', params, { headers });


  }

  // AgendaCita(p_Fecha:any,p_Hora:any,p_Email:any,p_Id_Medio_Contacto:any, p_Nombre:any,p_Telefono:any,
  //   p_Mensaje:any,p_Id_Publicacion:any,p_Id_Usuario:any){
  //   let headers: any = new HttpHeaders({ 'Content-Type':'application/x-www-form-urlencoded'});
  //   let params="p_Fecha="+p_Fecha+"&p_Hora="+p_Hora+"&p_Email"+p_Email+"&p_Id_Medio_Contacto="
  //   +p_Id_Medio_Contacto+"&p_Nombre="+p_Nombre+"&p_Telefono="+p_Telefono+"&p_Mensaje="+p_Mensaje+
  //   "&p_Id_Publicacion="+p_Id_Publicacion+"&p_Id_Usuario="+p_Id_Usuario;
  //   return this.httpclient.post(this.url+'AgendraCita.php', params,{ headers });
  // }


  generaCodigo(p_codigo: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_codigo=' + p_codigo;
    return this.httpclient.post(this.url + 'mostrarcontacto.php', params, { headers });
  }

  mostrarCita(p_Id_Usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Usuario=' + p_Id_Usuario;
    return this.httpclient.post(this.url + 'mostrarcita.php', params, { headers });

  }

  InmuRecientes(Ubicacion: String, TipoPropiedad: Number) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_ubicacion=' + Ubicacion + '&p_TipoInmueble=' + TipoPropiedad;
    return this.httpclient.post(this.url + 'ObtenerInmuRecientes.php', params, { headers });
  }

  RentaDepReci(Ubicacion: String, TipoPropiedad: Number) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_ubicacion=' + Ubicacion + '&p_TipoInmueble=' + TipoPropiedad;
    return this.httpclient.post(this.url + 'RentDeparRecientes.php', params, { headers });
  }

  BajoPrecInmu(Ubicacion: String, TipoPropiedad: Number) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_ubicacion=' + Ubicacion + '&p_TipoInmueble=' + TipoPropiedad;
    return this.httpclient.post(this.url + 'BajoPrecInmu.php', params, { headers });
  }


  Remates(Ubicacion: String, TipoPropiedad: Number) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_ubicacion=' + Ubicacion + '&p_TipoInmueble=' + TipoPropiedad;
    return this.httpclient.post(this.url + 'Remates.php', params, { headers });
  }

  MenuFiltros(Ubicacion: String, TipoPropiedad: Number, p_tipo_Pub: Number) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_ubicacion=' + Ubicacion + '&p_TipoInmueble=' + TipoPropiedad + '&p_tipo_Pub=' + p_tipo_Pub;
    return this.httpclient.post(this.url + 'ConsultaMenu.php', params, { headers });
  }

  Favoritos(p_id_usuario: any, p_id_inmueble: String, p_estatus: String) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario + '&p_id_inmueble=' + p_id_inmueble + '&p_estatus=' + p_estatus;
    return this.httpclient.post(this.url + 'InsertarLikes.php', params, { headers });
  }

  InventarioAsesor(Id_Usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_Usuario=' + Id_Usuario;
    return this.httpclient.post(this.url + 'consultar_inmuebles_de_asesores.php', params, { headers });
  }

  mostrarDetallesInmueble(Id_Inmueble: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Inmueble=' + Id_Inmueble;
    return this.httpclient.post(this.url + 'consultar_detalle_inmuebles_asesores.php', params, { headers });
  }

  // mostrarDetallesInmueble(p_id_publicacion:any){
  //   let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   let params = 'Id_Publicacion='+ p_id_publicacion;
  //   return this.httpclient.post(this.url + 'consultar_detalle_inmuebles_asesores.php', params, { headers }); 
  // }
  Notis(p_mensje: any, id_publicador: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_mensje=' + p_mensje + '&id_publicador=' + id_publicador;
    return this.httpclient.post(this.url + 'creaNotificacion.php', params, { headers });
  }

  getNotis(p_id_usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario;
    return this.httpclient.post(this.url + 'obtenerNotis.php', params, { headers });

  }

  altaSocioCompleto(p_nombres: any, p_a_paterno: any, p_a_materno: any, p_nom_usuario: any, p_contrasena: any,
    p_correo: any, p_tel_fijo: any, p_cel: any, p_tipo_usuario: any, p_estatus: any, p_id_admin: any, p_desc_usu: any, p_RFC: any,
    p_CURP: any, p_creado: any, Nombre_Razon_Social: any, Img_Logo: any, RFC: any, Email: any, Tel_Empresa: any, Calle: any,
    Num_Ext: any, Num_Int: any, Id_Asentamiento: any, Id_Tipo_Socio: any, v_Id_Usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nombres=' + p_nombres + '&p_a_paterno=' + p_a_paterno + '&p_a_materno=' + p_a_materno + '&p_nom_usuario=' + p_nom_usuario + '&p_contrasena=' + p_contrasena + '&p_correo=' + p_correo
      + '&p_tel_fijo=' + p_tel_fijo + '&p_cel=' + p_cel + '&p_tipo_usuario=' + p_tipo_usuario + '&p_estatus=' + p_estatus + '&p_id_admin=' + p_id_admin
      + '&p_desc_usu=' + p_desc_usu + '&p_RFC=' + p_RFC + '&p_CURP=' + p_CURP + '&p_creado=' + p_creado + '&Nombre_Razon_Social=' + Nombre_Razon_Social + '&Img_Logo=' + Img_Logo
      + '&RFC=' + RFC + '&Email=' + Email + '&Tel_Empresa=' + Tel_Empresa + '&Calle=' + Calle + '&Num_Ext=' + Num_Ext + '&Num_Int=' + Num_Int + '&Id_Asentamiento=' + Id_Asentamiento
      + '&Id_Tipo_Socio=' + Id_Tipo_Socio + '&v_Id_Usuario=' + v_Id_Usuario;
    return this.httpclient.post(this.url + 'InsertarSocioCompleto.php', params, { headers });
  }


  mostrarInmobiliarias() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'obtenerInmobiliaras.php', params, { headers });
  }


  MostrarInmueblesSolicitud(Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + Id_Socio;
    return this.httpclient.post(this.url + 'consulta_inmueble_solicitud.php', params, { headers });
  }


  updateImagenes(p_id_usuario: any, p_imagen: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario + '&p_imagen=' + p_imagen;
    return this.httpclient.post(this.url + 'ActualizaImagen.php', params, { headers });
  }

  obtenerPublis(p_id_usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario;
    return this.httpclient.post(this.url + 'obtenerPublis.php', params, { headers });
  }

  mostrarlikes(p_Id_inmueble: any, p_fecha: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_inmueble=' + p_Id_inmueble + '&p_fecha=' + p_fecha;
    return this.httpclient.post(this.url + 'obtenerLikes.php', params, { headers });
  }

  //  actulizarInmueble(p_Id_inmueble:any, p_id_tipo_inmueble:number,p_nom_inmueble: string, p_calle: string, p_num_ext: string,p_num_int: string,
  //   p_terreno: string, p_construccion: string,p_recamara: string, p_bano: string,p_cocina: string,p_num_pisos: string,p_antiguedad: string,
  //   p_acabados: string, p_alberca:string, p_jardin: string, p_gym:string, p_roof:string,p_estacionamiento: string,
  //   p_pic_1: string, p_pic_2: string, p_pic_3:string,p_pic_4: string, p_pic_5: string, p_360:string, p_video: string, p_id_asentamiento: number,
  //  p_update: any,p_prec_min:any,p_prec_max: any,p_prec_final: any){

  //  }
  actualizarInmueble(p_Id_inmueble: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_inmueble=' + p_Id_inmueble;
    return this.httpclient.post(this.url + 'Inmueble_Actualizar.php', params, { headers });
  }
  estatusPublicacionInmueble() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'mostrarEstatusInmueble.php', params, { headers });
  }

  actualizarInformacionInmueble(p_Nombre_Inmu: any, p_Descrip: any, p_Calle: any, p_No_Interior: any, p_No_Exterior: any,
    p_terreno: any, p_construccion: any, p_recamaras: any, p_Banos: any, p_cocina: any, p_pisos: any, p_antiguedad: any, p_acabados: any,
    p_alberca: any, p_jardin: any, p_gym: any, p_garden: any, p_estacionamiento: any, p_id_usuario: any, p_id_inmueble: any,
    p_prec_min: any, p_prec_max: any, p_prec_final: any, p_id_estatus: any) {

    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    let params = 'p_Nombre_Inmu=' + p_Nombre_Inmu + '&p_Descrip=' + p_Descrip + '&p_Calle=' + p_Calle +
      '&p_No_Interior=' + p_No_Interior + '&p_No_Exterior=' + p_No_Exterior + '&p_terreno=' + p_terreno + '&p_construccion=' + p_construccion +
      '&p_recamaras=' + p_recamaras + '&p_Banos=' + p_Banos + '&p_cocina=' + p_cocina + '&p_pisos=' + p_pisos + '&p_antiguedad=' + p_antiguedad +
      '&p_acabados=' + p_acabados + '&p_alberca=' + p_alberca + '&p_jardin=' + p_jardin + '&p_gym=' + p_gym + '&p_garden=' + p_garden +
      '&p_estacionamiento=' + p_estacionamiento + '&p_id_usuario=' + p_id_usuario + '&p_id_inmueble=' + p_id_inmueble +
      '&p_prec_min=' + p_prec_min + '&p_prec_max=' + p_prec_max + '&p_prec_final=' + p_prec_final + '&p_id_estatus=' + p_id_estatus;
    return this.httpclient.post(this.url + 'ActualizarPublis.php', params, { headers });

  }
  insertEvent(p_asunto: any, p_finicio: any, p_ffin: any, p_descrip: any, p_iduser: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_asunto=' + p_asunto
      + '&p_finicio=' + p_finicio
      + '&p_ffin=' + p_ffin
      + '&p_descrip=' + p_descrip
      + '&p_iduser=' + p_iduser;
    return this.httpclient.post(this.url + 'InsertFechasHito.php', params, { headers });
  }



  mostrarfechasHito(p_iduser: any, p_finicio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_iduser=' + p_iduser + '&p_finicio=' + p_finicio;
    return this.httpclient.post(this.url + 'sp_web_mostrarFechasHito.php', params, { headers });
  }

  compraPlanes(p_id_usuario: any, p_id_tipo_plan: any, p_estatus_pago: any, p_estatus_Suscripcion: any, Fecha_Inicio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario + '&p_id_tipo_plan=' + p_id_tipo_plan + '&p_estatus_pago=' + p_estatus_pago + '&p_estatus_Suscripcion=' + p_estatus_Suscripcion
      + '&Fecha_Inicio=' + Fecha_Inicio;
    return this.httpclient.post(this.url + 'sp_web_RegistraComprasphp.php', params, { headers });
  }

  filtrosmiespacio(p_Id_Usuario: any, Id_tipo_publicacion: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Usuario=' + p_Id_Usuario + '&Id_tipo_publicacion=' + Id_tipo_publicacion;
    return this.httpclient.post(this.url + 'Filtros_Espacio.php', params, { headers });

  }

  filtroEstadoAnuncio(p_Id_Usuario: any, p_Id_Estatus: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Usuario=' + p_Id_Usuario + '&p_Id_Estatus=' + p_Id_Estatus;
    return this.httpclient.post(this.url + 'Filtros_Espacio_Tipo_Anuncio.php', params, { headers });
  }

  FiltroTipodeInmueble(p_Id_Usuario: any, p_Id_Tipo_Inmueble: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Usuario=' + p_Id_Usuario + '&p_Id_Tipo_Inmueble=' + p_Id_Tipo_Inmueble;
    return this.httpclient.post(this.url + 'Filtros_Espacio_Tipo_Inmueble.php', params, { headers });


  }

  obtenerCompras(p_Id_Usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_Id_Usuario;
    return this.httpclient.post(this.url + 'consultarCompras.php', params, { headers });
  }

  InventarioInmuebles(IdSocio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_IdSocio=' + IdSocio;
    return this.httpclient.post(this.url + 'sp_web_consulta_inventario_inmuebles.php', params, { headers });
  }


  registroCompletodeAdmin(p_nombres: string, p_a_paterno: string, p_a_materno: string
    , p_nom_usuario: string, p_contrasena: string, p_correo: string, p_tel_fijo: string, p_cel: string,
    p_tipo_usuario: any, p_estatus: any, p_id_admin: any, p_desc_usu: any, p_RFC: any, p_CURP: any, p_creado: any, p_id_socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nombres=' + p_nombres + '&p_a_paterno=' + p_a_paterno +
      '&p_a_materno=' + p_a_materno + '&p_nom_usuario=' + p_nom_usuario + '&p_contrasena=' + p_contrasena
      + '&p_correo=' + p_correo + '&p_tel_fijo=' + p_tel_fijo + '&p_cel=' + p_cel + '&p_tipo_usuario=' + p_tipo_usuario + '&p_estatus=' + p_estatus + '&p_id_admin=' + p_id_admin
      + '&p_desc_usu=' + p_desc_usu + '&p_RFC=' + p_RFC + '&p_CURP=' + p_CURP + '&p_creado=' + p_creado + '&p_id_socio=' + p_id_socio;
    return this.httpclient.post(this.url + 'insertarUsuAdmin.php', params, { headers });
  }


  seleccionD(p_id_socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_socio=' + p_id_socio;
    return this.httpclient.post(this.url + 'Seleccion_D.php', params, { headers });
  }

  SolicitudCambioA(IdSocio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_IdSocio=' + IdSocio;
    return this.httpclient.post(this.url + 'sp_web_consulta_solicitud_asesor.php', params, { headers });
  }

  MostrarDatosEmpresa(p_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Socio=' + p_Socio;
    return this.httpclient.post(this.url + 'Empresa_Perfil.php', params, { headers });
  }


  ActulizarDatosEmpresa(p_Socio: any, p_Nombre_Razon_Social: any, p_Img_Logo: any, p_RFC: any, p_Email: any, p_Tel_Empresa: any, p_Calle: any, p_Num_Ext: any, p_Num_Int: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Socio=' + p_Socio + '&p_Nombre_Razon_Social=' + p_Nombre_Razon_Social + '&p_Img_Logo=' + p_Img_Logo + '&p_RFC=' + p_RFC + '&p_Email=' + p_Email +
      '&p_Tel_Empresa=' + p_Tel_Empresa + '&p_Calle=' + p_Calle + '&p_Num_Ext=' + p_Num_Ext + '&p_Num_Int=' + p_Num_Int;
    return this.httpclient.post(this.url + 'ActulizarDatosEmpresa.php', params, { headers });
  }


  obtenerUsuarios(p_Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + p_Id_Socio;
    return this.httpclient.post(this.url + 'UsuariosEmpresa.php', params, { headers });
  }

  obtenerInformacionUsuario(p_id_usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario;
    return this.httpclient.post(this.url + 'sp_web_InfoUsuarioCompany.php', params, { headers });
  }


  mostrarBroker(Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + Id_Socio;
    return this.httpclient.post(this.url + 'sp_web_selecciona_broker.php', params, { headers });
  }
  SeleccionaAsesorhito(p_id_user: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_user=' + p_id_user;
    return this.httpclient.post(this.url + 'sp_web_selecciona_asesor.php', params, { headers });
  }

  mostrarInformacionAsesor(Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + Id_Socio;
    return this.httpclient.post(this.url + 'sp_web_Informacion_asesor.php', params, { headers });

  }
  SeleccionarBrokers(p_id_socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_socio=' + p_id_socio;
    return this.httpclient.post(this.url + 'seleccionaBrokers.php', params, { headers });

  }

  InmueblesBrokers(Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_Id_Socio=" + Id_Socio;
    return this.httpclient.post(this.url + 'sp_web_asignacion_brokers.php', params, { headers });
  }


  EliminarFechasHitos(p_id_hito: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id_hito=" + p_id_hito;
    return this.httpclient.post(this.url + 'sp_web_eliminarFechas.php', params, { headers });
  }

  InventarioBroker(IdSocio: any, IdUsuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_IdSocio=' + IdSocio + '&p_IdUsuario=' + IdUsuario;
    return this.httpclient.post(this.url + 'sp_web_inventario_broker.php', params, { headers });
  }

  ActualizacionFechasHito(p_Id_Fecha_Hito: any, p_Asunto: any, p_Fecha_Inicio: any, p_Fecha_Cierre: any, p_Descripcion: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_Id_Fecha_Hito=" + p_Id_Fecha_Hito + "&p_Asunto=" + p_Asunto + "&p_Fecha_Inicio=" + p_Fecha_Inicio +
      "&p_Fecha_Cierre=" + p_Fecha_Cierre + "&p_Descripcion=" + p_Descripcion;
    return this.httpclient.post(this.url + 'Actualizar_Fechas_Hito.php', params, { headers });
  }


  mostrarHitoGeneral(p_Id_Socio: any, p_finicio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + p_Id_Socio + '&p_finicio=' + p_finicio;
    return this.httpclient.post(this.url + 'sp_web_mostrarHitoGeneral.php', params, { headers });
  }

  EstatusUsuarioCompany(p_Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + p_Id_Socio;
    return this.httpclient.post(this.url + 'sp_web_selecUsuarios.php', params, { headers });

  }
  EstausCompany(p_id_usuario: any, p_estatus: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario + '&p_estatus=' + p_estatus;
    return this.httpclient.post(this.url + 'sp_web_actualizaEstatus.php', params, { headers });
  }

  mostrarInmueblesArviceSpace() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //  let params = 'p_Id_Socio=' + p_Id_Socio;
    return this.httpclient.post(this.url + 'sp_web_inmuebles_arvicespace.php', { headers });
  }
  estatusUsuario() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'sp_web_estatus_usuario.php', params, { headers });
  }

  subirModelado(p_Id_Inmueble: any, p_Num_Piso: any, p_Nom_Cuarto: any, p_elemento: any, p_acabados: any,
    p_color: any, p_tipo_material: any, p_medidas: any, p_imagen: any, p_id_usuario: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Inmueble=' + p_Id_Inmueble + '&p_Num_Piso=' + p_Num_Piso + '&p_Nom_Cuarto=' + p_Nom_Cuarto + '&p_elemento=' + p_elemento
      + '&p_acabados=' + p_acabados + '&p_color=' + p_color + '&p_tipo_material=' + p_tipo_material + '&p_medidas=' + p_medidas + '&p_imagen=' + p_imagen
      + '&p_id_usuario=' + p_id_usuario;
    return this.httpclient.post(this.url + 'sp_web_InsertModelados.php', params, { headers });
  }

  consultardatosmodelado(p_id_inmueble: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_inmueble=' + p_id_inmueble;
    return this.httpclient.post(this.url + 'sp_web_mostrarinfoModelados.php', params, { headers });
  }
  insertarArchivoArvice(idInmueble: any, rutaUno: any, rutaDos: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_inmueble=' + idInmueble + '&p_ruta_uno=' + rutaUno + '&p_ruta_dos=' + rutaDos;
    return this.httpclient.post(this.url + 'insertar_rutas_arvice.php', params, { headers });
  }

  insertarPlanos(p_planos:any,p_Id_Inmueble:any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_planos=' + p_planos  + '&p_Id_Inmueble=' + p_Id_Inmueble;
    return this.httpclient.post(this.url + 'sp_web_InserPlanos.php', params, { headers });

  }

  insertaResponsable(Id_Asesor: any, Id_Responsable: any, Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Asesor=' + Id_Asesor + '&p_Id_Responsable=' + Id_Responsable + '&p_Id_Socio=' + Id_Socio + '&p_estatus_Suscripcion=';
    return this.httpclient.post(this.url + 'sp_web_insertar_responsable.php', params, { headers });
  }

  generarPDFmodelado3D(p_id_Inmueble:any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_Inmueble='+p_id_Inmueble;
    return this.httpclient.post(this.url + 'GenerarPDF.php', params, { headers });
  }

  borrarlikes(idUser: any,idInm: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'idUser=' + idUser  + '&idInm=' + idInm;
    return this.httpclient.post(this.url + 'sp_web_borrarlikes.php', params, { headers });
  }

  validarlikes(p_id_usuario: any, p_id_inmueble: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario  + '&p_id_inmueble=' + p_id_inmueble;
    return this.httpclient.post(this.url + 'sp_web_validalikes.php', params, { headers });
  }

  actualizarResponsable(Id_Asesor: any, Id_Responsable: any, Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Asesor=' + Id_Asesor + '&p_Id_Responsable=' + Id_Responsable + '&p_Id_Socio=' + Id_Socio + '&p_estatus_Suscripcion=';
    return this.httpclient.post(this.url + 'sp_web_actualiza_responsable.php', params, { headers });
  }

  Grupos_Asignados(IdSocio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_IdSocio=' + IdSocio;
    return this.httpclient.post(this.url + 'sp_web_Grupos_Asignados.php', params, { headers });

  }

  verificaSub(p_id_usuario:any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario;
    return this.httpclient.post(this.url + 'sp_web_validaSuscripcion.php', params, { headers });
  }

  obtenerinfoAsesor(p_Id_Inmueble: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Inmueble=' + p_Id_Inmueble;
    return this.httpclient.post(this.url + 'sp_web_obtenerInfoAsesor.php', params, { headers });
  }

  Asignaciones_asesor(Id_Socio: any, Id_Usuario: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + Id_Socio  + '&p_Id_Usuario=' + Id_Usuario;
    return this.httpclient.post(this.url + 'sp_web_inmueble_asignacion_asesor.php', params, { headers });
  }

   interesados(p_id_usuario:any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario;
    return this.httpclient.post(this.url + 'Interesados.php', params, { headers });
  

   }

   infoAsesordueno(Id_Socio : any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_socio=' + Id_Socio;
    return this.httpclient.post(this.url + 'sp_web_infoDuenoAsesor.php', params, { headers });
   }

   inventarioAsesor(p_id_usuario: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_usuario=' + p_id_usuario;
    return this.httpclient.post(this.url + 'sp_web_inventarioAsesor.php', params, { headers });
   }

   insertaAsesores(Id_Usuario: any, Id_Inmueble: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Usuario=' + Id_Usuario + '&p_Id_Inmueble=' + Id_Inmueble;
    return this.httpclient.post(this.url + 'sp_web_insertar_asesor_asignacion.php', params, { headers });
  }  
  
  actualiza_asig_asesor(Id_Usuario: any, Id_Inmueble: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_Id_Usuario=" + Id_Usuario + "&p_Id_Inmueble=" + Id_Inmueble;
    return this.httpclient.post(this.url + 'sp_web_actualiza_usuario_asesor.php', params, { headers });
  }

  sp_web_ase_asig_noasig(IdSocio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_IdSocio=' + IdSocio;
    return this.httpclient.post(this.url + 'sp_web_ase_asig_noasig.php', params, { headers });
  }
   
   openasesor( ) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '30%',
      height: '',  
      disableClose: true
    });
  }  
  
  closeDialog() {
    this.dialog.closeAll();
  }

  tipoInmueble() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post<Inmuebles[]>(this.url + 'mostrarTipoInmuebles.php', params, { headers });
  }

  tipoOperacion(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post<TipoOperacion[]>(this.url + 'mostrarTipoOperaciones.php', params, { headers });
  }

  getInmuebles(Ubicacion: any, TipoPropiedad: any, TipoOperacion: any, PrecioDesde: any, PrecioHasta: any, Keywords: any, RVR: any, Video: any, Plano: any, Bano: any, Cocina: any, Alberca: any, Gym: any, Esta: any, PFechaA: any, PFechaP: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_ubicacion=' + Ubicacion + '&p_TipoInmueble=' + TipoPropiedad + '&p_TipoPublicacion=' + TipoOperacion + '&p_Precio_Desde=' + PrecioDesde + '&p_Precio_Hasta=' + PrecioHasta + '&p_Keywords=' + Keywords + '&p_RVR=' + RVR + '&p_Video=' + Video + '&p_Plano=' + Plano + '&p_Bano=' + Bano + '&p_Cocina=' + Cocina + '&p_Alberca=' + Alberca + '&p_Gym=' + Gym + '&p_Estacionamiento=' + Esta + '&p_FechaA=' + PFechaA + '&p_FechaP=' + PFechaP ;
    return this.httpclient.post<CardInmuebles[]>(this.url + 'getInmueblesBusqueda.php', params, { headers });
  }
  updateEstado(p_idestado: any, p_estado: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_idestado=" + p_idestado + "&p_estado=" + p_estado;
    return this.httpclient.post(this.url + 'sp_web_insertar_estados.php', params, { headers });
  }
  updateMunicipio(p_idmunicipio: any, p_municipio: any, p_idestado: any ){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_idmunicipio=" + p_idmunicipio + "&p_municipio=" + p_municipio + "&p_idestado=" + p_idestado;
    return this.httpclient.post(this.url + 'sp_web_insertar_municipios.php', params, { headers });
  }
  updateTasentamiento(p_idTasentamiento: any, p_Tasentamiento: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_idTasentamiento=" + p_idTasentamiento + "&p_Tasentamiento=" + p_Tasentamiento;
    return this.httpclient.post(this.url + 'sp_web_insertar_TipoAsentamiento.php', params, { headers });
  }
  updateAsentamiento(p_asentamiento: any, p_tipo_zona: any, p_idtipoasentamiento: any, p_idcp: any ){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 
     "&p_asentamiento=" + p_asentamiento 
    + "&p_tipo_zona=" + p_tipo_zona 
    + "&p_idtipoasentamiento=" + p_idtipoasentamiento 
    + "&p_idcp=" + p_idcp;
    return this.httpclient.post(this.url + 'sp_web_insertar_Asentamiento.php', params, { headers });
  }

  updateCodigopostal(p_id_cp: any, p_cp: any, p_id_municipio: any, p_id_estado: any ){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 
     "&p_id_cp=" + p_id_cp
    + "&p_cp=" + p_cp 
    + "&p_id_municipio=" + p_id_municipio
    + "&p_id_estado=" + p_id_estado;
    return this.httpclient.post(this.url + 'sp_web_insertar_codigopostal.php', params, { headers });
  }
    
  verificamodelado(p_id_inmueble: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_id_inmueble=' + p_id_inmueble;
    return this.httpclient.post(this.url + 'sp_web_verificaModelado.php', params, { headers });
  }

  verificarmodelado2miespacio(Id_inmueble: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'Id_inmueble=' + Id_inmueble;
    return this.httpclient.post(this.url + 'sp_web_verificarmodelado.php', params, { headers });
  }

  obtenerultimosinmu(p_IdSocio: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_IdSocio=' + p_IdSocio;
    return this.httpclient.post(this.url + 'sp_web_mostrar_inmuebles_cm.php', params, { headers });
  }

  SeleccionaDuenosCM(Id_Socio: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_Id_Socio=' + Id_Socio;
    return this.httpclient.post(this.url + 'sp_web_select_duenos_cm.php', params, { headers });

  }

}

