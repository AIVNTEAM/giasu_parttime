import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import  {catchError} from 'rxjs/operators';
import  {throwError} from 'rxjs';

import {Router} from "@angular/router";
import {config} from "./config";
import {constant} from "./constant";
// import {TranslationPipe} from "./translation/translation.pipe";
import { Title, Meta }     from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';
import {Moment} from "moment";

@Injectable()
export class AppService {

  public filesUpload:any = [];
  public current_user: any;
  public current_offset_blog = 0;
  private limitRecord = constant.LIMIT_RECORD_ON_PAGE;
  private urlSetting = constant.UrlSeting;
  private searchParams = constant.SearchParams;
  public constant;
  private headElement: HTMLElement;
  private metaDescription: HTMLElement;
  private robots: HTMLElement;

  private componentMethodCallTotalTour = new Subject<any>();
  private binParamsTour = new Subject<any>();
  private is_loading_pc = false;
  private is_loading_sp = false;

  // Observable string streams
  //de dc thong bao thi component can subscribe vao
  public componentMethodCalledCountTour = this.componentMethodCallTotalTour.asObservable();
  public getParamsTour = this.binParamsTour.asObservable();
  
  //CongThanh: goi message len observable de truyen den cac subscriber
  bindCountTour(param)
  {
    this.componentMethodCallTotalTour.next(param);
  }

  bindParamsTour(param)
  {
    this.binParamsTour.next(param);
  }

  constructor(
      public http:HttpClient,
      private router:Router,
      private titleService: Title,
      private metaService: Meta
  )
  {
    this.constant = constant;
  }

  checkLoading() {
    var curUrl = window.location.href;
    var baseUrl = constant.BASE_URL;
    let is_admin = curUrl.indexOf("admin");
    let is_sp = curUrl.indexOf("sp");
    if(is_sp > 0) {
      this.is_loading_sp = curUrl == baseUrl+'sp' ? true : false;
    }
    //check response in admin page then redirect if error
    //check device with admin page
    if(is_admin < 0 && is_sp < 0) {
      this.is_loading_pc = curUrl == baseUrl ? true : false;
    }
  }

  // get(url, data?) {
  //   if (typeof(data) == "undefined") {
  //     data = {};
  //   }
  //   data['token'] = config.get('AUTH_TOKEN', '');

  //   let params = this.convertQueryString(data);
  //   url += '?' + params;
  //   this.checkLoading();
  //   return this.http.get(constant.BASE_URL + 'api/' + url).toPromise().then(this.handleSuccess).catch(this.handleError);
  // }

  //CongThanh sua lai function get
  get(url, data?){
    if (typeof(data) == "undefined"){
      data = {};
    }
    data['token'] = config.get('AUTH_TOKEN', '');

    //chuyen params thanh dang query nhu par=1&par2=2....
    let params = this.convertQueryString(data);
    url += '?' + params;

    //tra ve mot Observable
    return this.http.get(constant.BASE_URL + 'api/' + url)
                  .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
  
  post(url, data, listFileFields:any = []) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let formData:FormData = new FormData();
    formData.append('token', config.get('AUTH_TOKEN', ''));

    //confirm = false
    if ((!data['form_confirm'] || data['form_confirm'] == 'false') && listFileFields) {
      for (var field of listFileFields) {
        if (typeof this.filesUpload[field] != 'undefined') {
          for (let i = 0; i < this.filesUpload[field].length; i++) {
            var file = this.filesUpload[field][i];
            formData.append(field + "[]", file, file.name);
          }
        }
        if (typeof this.filesUpload[field] == 'undefined' || !this.filesUpload[field] || (this.filesUpload[field] && !this.filesUpload[field].length)) {
          formData.append(field, '');
        }
      }
    }
    //confirm = true
    if (data['form_confirm']) {
      for (var field of listFileFields) {
        if (typeof this.filesUpload[field] == 'undefined' || !this.filesUpload[field] || (this.filesUpload[field] && !this.filesUpload[field].length)) {

          if (typeof data['id'] != 'undefined' && data['id']) {
            formData.append(field, 'confirm_file');
          } else {
            formData.append(field, '');
          }
        } else {
          formData.append(field, 'confirm_file');
        }
      }
    }
    for (var key in data)
    {
      /* Bool transform { */
      if(data[key] === true) data[key] = 1;
      if(data[key] === false) data[key] = 0;
      /* Bool transform } */

      if(data[key] === null) data[key] = '';

      formData.append(key, data[key]);
    }
    console.log('data truoc khi dua vao formData');
    console.log(data);
    console.log('formData trong ham post cua app.service la: ');
    console.log(formData);

    var currentService = this;
    return this.http.post(constant.BASE_URL + 'api/' + url, formData).toPromise().then(function(res) {
      if (typeof currentService.filesUpload[field] != 'undefined') {
        currentService.filesUpload[field] = false;
      }
      return currentService.handleSuccess(res);
    }).catch(this.handleError);
  }

