import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  //CongThanh 14/07/19: injector nay co the goi lop nao cung dc - tao doi tuong cua lop bang cach su dung injector
  //Interceptor nay nam giua client va server nham thay doi request goi di
  //cung nhu format ket qua response tr? v?
  // constructor(private injector: Injector) { }
  constructor() { }

  intercept(req, next){

    //CongThanh 14/07/19: doi tuong authService co duoc bang cach goi injector den lop Authservice
    // let authService = this.injector.get(AuthService);
    console.log('intercept executed');
    // let jwt_token = authService.getToken(); //lay token
    let jwt_token = localStorage.getItem('token'); //lay token

    //CongThanh 14/07/19: thuc hien gan token vao request khi goi request di (o phia client)
    let tokenizedReq = req.clone({
      setHeaders:{
        token: jwt_token ? jwt_token : ''
          }
      }
    );
    return next.handle(tokenizedReq);

  }

}
