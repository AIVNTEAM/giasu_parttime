import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BentimviecRoutingModule } from './bentimviec-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from "@angular/forms";
import { PageHeaderModule } from './../../shared';
// import { PaginatorComponent } from './../../shared/paginator/paginator.component';
import { ViewComponent } from './view/view.component';
import { PaginateService } from '../shared/paginate/paginate.service';
import { SharedModule } from './../../shared/shared.module';
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
    BentimviecRoutingModule,
    PageHeaderModule,
    TranslateModule,
    FormsModule,
    SharedModule
    // PaginateModule
  ],
  providers: [PaginateService],

})
export class BentimviecModule { }
