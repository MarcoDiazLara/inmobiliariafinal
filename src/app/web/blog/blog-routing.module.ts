import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
=======
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
>>>>>>> Stashed changes
})
export class BlogRoutingModule { }
