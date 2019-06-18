import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {PaginatorComponent} from './paginator/paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    
  ],
  exports: [
  	PaginatorComponent
  ]
})
export class SharedModule { }
