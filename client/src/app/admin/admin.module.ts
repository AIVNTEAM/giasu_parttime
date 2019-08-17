import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import {AuthGuard} from "../shared/guards/auth-guard";

import { LoaderService } from "./../shared/loader.service";
import {LoaderInterceptor} from "./../shared/loader-interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [AdminComponent, SidebarComponent, HeaderComponent],
    providers: [
    	AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        }
    ]
})
export class AdminModule {}
