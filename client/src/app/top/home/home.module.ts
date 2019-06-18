import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { BrowseSectionComponent } from './browse-section/browse-section.component';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { TestimoninalSectionComponent } from './testimoninal-section/testimoninal-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BrowseJobsSectionComponent } from './browse-jobs-section/browse-jobs-section.component';

@NgModule({
  declarations: [
  	HomeComponent, 
  	SearchSectionComponent, 
  	IntroSectionComponent, 
  	BrowseSectionComponent, 
  	RegisterSectionComponent, 
  	TopSectionComponent, 
  	TestimoninalSectionComponent, 
  	BlogSectionComponent, BrowseJobsSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
