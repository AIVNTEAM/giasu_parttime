import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutModule } from "./layouts/default-layout.module";
import { TopRoutingModule } from './top-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopRoutingModule,
    DefaultLayoutModule
  ]
})
export class TopModule { }
