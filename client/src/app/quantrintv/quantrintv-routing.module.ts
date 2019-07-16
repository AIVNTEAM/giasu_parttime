import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuantrintvComponent } from './quantrintv.component';
//CongThanh: test voi guard don gian
import {Auth_ntvGuard} from "../shared/guards/auth-ntv-guard";
// import {Auth_ntvGuard} from "../shared/guard";

const routes: Routes = [
    {
        path: '',
        canActivateChild: [Auth_ntvGuard],
        component: QuantrintvComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/infontv.module#InfontvModule' },
            { path: 'profile', loadChildren: './profile/ntvprofile.module#NtvProfileModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            // { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'message', loadChildren: './message/ntvmessage.module#NtvMessageModule' },
            // { path: 'bentimviec', loadChildren: './bentimviec/bentimviec.module#BentimviecModule' },
            // { path: 'bentuyendung', loadChildren: './bentuyendung/bentuyendung.module#BentuyendungModule' },
            // { path: 'danhmucviec', loadChildren: './danhmucviec/danhmucviec.module#DanhmucviecModule' },
            { path: 'viec', loadChildren: './viec/ntvviec.module#NtvViecModule' },
            // { path: 'bookings', loadChildren: './booking/booking.module#BookingModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuantrintvRoutingModule {}
