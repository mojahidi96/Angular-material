import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { interval, Observable } from 'rxjs';
import { DataInterface } from './sample/data.interface';
import { environment } from '../environments/environment'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  apiUrl: string = `${environment.baseUrl}/api/v3/ticker/`;

  constructor(private http: HttpClient) { }

  getData(endPoint: string): Observable<DataInterface[]> {
    return this.http.get<DataInterface[]>(this.apiUrl + endPoint)
  }
}
