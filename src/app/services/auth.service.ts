import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject:BehaviorSubject<any>;

  constructor(private httpClient:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'))

  }

   public get currentUserValue() {
    return this.currentUserSubject.value;
}
  
  
  login(identifier:string, password:string) {
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/local`, {identifier, password})
}

loggedIn(){
  return !!localStorage.getItem('token')
}

logout(){
  localStorage.removeItem('token')
}

getToken(){
  localStorage.getItem('token')
}

}
