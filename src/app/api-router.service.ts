import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiRouterService {
  private ServerUrl = 'https://localhost:44317';
  private http: HttpClient;

  constructor(NewHttp: HttpClient) {
    this.http = NewHttp;
  }

  // headers = new HttpHeaders().set('content-type', 'application/json');

  GetAll(): Observable<any> {
    return this.http.get<any>(this.ServerUrl + '/weatherforecast');
  }
  PostData(Data: any): Observable<any> {
    const body = JSON.stringify(Data);
    const Head = { 'content-type': 'application/json' };

    return this.http.post<any>(
      this.ServerUrl + '/api/Project/AddProject',
      body,
      { headers: Head }
    );
  }
}
