import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UsersService } from './users.service';
import { UsersRoutingModule } from './users-routing.module';
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
    UsersRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
})
export class UsersModule { }