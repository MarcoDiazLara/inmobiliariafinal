import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlGlobal= "url localhost";

  constructor(
    private http: HttpClient
  ) { }

  mostrarDatos() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'param1';
    return this.http.post(this.urlGlobal + 'nombre_archivo_php.php', params, { headers });
  }

  actualizarDatos(param1: string , param2: number) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'param1=' + param1 +
                 '&param2=' + param2;
    return this.http.post(this.urlGlobal + 'nombre_archivo_php.php', params, { headers });
  }
}
