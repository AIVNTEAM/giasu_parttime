import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constant} from "./constant";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _registerUrl = constant.BASE_URL + "api/register";
  private _loginUrl = constant.BASE_URL + "api/login";

  constructor( private http: HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  //CongThanh 14/07/19 chua hieu lam ham nay??? voi !! chac la tra ve true - false
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
