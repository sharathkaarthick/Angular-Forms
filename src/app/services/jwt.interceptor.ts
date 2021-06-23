import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const currentUser = this.authenticationService.currentUserValue
    const isloggedin = currentUser && currentUser.token;
 //   const token = localStorage.getItem('currentUser')
    const isapiUrl = request.url.startsWith(environment.apiUrl)
   
    if(isloggedin && isapiUrl){
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${currentUser.token}`
        }
    })
    
  }
    
    return next.handle(request);
  }
}
