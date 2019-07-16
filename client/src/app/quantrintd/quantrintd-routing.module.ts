import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuantrintdComponent } from './quantrintd.component';
//CongThanh: test voi guard don gian
import {Auth_ntdGuard} from "../shared/guards/auth-ntd-guard";
// import {Auth_ntdGuard} from "../shared/guard";

const routes: Routes = [
    {
        path: '',
        canActivateChild: [Auth_ntdGuard],
        component: QuantrintdComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/infontd.module#InfontdModule' },
            { path: 'profile', loadChildren: './profile/ntdprofile.module#NtdProfileModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            // { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'message', loadChildren: './message/ntdmessage.module#NtdMessageModule' },
            // { path: 'bentimviec', loadChildren: './bentimviec/bentimviec.module#BentimviecModule' },
            // { path: 'bentuyendung', loadChildren: './bentuyendung/bentuyendung.module#BentuyendungModule' },
            // { path: 'danhmucviec', loadChildren: './danhmucviec/danhmucviec.module#DanhmucviecModule' },
            { path: 'viec', loadChildren: './viec/ntdviec.module#NtdViecModule' },
            // { path: 'bookings', loadChildren: './booking/booking.module#BookingModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuantrintdRoutingModule {}
