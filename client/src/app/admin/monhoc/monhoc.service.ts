import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constant} from "../../shared/constant";

@Injectable({
  providedIn: 'root'
})
export class MonhocService {

  private _listUrl = constant.BASE_URL + "api/admin/monhoc/";
  private _postUrl = constant.BASE_URL + "api/admin/monhoc/save";
  private _putUrl = constant.BASE_URL + "api/admin/monhoc/update";
  private _detailUrl = constant.BASE_URL + "api/admin/monhoc/";
  private _delUrl = constant.BASE_URL + "api/admin/monhoc/";
  
  constructor(private http: HttpClient) { }
  
  getAlls(){
  	return this.http.get<any>(this._listUrl);
  }

  create(data){
    return this.http.post<any>(this._postUrl, data);
  }

  update(data){
    //vi put khong the chuyen du lieu FormData -> chuyen thanh POST
    // return this.http.put<any>(this._putUrl, data);
    return this.http.post<any>(this._putUrl, data);
  }

  get(id){
  	return this.http.get(this._detailUrl + id);
  }
  
  del(id){
    return this.http.delete(this._delUrl + id);
  }
}
