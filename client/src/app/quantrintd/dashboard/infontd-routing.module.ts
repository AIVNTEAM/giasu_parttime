import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfontdComponent } from './infontd.component';

const routes: Routes = [
    {
        path: '', component: InfontdComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfontdRoutingModule {
}
