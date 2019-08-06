import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { CViecRoutingModule } from './tviec-routing.module';
import { DangviecComponent } from './dangviec/dangviec.component';
import { TViecService } from './viec.service';
import { CommonService } from '../../shared/common.service';

@NgModule({
  declarations: [DangviecComponent],
  imports: [
    CommonModule,
    CViecRoutingModule,
    FormsModule
  ],
  providers: [
  	TViecService,
  	CommonService
  ]
})
export class CViecModule { }