  handleSuccess(res:any) {
    if(res.status == 200) {
      
    }
    return res;
  }

  handleError(res:any) {
    // check page is admin or not
    var is_admin = window.location.href.indexOf("admin");
    
    if (res.status == 400 && is_admin > -1) {
      window.location.href = constant.BASE_URL + "admin/auth/login";
      return;
    } else if ((res.status == 401 || res.status == 0) && is_admin > -1) {
      alert('再度、ログインしてください');
      setTimeout(function(){ window.location.href = constant.BASE_URL + 'admin/auth/login'; }, 1000);
      // Redirect auth here
    } else if (res.status == 500 && is_admin > -1) {
      alert('システムエラーです');
      // Redirect auth here
    } else if(res.status == 404) {
      window.location.href = constant.BASE_URL + "page/not-found";
      return;
    } else if (res.status == 422 && is_admin > -1) {
      // Remove error
      var messageAlert = res.json().message;
      // if (!messageAlert) {messageAlert = new TranslationPipe().transform('Please check your input data!');}

      

     
    }

    return res;
  }

  convertDataToList(data, key, value) {
    var result = {};
    for (var index in data) {
      result[data[index][key]] = data[index][value];
    };
    return result;
  }

  convertDataToArray(data, key) {
    var result = [];
    for (var index in data) {
      // if(data[index][key] && $.inArray( data[index][key], result ) < 0){
      if(data[index][key]){
        result.push(data[index][key]);
      }
    };
    return result;
  }

