import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { LoginComponent } from '../login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ParticulaComponent } from './particula/particula.component';
import { InmobiliariacorredorComponent } from './inmobiliariacorredor/inmobiliariacorredor.component';
import { ConstructoradesarrolladoraComponent } from './constructoradesarrolladora/constructoradesarrolladora.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { MapsComponent } from './maps/maps.component';
import { BlogComponent } from './blog/blog.component';
import { GuiarentarComponent } from './guiarentar/guiarentar.component';
import { RematehipotecarioComponent } from './rematehipotecario/rematehipotecario.component';
import { EvitafraudeComponent } from './evitafraude/evitafraude.component';
import { QuierescomprarComponent } from './quierescomprar/quierescomprar.component';
<<<<<<< HEAD
import { QuieresvenderComponent } from './quieresvender/quieresvender.component';
=======
import { InmobiliariasComponent } from './inmobiliarias/inmobiliarias.component';
import { NovedadesactulidadComponent } from './novedadesactulidad/novedadesactulidad.component';
>>>>>>> 99d0323c91f92b5305c6ed38bc03055a06e10960

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

    path:'Guiarentar',
    component:GuiarentarComponent

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
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'Remate',
    component: RematehipotecarioComponent
  },
  {
    path: 'EvitaFraude',
    component: EvitafraudeComponent
  },
  {
    path: 'QuieresComprar',
    component: QuierescomprarComponent
  },
  {
<<<<<<< HEAD
    path: 'QuieresVender',
    component: QuieresvenderComponent
=======
       path:'inmobiliarias',
       component: InmobiliariasComponent

  },
  {
    path:'novedadesactulidad',
    component:NovedadesactulidadComponent


>>>>>>> 99d0323c91f92b5305c6ed38bc03055a06e10960
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
