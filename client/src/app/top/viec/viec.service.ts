import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constant} from "../../shared/constant";

@Injectable({
  providedIn: 'root'
})
export class ViecService {
  private _url = constant.BASE_URL + "api/viec/dangviec";
  private _monhocUrl = constant.BASE_URL + "api/monhoc/";
  constructor(private http: HttpClient) { }

  dangviec(viec){
  	return this.http.post<any>(this._url, viec);
  }

  getMonhoc(){
  	return this.http.get<any>(this._monhocUrl);
  }
}
