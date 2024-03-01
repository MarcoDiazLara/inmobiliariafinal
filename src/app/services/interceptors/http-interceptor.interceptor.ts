import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Token = localStorage.getItem("Token") || "gfgfgfg";

    const reqWithHeader = request.clone({
      headers: request.headers.append("Authorization", Token)
    });
    console.log("Inbgreso a Interceptor");

    request = reqWithHeader;
    return next.handle(request);
  }
}
