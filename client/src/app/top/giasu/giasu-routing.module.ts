import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangkyComponent } from './dangky/dangky.component';

const routes: Routes = [
	// {path: '',	component: HomeComponent},
	{path: 'dangky', component: DangkyComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiasuRoutingModule { }
