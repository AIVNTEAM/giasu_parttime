import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

import { config } from "../config";
import { AppService } from "../app.service";

@Injectable()
export class AuthGuard implements CanActivateChild {

	constructor
  (
    private appService: AppService,
    private router: Router
  ) {}

  //CongThanh: ham nay tra ve True => cho phep truy cap route, nguoc lai ko
  canActivateChild() {
    return this.checkAuth();
  }

  //CongThanh: kiem tra trong localStorge co token va user chua?
  //neu co va kie tra co quyen truy cap thi tra ve true
  //khi dang nhap thanh cong thi se luu token va user trong localstorage
  checkAuth() {
    var token = config.get('AUTH_TOKEN', '');
    var user =  config.get('CURRENT_USER','');

    //kiem tra neu ko co token va user chua ton tai tra ve false
    if(token == '' || user == '')
    {
      this.router.navigate(['admin/auth/login']);
      return false;
    }

    this.appService.get('users/check').subscribe((res:any) =>
    {
      if(res.status == 401) //401: khong co quyen truy cap
      {
        this.router.navigate(['admin/auth/login']);
        return false;
      }
    });

    return true;
  }
}