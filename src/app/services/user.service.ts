import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'https://randomuser.me/api/?results=5';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
