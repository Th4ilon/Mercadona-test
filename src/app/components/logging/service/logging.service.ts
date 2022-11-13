import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private apiAuthUrl: string = '/api';

  constructor(private http: HttpClient) { }

  login(userValues: UserModel) {
    const username = userValues.password;
    const password = userValues.password;
    return this.http.post(this.apiAuthUrl + '/auth/register', { username, password });
  }

}
