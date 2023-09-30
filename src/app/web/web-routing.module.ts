import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [

  {
    path:'',
    component:WebComponent
  },

  {
    path:'login',
    component:LoginComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
