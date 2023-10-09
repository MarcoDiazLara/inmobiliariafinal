import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers.component';
import { PerfilbrokersComponent } from './perfilbrokers/perfilbrokers.component';

@NgModule({
  declarations: [
    BrokersComponent,
    PerfilbrokersComponent
  ],
  imports: [
    CommonModule,
    BrokersRoutingModule
  ]
})
export class BrokersModule { }
