import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constant} from "../../shared/constant";

@Injectable({
  providedIn: 'root'
})
export class ViecService {

  private _listUrl = constant.BASE_URL + "api/admin/viec/";
  private _postUrl = constant.BASE_URL + "api/admin/viec/save";
  private _putUrl = constant.BASE_URL + "api/admin/viec/update";
  private _detailUrl = constant.BASE_URL + "api/admin/viec/";
  private _delUrl = constant.BASE_URL + "api/admin/viec/";
  
  constructor(private http: HttpClient) { }
  
  getAlls(){
  	return this.http.get<any>(this._listUrl);
  }

  create(data){
    return this.http.post<any>(this._postUrl, data);
  }

  update(data){
    return this.http.put<any>(this._putUrl, data);
  }

  get(id){
  	return this.http.get(this._detailUrl + id);
  }
  
  del(id){
    return this.http.delete(this._delUrl + id);
  }
}
