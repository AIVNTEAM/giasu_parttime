import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

import { config } from "../config";
import { AppService } from "../app.service";

@Injectable()
export class Auth_ntvGuard implements CanActivateChild {

	constructor
  (
    private appService: AppService,
    private router: Router
  ) {}

  //CongThanh: ham nay tra ve True => cho phep truy cap route, nguoc lai ko
  canActivateChild() {
    // var token = config.get('AUTH_TOKEN', '');
    // var user =  config.get('CURRENT_USER','');
    // var role = config.get('ROLE_USER', '');

    // console.log('token' + token);
    // console.log('user' + user);
    // console.log('role' + role);
    // console.log('canActiveChild');
    return this.checkAuth();
    // return true;
  }

  //CongThanh: kiem tra trong localStorge co token va user chua?
  //neu co va kie tra co quyen truy cap thi tra ve true
  //khi dang nhap thanh cong thi se luu token va user trong localstorage
  checkAuth() {
    var token = localStorage.getItem('token');
    var user = JSON.parse(atob(token.split('.')[1]));
    var role = user.user.role;
    //kiem tra neu ko co token va user chua ton tai tra ve false
    if(token == '' || user == '')
    {
      this.router.navigate(['/auth/login']);
      return false;
    }

    // this.appService.get('users/check').subscribe((res:any) =>
    // {
    //   if(res.status == 401) //401: khong co quyen truy cap
    //   {
    //     this.router.navigate(['admin/auth/login']);
    //     return false;
    //   }
    // });
    //neu quyen admin = 1: cho vao
    if (role == 3){
      return true;
    } 
    window.alert("You don't have permission to view this page");
    return false;
  }
}