  convertQueryString(data) {
    var str = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
    }
    return str.join("&");
  }


  generateQuery(filter:Object = {}, page:number = 1, paramsQuery:Object={}, filterSelect= []) {
    var paramsDefault = {
      'paging': 1,
      'limit': this.limitRecord
    };
    var paramsMergeToDefault = {};
    var filterQuery = {};
    var paramsResult = {};
    for (var key in filter) {
      if (filter[key] != '[null]' && filter[key] != '') {
        var index = filterSelect.indexOf(key);
        if(index >= 0) {
          filterQuery[key] = filter[key];
        } else {
          filterQuery[key] = '*' + filter[key] + '*';
        }
      }
    }
    Object.assign(paramsMergeToDefault, paramsDefault, paramsQuery);
    Object.assign(paramsResult, paramsMergeToDefault, filterQuery);
    paramsResult['page'] = page;

    return paramsResult;
  }

  trans(str) {
    // return new TranslationPipe().transform(str);
  }

  checkGroup(group) {
    this.current_user = JSON.parse(config.get('CURRENT_USER',''));
    return this.current_user.group == constant[group];
  }

  //CongThanh: tu cac cap tham so chuyen thanh duong dan URL
  //vi du key=abc, tinh=10, huyen=123 
  // se chuyen thanh URL dang /key-abc/tinh-10/huyen-123
  genarateUrl(params:Object={}, arrUrl = null) {
    var url = arrUrl ? arrUrl : '';
    let other = false;
    let urlSetting = this.urlSetting;
    for (let item of urlSetting)
    {
      for (let key in params)
      {
        switch (item) {
          case 'key':
            if(key == 'key_word' && params[key] != '')
            {
              url += '/key-'+decodeURI(params[key]);
            }
            break;
          case 'tinh':
            if(key == 'tinh_id' && params[key] != '')
            {
              url += '/tinh-'+params[key];
            }
            break;
          case 'huyen':
            if(key == 'huyen_id' && params[key] != '')
            {
              url += '/huyen-'+params[key];
            }
            break;
          case 'xa':
            if(key == 'xa_id' && params[key] != '')
            {
              url += '/xa-'+params[key];
            }
            break;
          case 'monhoc':
            if(key == 'monhoc_id' && params[key] != '')
            {
              url += '/monhoc-'+params[key];
            }
            break;
          case 'caphoc':
            if(key == 'caphoc_id' && params[key] != '')
            {
              url += '/caphoc-'+params[key];
            }
            break;
          case 'hinhthuc':
            if(key == 'hinhthuc_id' && params[key].length != '')
            {
              url += '/hinhthuc-'+params[key];
            }
            break;          
          case 'ngay':
            if(key == 'ngay_bat_dau' && params[key] != '')
            {
              var date = this.modifieldDate(params[key]);
              url += '/ngay-'+date;
            }
            break;
          case 'sort':
            if(key == 'sort' && params[key] != '')
            {
              url += '/sort-'+params[key];
            }
            break;
          case 'page':
            if(key == 'page' && params[key] != '' && params[key] != 1 )
            {
              var i = url.indexOf('page-');
              if(i < 0) {
                url += '/page-'+params[key];
              }
            }
            break;
          default:
            break
        }
      }
    }
    return url;
  }

  //CongThanh: tu duong dan URL ( /key-abc/tinh-10/huyen-123)
  //phan tich ra cac cap tham so: key=abc, tinh=10, huyen=123
  exportUrl(params:Object) {
    let result = this.resetParams(this.searchParams);
    let other = '';
    if(params)
    {
      for (let key in params)
      {
        var i = params[key].indexOf('-');
                  
        var prefix = params[key].slice(0, i);
        var value = params[key].slice(i+1);

        switch (prefix) {
          case 'key':
            if(value != '')
            {
              result.key_word = decodeURI(value);
            }
            break;
          case 'tinh':
            if(value != '')
            {
              result.tinh_id = value;
            }
            break;
          case 'huyen':
            if(value != '')
            {
              result.huyen_id = value;
            }
            break;
          case 'xa':
            if(value != '')
            {
              result.xa_id = value;
            }
            break;
          case 'monhoc':
            if(value != '')
            {
              result.monhoc_id = value;
            }
            break;
          case 'caphoc':
            if(value != '')
            {
              result.caphoc_id = value;
            }
            break;
          case 'hinhthuc':
            if(value != '')
            {
              result.hinhthuc_id = value;
            }
            break;  
          case 'ngay':
            if(value != '')
            {
              result.ngay_bat_dau = value;
            }
            break;           
          case 'sort':
            if(value != '')
            {
              result.sort = value;
            }
            break;
          case 'page':
            if(value != '')
            {
              result.page = value;
            }
            break;
        }
      }
    }
    return result;
  }

  exportStringBreakCum(params:Object) {
    let result = [];
    let last = '';
    let lastDefault = '';
    let lastTemp = '';
    let check = true;
    let option = [];
    let date;
    if (params) {
      for (let key in params) {
        switch (key) {
          case 'key':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'key-' + params[key][0]];
              lastDefault = params[key][1]+'スキー・スノーボードツアー';
              result.push(arr);
            }
            break;
          case 'prefecture':
            if(params[key].length > 0)
            {
              result.push([params[key][1]+'発', 'departure_pref-'+params[key][0]]);
              lastDefault = params[key][1]+'発スキー・スノーボードツアー';
            }

            break;
          case 'city':
            if(params[key].length > 0) {
              result.push([params[key][1]+'発', 'departure_city-' + params[key][0]]);
              lastDefault = params[key][1]+'発スキー・スノーボードツアー';
            }
            break;
          case 'region':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'ski_region-' + params[key][0]];
              result.push(arr);
              lastDefault = params[key][1]+'スキー・スノーボードツアー';
            }
            break;
          case 'area':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'ski_area-' + params[key][0]];
              result.push(arr);
              lastDefault = params[key][1]+'スキー・スノーボードツアー';
            }
            break;
          case 'ski_place':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'ski-' + params[key][0]];
              result.push(arr);
              lastDefault = params[key][1]+'スキー・スノーボードツアー';
            }
            break;
          case 'tour_staying':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'stay-' + params[key][0]];
              result.push(arr);
              lastDefault = params[key][1]+'スキー・スノーボードツアー';
            }
            break;
          case 'number_of_room':
            if(params[key].length > 0) {
              check = false;
              lastTemp = lastTemp + params[key][1];
            }
            break;
          case 'tour_company':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'travel_agency-' + params[key][0]];
              result.push(arr);
              lastDefault = params[key][1]+'スキー・スノーボードツアー';
            }
            break;
          case 'move':
            if(params[key].length > 0) {
              var tmp = '';
              var tmpName = '';
              for (let item of params[key]) {
                tmp += item[1] + '-';
                tmpName += item[0] + '・';
              }
              tmp = tmp.slice(0, -1);
              tmp = 'move-' + tmp;
              tmpName = tmpName.slice(0, -1);
              var arr = [];
              arr[0] = tmpName;
              arr[1] = tmp;
              result.push(arr);
              lastDefault = tmpName+'で行く　スキー・スノーボードツアー';
            }
            break;
          case 'type':
            if(params[key].length > 0) {
              var tmp = '';
              var tmpName = '';
              for (let item of params[key]) {
                tmp += item[0] + '-';
                tmpName += item[1] + '・';
              }
              tmp = tmp.slice(0, -1);
              tmp = 'tour_type-' + tmp;
              tmpName = tmpName.slice(0, -1);
              var arr = [];
              arr[0] = tmpName;
              arr[1] = tmp;
              result.push(arr);
              lastDefault = tmpName+'スキー・スノーボードツアー';
            }
            break;
          case 'lift_ticket':
            if(params[key].length > 0) {
              lastTemp = lastTemp + params[key][1];
              check = false;
            }
            break;
          case 'rental_type':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'ren-' + params[key][0]];

              if(params['lift_ticket'].length > 0)
              {
                lastTemp = lastTemp +'・'+ params[key][1];
              }
              else
              {
                lastTemp = lastTemp + params[key][1];
              }
              check = false;
            }
            break;
          case 'is_book':
            if(params[key].length > 0) {
              var arr = [params[key][1], 'ren-' + params[key][0]];
              lastTemp = lastTemp + params[key][1];
              check = false;
            }
            break;
          case 'tour_time_start':
            if(params[key].length > 0)
            {
              var tmpDate = params[key][0].split('/');
              var curYear = parseInt(moment().format('YYYY'));
              if(tmpDate[0] && tmpDate[1] && tmpDate[2])
              {
                tmpDate[0] = parseInt(tmpDate[0]);
                tmpDate[1] = parseInt(tmpDate[1]);
                tmpDate[2] = parseInt(tmpDate[2]);
                var strDate = tmpDate[0] + '年' + tmpDate[1] + '月' + tmpDate[2];
                if(tmpDate[0] == curYear)
                {
                  strDate = tmpDate[1] + '月' + tmpDate[2];
                }

                if(params['is_book'].length <= 0 && params['rental_type'].length <= 0
                    && params['lift_ticket'].length <= 0 && params['number_of_room'].length <= 0)
                {
                  last = strDate + '日スキー・スノーボードツアー';
                  if(params['region'].length > 0 ||params['area'].length > 0 || params['ski_place'].length > 0)
                  {
                    last = strDate + '日スキー・スノーボードツアー';
                  }
                } else {
                  result.push([strDate + '日 ', tmpDate[0]+tmpDate[1]+tmpDate[2]]);
                }
              }
              else if(tmpDate[0] && tmpDate[1])
              {
                tmpDate[0] = parseInt(tmpDate[0]);
                tmpDate[1] = parseInt(tmpDate[1]);
                var strDate = tmpDate[0] + '年' + tmpDate[1] + '月';
                if(tmpDate[0] == curYear)
                {
                  strDate = tmpDate[1] + '月';
                }
                if(typeof params['is_book'] !== 'undefined' && params['is_book'].length <= 0 && params['rental_type'].length <= 0
                    && params['lift_ticket'].length <= 0 && params['number_of_room'].length <= 0)
                {
                  last = strDate + 'スキー・スノーボードツアー';
                  if(params['region'].length > 0 ||params['area'].length > 0 || params['ski_place'].length > 0)
                  {
                    last = strDate + 'スキー・スノーボードツアー';
                  }
                } else {
                  result.push([strDate, tmpDate[0]+tmpDate[1]]);
                }
              }
              check = false;
            }
            break;
        }
      }
    }
    if(check && result.length > 0)
    {
      result.splice(result.length - 1, 1);
      check = false;
    }
    else if (lastTemp)
    {
      last = lastTemp + 'で行くスキー・スノボードツアー';
    }
    if(!last && lastDefault)
    {
      last = lastDefault;
      if(check)
      {
        result.splice(result.length - 1, 1);
      }
    }
    option.push(result);
    option.push(last);
    return option;
  }

  exportBreakCumSP(params:Object) {
    let result = {
      date: '',
      departure: '',
      stay: '',
    };
    let departure = '';
    let stay = '';
    if (params) {
      for (let key in params) {
        switch (key) {
          case 'prefecture':
            if(params[key].length > 0)
            {
              departure = params[key][1]+'発';
            }
            break;
          case 'city':
            if(params[key].length > 0) {
              departure = params[key][1]+'発';
            }
            break;
          case 'area':
            if(params[key].length > 0) {
              stay = params[key][1]+'エリア';
            }
            break;
          case 'ski_place':
            if(params[key].length > 0) {
              stay = params[key][1];
            }
            break;
          case 'move':
            if(params[key].length > 0) {
              var tmpName = '';
              for (let item of params[key]) {
                tmpName += item[0] + '利用' + '・';
              }
              tmpName = tmpName.slice(0, -1);
              if(departure)
              {
                departure += '・' + tmpName;
              }
              else
              {
                departure = tmpName;
              }
            }
            break;
          case 'tour_time_start':
            if(params[key].length > 0)
            {
              var tmpDate = params[key][0].split('/');
              var curYear = parseInt(moment().format('YYYY'));
              if(tmpDate[0] && tmpDate[1] && tmpDate[2])
              {
                tmpDate[0] = parseInt(tmpDate[0]);
                tmpDate[1] = parseInt(tmpDate[1]);
                tmpDate[2] = parseInt(tmpDate[2]);
                if(tmpDate[0] == curYear)
                {
                  result.date = tmpDate[1] + '月' + tmpDate[2] + '日';
                }
                else
                {
                  result.date = tmpDate[0] + '年' + tmpDate[1] + '月' + tmpDate[2] + '日';
                }
              }
              else if(tmpDate[0] && tmpDate[1])
              {
                tmpDate[0] = parseInt(tmpDate[0]);
                tmpDate[1] = parseInt(tmpDate[1]);
                if(tmpDate[0] == curYear)
                {
                  result.date = tmpDate[1] + '月発スキー・スノーボードツアー';
                }
                else
                {
                  result.date = tmpDate[0] + '年' + tmpDate[1] + '月発スキー・スノーボードツアー';
                }
              }
            }
            break;
        }
      }
    }
    result.departure = departure;
    result.stay = stay;
    return result;
  }
  //set title for page
  setTitle( newTitle: string, metaTitle: string = '') {
    
    if(!metaTitle) metaTitle = newTitle;
    this.metaService.addTag({ property: "og:title", content: metaTitle });
    this.titleService.setTitle( newTitle );
    this.setLink();
  }
  public setMetaIndex(content: string) {
    
  }
  public setLink() {

    var curUrl = window.location.href;
    var baseUrl = constant.BASE_URL;
    var sp = curUrl.indexOf("/sp");
    var href = '',
        rel = '';
    if(sp >= 0)
    {
      var re = new RegExp('/sp', 'g');
      href = curUrl.replace(re, '');
      rel = 'canonical'
    }
    else {
      var re = new RegExp(baseUrl, 'g');
      href = curUrl.replace(re, baseUrl+'sp/');
      rel = 'alternate';
    }
    
  }
  public setMetaRobots(content: string) {
    this.metaService.addTag({ name: 'robots', content: content });
  }
  public removeMetaTag() {
   
  }

  public setMeta(params=[])
  {
    for (let key in params)
    {
      if(params[key].name == 'description')
      {
        
        this.metaService.addTag({ property: "og:description", content: params[key].content });
      }
      this.metaService.addTag({ name: params[key].name, content: params[key].content });
    }
  }
  
  // if exist keep params and keep params is false
  // reset params before searching
  resetParams(params) {
    params.key_word = '',
    params.tour_departures = '';
    params.city_id = '';
    params.region_id = '';
    params.area_id = '';
    params.ski_place_id = '';
    params.tour_staying = [];
    params.number_of_room = '';
    params.tour_company_id = '';
    params.fee = '';
    params.transportation = [];
    params.is_book = '';
    params.lift_ticket = '';
    params.rental_type = '';
    params.tour_time_start = '';
    params.date = '';
    params.type = [];
    params.sort = '';
    params.page = '';
    return params;
  }
  //get year from current month
  getDateTourTimeStart(month = constant.MONTH_11) {
    var thisMonth = parseInt(moment().format('MM'));
    var thisYear = moment().format('YYYY');
    var year = parseInt(thisYear);
    //check this month with five month season
    // then check month params
    month = parseInt(month);
    if(thisMonth >= 1 && thisMonth <= 8)
    {
      if(month >= 10)
      {
        year = year -1;
      }
    }
    else
    {
      if(month <= 5)
      {
        year = year + 1;
      }
    }
    var strMonth = this.getMonth(month);
    var tour_time_start = year + '/' + strMonth;
    return tour_time_start;
  }
  getMonth(month){
    let strMonth;
    strMonth = month < 10 ? '0'+ month : month;
    return strMonth;
  }
  getTitleSearch(params:Object)
  {
    let titleParams = constant.paramTitle;
    var result = '';
    if(params)
    {
      for(let title in titleParams)
      {
        for (let param in params)
        {
          if(title == param)
          {
            switch (param)
            {
              case 'prefecture':
                if(params[param].length > 0 && params['city'].length <= 0)
                {
                  result += params[param][1];
                }

                break;
              case 'city':
                if(params[param].length > 0) {
                  result += params[param][1] + '発';
                }
                break;
              case 'region':
                if(params[param].length > 0 && params['ski_place'].length <= 0 && params['area'].length <= 0 && params['tour_staying'].length <= 0) {
                  result += params[param][1];
                }
                break;
              case 'area':
                if(params[param].length > 0 && params['ski_place'].length <= 0 && params['tour_staying'].length <= 0) {
                  result += params[param][1];
                }
                break;
              case 'ski_place':
                if(params[param].length > 0 && params['tour_staying'].length <= 0) {
                  result += params[param][1];
                }
                break;
              case 'tour_staying':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'number_of_room':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'tour_company':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'move':
                if(params[param].length > 0) {
                  var tmpName = '';
                  for (let item of params[param]) {
                    tmpName += item[0] + '・';
                  }
                  tmpName = tmpName.slice(0, -1);
                  result += tmpName;
                }
                break;
              case 'type':
                if(params[param].length > 0) {
                  var tmpName = '';
                  for (let item of params[param]) {
                    tmpName += item[1] + '・';
                  }
                  tmpName = tmpName.slice(0, -1);
                  var arr = [];
                  arr[0] = tmpName;
                  if(params['ski_place'].length > 0)
                  {
                    result += 'の'+tmpName;
                  } else {
                    result += tmpName;
                  }
                }
                break;
              case 'lift_ticket':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'rental_type':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'is_book':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'tour_time_start':
                  if(params[param].length > 0)
                  {
                      var tmpDate = params[param][0].split('/');
                      var curYear = parseInt(moment().format('YYYY'));
                      if(tmpDate[0] && tmpDate[1] && tmpDate[2])
                      {
                          tmpDate[0] = parseInt(tmpDate[0]);
                          tmpDate[1] = parseInt(tmpDate[1]);
                          tmpDate[2] = parseInt(tmpDate[2]);
                          if(tmpDate[0] == curYear)
                          {
                              result += tmpDate[1] + '月' + tmpDate[2] + '日発';
                          }
                          else
                          {
                              result += tmpDate[0] + '年' + tmpDate[1] + '月' + tmpDate[2] + '日発';
                          }

                      }
                      if(tmpDate[0] && tmpDate[1] && !tmpDate[2])
                      {
                          tmpDate[0] = parseInt(tmpDate[0]);
                          tmpDate[1] = parseInt(tmpDate[1]);
                          if(tmpDate[0] == curYear)
                          {
                              result += tmpDate[1] + '日発';
                          }
                          else
                          {
                              result += tmpDate[0] + '月' + tmpDate[2] + '日発';
                          }
                      }
                  }
                  break;
            }
          }
        }
      }
    }
    return result + 'スキーツアープラン';
  }

  getMetaTitleSearch(params:Object)
  {
    let titleParams = constant.paramTitle;
    var result = '';
    if(params)
    {
      for(let title in titleParams)
      {
        for (let param in params)
        {
          if(title == param)
          {
            switch (param)
            {
              case 'prefecture':
                if(params[param].length > 0)
                {
                  result += params[param][1];
                }

                break;
              case 'city':
                if(params[param].length > 0) {
                  result += params[param][1] + '発';
                }
                break;
              case 'region':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'area':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'ski_place':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'tour_staying':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'number_of_room':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'tour_company':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'move':
                if(params[param].length > 0) {
                  var tmpName = '';
                  for (let item of params[param]) {
                    tmpName += item[0] + '・';
                  }
                  tmpName = tmpName.slice(0, -1);
                  result += tmpName;
                }
                break;
              case 'type':
                if(params[param].length > 0) {
                  var tmpName = '';
                  for (let item of params[param]) {
                    tmpName += item[1] + '・';
                  }
                  tmpName = tmpName.slice(0, -1);
                  var arr = [];
                  arr[0] = tmpName;
                  if(params['ski_place'].length > 0)
                  {
                    result += 'の'+tmpName;
                  } else {
                    result += tmpName;
                  }
                }
                break;
              case 'lift_ticket':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'rental_type':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'is_book':
                if(params[param].length > 0) {
                  result += params[param][1];
                }
                break;
              case 'tour_time_start':
                if(params[param].length > 0)
                {
                  var tmpDate = params[param][0].split('/');
                  var curYear = parseInt(moment().format('YYYY'));
                  if(tmpDate[0] && tmpDate[1] && tmpDate[2])
                  {
                    tmpDate[0] = parseInt(tmpDate[0]);
                    tmpDate[1] = parseInt(tmpDate[1]);
                    tmpDate[2] = parseInt(tmpDate[2]);
                    if(tmpDate[0] == curYear)
                    {
                      result += tmpDate[1] + '年' + tmpDate[2] + '日発';
                    }
                    else
                    {
                      result += tmpDate[0] + '年' + tmpDate[1] + '年' + tmpDate[2] + '日発';
                    }

                  }
                  if(tmpDate[0] && tmpDate[1] && !tmpDate[2])
                  {
                    tmpDate[0] = parseInt(tmpDate[0]);
                    tmpDate[1] = parseInt(tmpDate[1]);
                    if(tmpDate[0] == curYear)
                    {
                      result += tmpDate[1] + '日発';
                    }
                    else
                    {
                      result += tmpDate[0] + '年' + tmpDate[2] + '日発';
                    }
                  }
                }
                break;
            }
          }
        }
      }
    }
    return result + 'スキーツアープラン';
  }

  getListMonth()
  {
    var month = [];
    var thisMonth = parseInt(moment().format('MM'));
    var nextMonth = parseInt(moment().add(1, 'M').format('MM'));
    var nextTwoMonth = parseInt(moment().add(2, 'M').format('MM'));
    if(thisMonth >= 9 && thisMonth <= 10){
      month = [10,11,12];
    }
    if(thisMonth >= 3 && thisMonth <= 8){
      month = [3,4,5];
    }
    if(thisMonth == 11 || thisMonth == 12 || thisMonth == 1 || thisMonth == 2){
      month = [thisMonth,nextMonth,nextTwoMonth];
    }
    return month;
  }

  checkParamsExist(params)
  {
    if(params.key_word != '')
    {
      return false;
    }
    if(params.tour_departures != '')
    {
      return false;
    }
    if(params.city_id != '')
    {
      return false;
    }
    if(params.region_id != '')
    {
      return false;
    }
    if(params.area_id != '')
    {
      return false;
    }
    if(params.ski_place_id != '')
    {
      return false;
    }
    if(params.tour_staying.length > 0)
    {
      return false;
    }
    if(params.number_of_room != '')
    {
      return false;
    }
    if(params.tour_company_id != '')
    {
      return false;
    }
    if(params.fee != '')
    {
      return false;
    }
    if(params.transportation.length > 0)
    {
      return false;
    }
    if(params.is_book != '')
    {
      return false;
    }
    if(params.lift_ticket != '')
    {
      return false;
    }
    if(params.rental_type != '')
    {
      return false;
    }
    if(params.tour_time_start != '')
    {
      return false;
    }
    if(params.date != '')
    {
      return false;
    }
    if(params.type.length > 0)
    {
      return false;
    }
    if(params.sort != '')
    {
      return false;
    }
    if(params.page != '')
    {
      return false;
    }
    return true;
  }

  getStartMonthSeason()
  {
    var thisMonth = parseInt(moment().format('MM'));
    if(thisMonth > 5 && thisMonth < 9){
      return moment().format('YYYY')+'/05';
    }
    else if(thisMonth == 9)
    {
      return moment().format('YYYY')+'/10';
    }
    else {
      return moment().format('YYYY/MM');
    }
  }

  getParameterByName(name, url=null) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  modifieldDate(date)
  {
      var year = date.substr(0,4);
      var thisYear = moment().format('YYYY');
      if(year == thisYear) {
        if (date.substr(8, 2)) {
          date = date.substr(5, 5);
        } else {
          date = date.substr(5, 2);
        }
      }
      var find = '/';
      var re = new RegExp(find, 'g');
      date = date.replace(re, '');
      return date;
  }

  makeUrl(date)
  {
    var tmpDate = this.modifieldDate(date);
    let currUrl = this.router.url;
    var indexPage = currUrl.indexOf('/page');
    var tmpUrl = '';
    if(indexPage >= 0)
    {
      tmpUrl = currUrl.slice(0,indexPage);
      tmpUrl = this.lastUrl(tmpUrl);
    }
    else
    {
      var tmpSort = currUrl.indexOf('/sort');
      if(tmpSort >= 0)
      {
        tmpUrl = currUrl.slice(0,tmpSort);
        tmpUrl = this.lastUrl(tmpUrl);
      }
      else
      {
        tmpUrl = this.lastUrl(currUrl);
      }
    }
    var start = tmpDate.slice( 0, 1 ) ;
    var end = tmpUrl.slice(-1);

    if(start != '/'&& end != '/' && tmpDate != ''){
      return tmpUrl + '/' + tmpDate;
    }else{
      return tmpUrl + tmpDate;
    }
    
  }

  lastUrl(url)
  {
    var tmpUrl = url;
    var lastUrl = url.slice(tmpUrl.lastIndexOf('/') + 1);
    var reg = /^\d+$/;
    if(reg.test(lastUrl))
    {
      tmpUrl = tmpUrl.slice(0,tmpUrl.lastIndexOf('/') + 1);
    }
    return tmpUrl;
  }
}
