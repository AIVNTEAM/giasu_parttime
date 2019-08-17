import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LockedComponent } from './locked/locked.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import {routing} from "./auth.routing";
import {AuthComponent } from './auth.component';
import {FormsModule} from "@angular/forms";
import {LogoutComponent} from "./logout.component";
import {SharedModule} from "../shared/shared.module";
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from "./../shared/auth.service";
import { LoaderService } from "./../shared/loader.service";
import {LoaderInterceptor} from "./../shared/loader-interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    SharedModule,
    TranslateModule
  ],
  declarations:
  [
      LoginComponent, LogoutComponent, LockedComponent,
      RegisterComponent, ForgotComponent, AuthComponent
  ],
  providers : [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }]
})
export class AuthModule { }
