import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', loadChildren: './top/top.module#TopModule',data:{pageTitle: 'Top Module'}},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
  { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule',data:{pageTitle: 'Admin Module'}},
  { path: 'quantrintv', loadChildren: './quantrintv/quantrintv.module#QuantrintvModule',data:{pageTitle: 'Phần quản trị của người tìm việc'}},
  { path: 'quantrintd', loadChildren: './quantrintd/quantrintd.module#QuantrintdModule',data:{pageTitle: 'Phần quản trị của nhà tuyển dụng'}},
  { path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
