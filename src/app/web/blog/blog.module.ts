import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebModule } from '../web.module';
import { RouterModule } from '@angular/router';
import { PlanesComponent } from './planes/planes/planes.component';





@NgModule({
  declarations: [
<<<<<<< Updated upstream
   
=======
    PlanesComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    RouterModule,
    WebModule
  ]
})
export class BlogModule { }
