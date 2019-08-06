import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { GiasuService } from './giasu.service';
import { GiasuAdRoutingModule } from './giasuad-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
  ListComponent,
  	FormComponent,
  	ViewComponent],
  imports: [
    CommonModule,
    GiasuAdRoutingModule,
    FormsModule
  ],
  providers: [GiasuService],
})
export class GiasuAdModule { }
