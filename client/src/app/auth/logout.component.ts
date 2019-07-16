import { Component, OnInit } from '@angular/core';
import {AppService} from "../shared/app.service";
import {Router} from "@angular/router";
import {config} from "../shared/config";

@Component({
  selector: 'app-logout',
  template:''
})
export class LogoutComponent implements OnInit
{
  constructor
  (
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit()
  {
    // this.appService.get('users/logout').subscribe((res:any) =>
    // {
    //   if(res.status == 200)
    //   {
        config.del('AUTH_TOKEN');
        config.del('CURRENT_USER');
        config.del('ROLE_USER');
    //   }
    // });
    this.router.navigate(['admin/auth/login']);
  }
}
