import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constant} from "../../shared/constant";

@Injectable({
  providedIn: 'root'
})
export class GiasuService {

  
  private _registerUrl = constant.BASE_URL + "api/giasu/register";
  private _loginUrl = constant.BASE_URL + "api/login";

  constructor( private http: HttpClient) { }

  dangky(user){
    return this.http.post<any>(this._registerUrl,user);
  }
}
