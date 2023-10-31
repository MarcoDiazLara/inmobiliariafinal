import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlanesComponent } from './planes/planes/planes.component';



const routes: Routes = [
{
  path: '',
  component: PlanesComponent
},

];
@NgModule({
  declarations: [

  ],
  imports: [CommonModule]
})
export class BlogRoutingModule { }