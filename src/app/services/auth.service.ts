import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credenciais } from '../models/credenciais';
import { API_ROUTE } from '../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService(); 

  constructor(private http: HttpClient) { }

  authenticate(credenciais: Credenciais): Observable<any>{
    return this.http.post(`${API_ROUTE.baseUrl}/api/auth/login/signin`, credenciais, {
      observe: 'response',
      responseType: 'json'
    });
  }

  successfullLogin(authToken: string){
      localStorage.setItem('token', authToken); 
  }

  isAuthenticated(){
    let token = localStorage.getItem('token'); 
    if(token != null){
      return !this.jwtService.isTokenExpired(token); 
    }
    return false; 
  }

  logout(){
    localStorage.clear(); 
  }
}
