import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONSTANTS } from '../core/app.constants';
import { API_ENDPOINT } from '../core/api.endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public request(endPointName: string, payload: any = {}, restFull = false): Observable<any> {
    let endPointData = API_ENDPOINT.data()[endPointName];
    return this.http.request(
      endPointData.method,
      `${APP_CONSTANTS.API_ENPOINT}/${endPointData.url}`, { body: payload, observe: 'body' });
  }
}
