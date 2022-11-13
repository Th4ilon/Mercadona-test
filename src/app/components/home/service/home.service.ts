import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url: string = '/api';

  constructor(private http: HttpClient) { }
  // crud methods, get method for getting data from the server

  getNumberOfTornillos() {
    const headers = new HttpHeaders().set('responseType', 'arraybuffer');
    return this.http.get<any>(`${this.url}/getNumberOfTornillos`, { headers});
  }
}
