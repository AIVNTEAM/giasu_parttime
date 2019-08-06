import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LopService } from './lop.service';
import { LopRoutingModule } from './lop-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
@NgModule({
  declarations: [
  	ListComponent,
  	FormComponent,
  	ViewComponent
  ],
  imports: [
    CommonModule,
    LopRoutingModule,
    FormsModule
  ],
  providers: [LopService],
})
export class LopModule { }
