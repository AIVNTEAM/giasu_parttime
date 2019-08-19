import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constant} from "./constant";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _tinhUrl = constant.BASE_URL + "api/tinh/";
  private _huyenUrl = constant.BASE_URL + "api/huyen/";
  private _xaUrl = constant.BASE_URL + "api/xa/";
  private _monhocUrl = constant.BASE_URL + "api/monhoc/";
  private _lophocUrl = constant.BASE_URL + "api/lophoc/";
  private _congviecUrl = constant.BASE_URL + "api/congviec";

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

  getAllMonhocs(){
    return this.http.get<any>(this._monhocUrl);
  }

  getAllLophocs(){
    return this.http.get<any>(this._lophocUrl);
  }

  getCongviectheoLop(id){
    return this.http.get<any>(this._monhocUrl + id + '/viecs');
  }
}
