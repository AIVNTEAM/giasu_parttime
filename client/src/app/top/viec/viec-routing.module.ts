import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangviecComponent } from './dangviec/dangviec.component';
const routes: Routes = [
	{path: 'dangviec', component: DangviecComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViecRoutingModule { }
