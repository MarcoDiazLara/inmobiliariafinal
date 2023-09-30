import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "http://localhost/servicios/";

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
}
