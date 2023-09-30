import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers.component';

@NgModule({
  declarations: [
    BrokersComponent
  ],
  imports: [
    CommonModule,
    BrokersRoutingModule
  ]
})
export class BrokersModule { }
