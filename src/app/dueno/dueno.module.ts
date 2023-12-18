import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuenoRoutingModule } from './dueno-routing.module';
import { DuenoComponent } from './dueno.component';


@NgModule({
  declarations: [
    DuenoComponent,
  ],
  imports: [
    CommonModule,
    DuenoRoutingModule
  ]
})
export class DuenoModule { }
