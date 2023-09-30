import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  nombre_observable$ = new BehaviorSubject(null);
  constructor() { }

  get_nombre_funcion_observable_Ob(): Observable<any> {
    return this.nombre_observable$.asObservable();
  }
}
