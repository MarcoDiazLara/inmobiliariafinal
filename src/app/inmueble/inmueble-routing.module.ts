import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleComponent } from './inmueble.component';
import { VistadeinmuebleComponent } from './vistadeinmueble/vistadeinmueble.component';
import { DetallesComponent } from './detalles/detalles.component';
import { MenuComponent } from '../web/menu/menu.component';
import { FooterComponent } from '../web/footer/footer.component';
import { UnityComponent } from './unity/unity.component';
import { MenuinmuebleComponent } from './menuinmueble/menuinmueble.component';
import { AvisosComponent } from './avisos/avisos.component';

import { ContratosComponent } from './contratos/contratos.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


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
  {
    path: 'unity', component: UnityComponent
  },
  {
    path:'menuinmueble', component:MenuinmuebleComponent
  },
  {
    path:'avisos', component:AvisosComponent

  },
  
  {
    path:'contratos', component:ContratosComponent

  },
  {
    path:'favoritos', component:FavoritosComponent
  }
  // {
  //   path:'inmobiliariacorredor',component:inmobiliariacorredor
  // }
    


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
