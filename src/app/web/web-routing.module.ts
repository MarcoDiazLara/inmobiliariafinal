import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { LoginComponent } from '../login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ParticulaComponent } from './particula/particula.component';
import { InmobiliariacorredorComponent } from './inmobiliariacorredor/inmobiliariacorredor.component';
import { ConstructoradesarrolladoraComponent } from './constructoradesarrolladora/constructoradesarrolladora.component';

const routes: Routes = [

  {
    path:'',
    component:WebComponent
  },

  {
    path:'login',
    component:LoginComponent
    
  },

  {
    path:'contacto',
    component:ContactoComponent
    
  },


  {

    path:'particula',
    component:ParticulaComponent
  },

  {

    path:'Inmobiliariacorredor',
    component:InmobiliariacorredorComponent
  },

  {

    path:'Constructoradesarrolladora',
    component:ConstructoradesarrolladoraComponent


  }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
