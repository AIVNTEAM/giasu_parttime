import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { ViecRoutingModule } from './viec-routing.module';
import { DangviecComponent } from './dangviec/dangviec.component';
import { ViecService } from './viec.service';
import { CommonService } from '../../shared/common.service';

@NgModule({
  declarations: [DangviecComponent],
  imports: [
    CommonModule,
    ViecRoutingModule,
    FormsModule
  ],
  providers: [
  	ViecService,
  	CommonService
  ]
})
export class CViecModule { }
