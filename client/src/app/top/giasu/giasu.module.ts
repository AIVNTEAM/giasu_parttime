import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { GiasuRoutingModule } from './giasu-routing.module';
import { DangkyComponent } from './dangky/dangky.component';
import { GiasuService} from './giasu.service';
@NgModule({
  declarations: [DangkyComponent],
  imports: [
    CommonModule,
    GiasuRoutingModule,
    FormsModule
  ],
  providers: [
  	GiasuService
  ]
})
export class GiasuModule { }
