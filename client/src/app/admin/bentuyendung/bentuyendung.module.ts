import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BentuyendungRoutingModule } from './bentuyendung-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from "@angular/forms";
import { PageHeaderModule } from './../../shared';
// import { PaginatorComponent } from './../../shared/paginator/paginator.component';
import { ViewComponent } from './view/view.component';
import { PaginateService } from '../shared/paginate/paginate.service';
// import { PaginateModule } from "../shared/paginate/paginate.module";
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
  	ListComponent, 
  	FormComponent, 
  	ViewComponent,
  	// PaginatorComponent
  ],
  imports: [
    CommonModule,
    BentuyendungRoutingModule,
    PageHeaderModule,
    TranslateModule,
    FormsModule,
    SharedModule
    // PaginateModule
  ],
  providers: [PaginateService],

})
export class BentuyendungModule { }
