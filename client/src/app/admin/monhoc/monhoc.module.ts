import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MonhocService } from './monhoc.service';
import { MonhocRoutingModule } from './monhoc-routing.module';
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
    MonhocRoutingModule,
    FormsModule
  ],
  providers: [MonhocService],
})
export class MonhocModule { }
