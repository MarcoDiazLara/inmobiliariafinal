import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //url = "https://inmobiliaria.arvispace.com/servicios/";
  url = "http://localhost/servicios/";

  public variableGlobal: boolean = false;

  constructor(
    private httpclient: HttpClient
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

  iniciarSesion(nombreU: string, password: string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'nombreU='+nombreU +'&password=' + password;
    return this.httpclient.post(this.url + 'consultar_login.php', params, { headers });
  }


  //p_nombres,p_a_paterno,p_a_materno,p_nom_usuario,p_contrasena,p_correo,p_tel_fijo,p_cel
  registroCompleto(p_nombres: string,p_a_paterno: string,p_a_materno: string
    ,p_nom_usuario: string,p_contrasena: string,p_correo:string,p_tel_fijo:string,p_cel: string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nombres='+p_nombres+'&p_a_paterno='+p_a_paterno+
    '&p_a_materno='+p_a_materno+'&p_nom_usuario='+p_nom_usuario+'&p_contrasena='+p_contrasena
    +'&p_correo='+p_correo+'&p_tel_fijo='+p_tel_fijo+'&p_cel='+p_cel;
    return this.httpclient.post(this.url + 'insertarUsuario.php', params, { headers });
  }

// p_nom_inmueble,p_desc_inmueble,p_calle,p_num_ext,p_num_int,p_terreno,p_construccion,p_recamara,p_bano,p_cocina
// p_num_pisos,p_antiguedad,p_acabados,p_alberca,p_jardin,p_gym,p_roof,p_estacionamiento,p_ubi_maps,p_pic_1
// p_pic_2,p_pic_3,p_pic_4,p_pic_5,p_360,p_video,p_id_asentamiento,p_id_tipo_inmueble,p_prec_min,p_prec_max,p_prec_final

  registrarInmuebles(p_nom_inmueble: string, p_desc_inmueble: string, p_calle: string, p_num_ext: string,p_num_int: string,
  p_terreno: string, p_construccion: string,p_recamara: string, p_bano: string,p_cocina: string,p_num_pisos: string,p_antiguedad: string,
  p_acabados: string, p_alberca:string, p_jardin: string, p_gym:string, p_roof:string,p_estacionamiento: string,p_ubi_maps: string,
  p_pic_1: string, p_pic_2: string, p_pic_3:string,p_pic_4: string, p_pic_5: string, p_360:string, p_video: string, p_id_asentamiento: number,
  p_id_tipo_inmueble:number,p_update: any,p_prec_min:any,p_prec_max: any,p_prec_final: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'p_nom_inmueble='+p_nom_inmueble+ '&p_desc_inmueble='+p_desc_inmueble+'&p_calle='+p_calle+'&p_num_ext='+p_num_ext+'&p_num_int='+p_num_int+'&p_terreno='+p_terreno+
    '&p_construccion='+p_construccion+'&p_recamara='+p_recamara+'&p_bano='+p_bano+'&p_cocina='+p_cocina+'&p_num_pisos='+p_num_pisos+'&p_antiguedad='+p_antiguedad+
    '&p_acabados='+p_acabados+'&p_alberca='+p_alberca+'&p_jardin='+p_jardin+'&p_gym='+p_gym+'&p_roof='+p_roof+'&p_estacionamiento='+p_estacionamiento+'&p_ubi_maps='+p_ubi_maps+
    '&p_pic_1='+p_pic_1+'&p_pic_2='+p_pic_2+'&p_pic_3='+p_pic_3+'&p_pic_4='+p_pic_4+'&p_pic_5='+p_pic_5+'&p_360='+p_360+'&p_video='+p_video+'&p_id_asentamiento='+p_id_asentamiento+'&p_id_tipo_inmueble='+p_id_tipo_inmueble
    +'&p_update='+p_update +'&p_prec_min='+p_prec_min +'&p_prec_max='+p_prec_max +'&p_prec_final='+p_prec_final;
    return this.httpclient.post(this.url + 'insertarInmueble.php', params, { headers });
  }

  tipoInmueble(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'mostrarTipoInmuebles.php', params, { headers });
  }

  obtenerEstado(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'mostrarEstados.php', params, { headers });
  }

  obtenerMunicipio(p_estado : string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_estado="+p_estado;
    return this.httpclient.post(this.url + 'mostrarMunicipio.php', params, { headers });
  }

  obtenerAsentamiento(p_estado : string, p_municipio: string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_estado="+p_estado + "&p_municipio="+p_municipio;
    return this.httpclient.post(this.url + 'mostarAsentamiento.php', params, { headers });
  }

  obtenerAsesores(p_nombre : string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_nombre="+p_nombre;
    return this.httpclient.post(this.url + 'buscarUsuAsesor.php', params, { headers });
  }

  eliminarAsesores(p_id_usuario : string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id_usuario="+p_id_usuario;
    return this.httpclient.post(this.url + 'eliminarAsesorUsuario.php', params, { headers });
  }

  setGlobalVariable(value: boolean) {
    this.variableGlobal = value;
  }

  getGlobalVariable() {
    return this.variableGlobal;
  }

  cerrarSesion(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "assdfghjk";
    return this.httpclient.post(this.url + 'cerrarSesion.php', params, { headers });
  }

  mostrarInmuebles() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpclient.post(this.url + 'consultarInmueble.php',  { headers });
  }

  cambiarContra(p_id: any, password: string){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id="+p_id + "&password="+password;
    return this.httpclient.post(this.url + 'cambiarContrasena.php', params, { headers });
  }

  obtenerInfoUsuario(p_id: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id="+p_id;
    return this.httpclient.post(this.url + 'obtenerInfoUsuario.php', params, { headers });
  }

  obtenerInfoUsuario2(p_id: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id="+p_id;
    return this.httpclient.post(this.url + 'obtenerInfoUsuario2.php', params, { headers });
  }

  updateInfoUsuario(p_id: any, p_nombres: any, p_a_paterno: any,  p_a_materno: any, p_CURP: any,
    p_RFC: any, p_tel_principal: any,p_tel_emer: any,p_correo: any, p_nombre_usu: any){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = "p_id="+p_id +"&p_nombres="+p_nombres +"&p_a_paterno="+p_a_paterno+"&p_a_materno="+p_a_materno+"&p_CURP="+p_CURP+"&p_RFC="+p_RFC+
    "&p_tel_principal="+p_tel_principal +"&p_tel_emer="+p_tel_emer+"&p_correo="+p_correo+"&p_nombre_usu="+p_nombre_usu;
    return this.httpclient.post(this.url + 'sp_web_updateInfoUsuario.php', params, { headers });
  }

  

}
