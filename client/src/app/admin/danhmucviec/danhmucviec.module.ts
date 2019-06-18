import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DanhmucviecRoutingModule } from './danhmucviec-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from "@angular/forms";
import { PageHeaderModule } from './../../shared';
import { SharedModule } from './../../shared/shared.module';
import { ViewComponent } from './view/view.component';
import { PaginateService } from '../shared/paginate/paginate.service';
// import { PaginateModule } from "../shared/paginate/paginate.module";

@NgModule({
  declarations: [
  	ListComponent, 
  	FormComponent, 
  	ViewComponent,
  	// PaginatorComponent
  ],
  imports: [
    CommonModule,
    DanhmucviecRoutingModule,
    PageHeaderModule,
    TranslateModule,
    FormsModule,
    SharedModule
    // PaginateModule
  ],
  providers: [PaginateService],

})
export class DanhmucviecModule { }
