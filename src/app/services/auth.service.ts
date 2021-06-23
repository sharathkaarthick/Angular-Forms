import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSubject: any;


  constructor(private httpClient:HttpClient) {
   this.currentUserSubject = JSON.parse(localStorage.getItem('currentUser') || '{}')
   }

   public get currentUserValue() {
    return this.currentUserSubject.value;
}
  
  
  login(identifier:string, password:string) {
    return this.httpClient.post(`${environment.apiUrl}/auth/local`, {identifier, password}).pipe(map(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      
      
      
      return true;
  }))
}

logout() {
  localStorage.removeItem('access_token');
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}
}
