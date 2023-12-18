import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuenoRoutingModule } from './dueno-routing.module';
import { DuenoComponent } from './dueno.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';


@NgModule({
  declarations: [
    DuenoComponent,
    BienvenidaComponent,
  ],
  imports: [
    CommonModule,
    DuenoRoutingModule
  ]
})
export class DuenoModule { }
