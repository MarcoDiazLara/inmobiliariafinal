import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  nombre_observable$ = new BehaviorSubject(null);
  usuarios$ = new BehaviorSubject(null);

  inventarioasesor$ = new BehaviorSubject(null); 

  constructor() { }

  getUsuariosOb(): Observable<any>{
    return this.usuarios$.asObservable();
  }

  get_nombre_funcion_observable_Ob(): Observable<any> {
    return this.nombre_observable$.asObservable();
  }

  getInventarioAsesorOb(): Observable<any> {
    return this.inventarioasesor$.asObservable();
  }
}
