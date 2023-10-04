import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleComponent } from './inmueble.component';
import { VistadeinmuebleComponent } from './vistadeinmueble/vistadeinmueble.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
 
  {

    path:'',component:InmuebleComponent
  },

  {
       
    path:'vista',component:VistadeinmuebleComponent

  },
  {
    path: 'detalles', 
    component: DetallesComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
