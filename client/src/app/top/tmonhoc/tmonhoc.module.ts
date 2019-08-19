import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmonhocRoutingModule } from './tmonhoc-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    TmonhocRoutingModule
  ]
})
export class TmonhocModule { }
