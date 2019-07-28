import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constant} from "./constant";

@Injectable({
  providedIn: 'root'
})
export class DiachiService {

  private _tinhUrl = constant.BASE_URL + "api/tinh/";
  private _huyenUrl = constant.BASE_URL + "api/huyen/";
  private _xaUrl = constant.BASE_URL + "api/xa/";
  constructor(private http: HttpClient) { }

  getAllTinhs(){
    return this.http.get<any>(this._tinhUrl);
  }  

  getHuyentheoTinh(id){
  	return this.http.get<any>(this._huyenUrl + id);
  }

  getXatheoHuyen(id){
  	return this.http.get<any>(this._xaUrl  + id);
  }
}
