import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ViecService } from './viec.service';
import { ViecRoutingModule } from './viec-routing.module';
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
    ViecRoutingModule,
    FormsModule
  ],
  providers: [ViecService],
})

export class ViecModule { }
