import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { QuantrintdRoutingModule } from './quantrintd-routing.module';
import { QuantrintdComponent } from './quantrintd.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import {Auth_ntdGuard} from "../shared/guards/auth-ntd-guard";

@NgModule({
    imports: [
        CommonModule,
        QuantrintdRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [QuantrintdComponent, SidebarComponent, HeaderComponent],
    providers: [
    	Auth_ntdGuard
    ]
})
export class QuantrintdModule {}
