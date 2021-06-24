import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) {
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
