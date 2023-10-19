import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleComponent } from './inmueble.component';
import { VistadeinmuebleComponent } from './vistadeinmueble/vistadeinmueble.component';
import { DetallesComponent } from './detalles/detalles.component';
import { MenuComponent } from '../web/menu/menu.component';
import { FooterComponent } from '../web/footer/footer.component';


const routes: Routes = [
 
  { path: '', redirectTo: 'inmueble', pathMatch: 'full' },
  {
    path:'inmueble', component:InmuebleComponent
  },

  {
       
    path:'vista',component:VistadeinmuebleComponent

  },
  {
    path: 'detalles', component: DetallesComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
