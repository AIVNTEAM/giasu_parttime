import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, delay } from "rxjs/operators";
import { LoaderService } from "./loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (!req.url.includes("login")) {
    //   return next.handle(req);
    // }
    console.log("LoaderInterceptor");

    var loaderService = this.injector.get(LoaderService);

    loaderService.show();  //luc nay bat co showLoader = True
    console.log("trang thai goi cho tra ve: " + loaderService.showLoader);

    return next.handle(req).pipe(
      // delay(3000),
      finalize(() => loaderService.hide()) //load xong thi cho ve False lai
    );
  }
}