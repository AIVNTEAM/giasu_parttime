import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { QuantrintvRoutingModule } from './quantrintv-routing.module';
import { QuantrintvComponent } from './quantrintv.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import {Auth_ntvGuard} from "../shared/guards/auth-ntv-guard";

@NgModule({
    imports: [
        CommonModule,
        QuantrintvRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [QuantrintvComponent, SidebarComponent, HeaderComponent],
    providers: [
    	Auth_ntvGuard
    ]
})
export class QuantrintvModule {}
