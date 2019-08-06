import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
//CongThanh: test voi guard don gian
import {AuthGuard} from "../shared/guards/auth-guard";
// import {AuthGuard} from "../shared/guard";

const routes: Routes = [
    {
        path: '',
        canActivateChild: [AuthGuard],
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'monhoc', loadChildren: './monhoc/monhoc.module#MonhocModule' },
            { path: 'lop', loadChildren: './lop/lop.module#LopModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'message', loadChildren: './message/message.module#MessageModule' },
            { path: 'giasu-a', loadChildren: './giasu/giasuad.module#GiasuAdModule' },
            // { path: 'bentuyendung', loadChildren: './bentuyendung/bentuyendung.module#BentuyendungModule' },
            // { path: 'danhmucviec', loadChildren: './danhmucviec/danhmucviec.module#DanhmucviecModule' },
            { path: 'congviec', loadChildren: './congviec/congviec.module#CongviecModule' },
            { path: 'viec', loadChildren: './viec/viec.module#ViecModule' },
            { path: 'bookings', loadChildren: './booking/booking.module#BookingModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
