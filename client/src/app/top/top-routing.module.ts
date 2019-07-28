import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultLayoutComponent} from "./layouts/default-layout.component";

const routes: Routes = [
	{
		  path: '',
    	component: DefaultLayoutComponent, 
    	children:
    	[
    		{ path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full'},
        { path: 'search', loadChildren: './search/search.module#SearchModule' },
        { path: 'giasu', loadChildren: './giasu/giasu.module#GiasuModule' },
        { path: 'cviec', loadChildren: './viec/viec.module#CViecModule' },
    	]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRoutingModule { }
