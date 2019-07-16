import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfontvComponent } from './infontv.component';

const routes: Routes = [
    {
        path: '', component: InfontvComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InfontvRoutingModule {
}
