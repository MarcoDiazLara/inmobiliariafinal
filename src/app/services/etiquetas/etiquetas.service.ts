import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  url = "https://inmobiliaria.arvispace.com/servicios/";

  constructor(private httpclient: HttpClient) { }


  etmenu() {
    let headers: any = new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'xrsxryw1y21';
    return this.httpclient.post(this.url + 'Etindex.php', params, { headers });
  }

}
