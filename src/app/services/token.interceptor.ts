import { Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authservice:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){

    let tokenizedReq = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
