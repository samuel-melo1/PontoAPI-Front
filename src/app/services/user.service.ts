import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { API_ROUTE } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Users>{
    return this.http.get<Users>(`${API_ROUTE.baseUrl}/users/${id}`);
  }

  findByEmail(email: string): Observable<Users>{
    return this.http.get<Users>(`${API_ROUTE.baseUrl}/users/email/${email}`);
  }
}
