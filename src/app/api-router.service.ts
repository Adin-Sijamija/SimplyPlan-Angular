import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiRouterService {
  private ServerUrl = 'https://localhost:44379';
  private http: HttpClient;

  constructor(NewHttp: HttpClient) {
    this.http = NewHttp;
  }

  GetAll(): Observable<any> {
    return this.http.get<any>(this.ServerUrl + '/weatherforecast');
  }
}
