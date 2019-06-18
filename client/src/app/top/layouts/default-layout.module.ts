import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
  	FooterComponent, 
  	HeaderComponent, 
  	DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]

})
export class DefaultLayoutModule { }
