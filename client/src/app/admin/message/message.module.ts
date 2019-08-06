import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MessageRoutingModule } from './message-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from "@angular/forms";
import { PageHeaderModule } from './../../shared';
import { ViewComponent } from './view/view.component';
// import { PaginatorComponent } from './../../shared/paginator/paginator.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
@NgModule({
  declarations: [
  	ListComponent, 
  	FormComponent, 
  	ViewComponent, 
  	// PaginatorComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    PageHeaderModule,
    TranslateModule,
    FormsModule, 
    FlashMessagesModule.forRoot()
  ]
})
export class MessageModule { }
