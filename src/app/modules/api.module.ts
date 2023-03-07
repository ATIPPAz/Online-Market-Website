import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
// require('dotenv').config()
@Injectable({
  providedIn: 'root',
})
export class ApiModule {
  constructor(public httpClient: HttpClient) {
    console.log('test')
  }
  GetRequest(): Observable<{}[]> {
    return this.httpClient.get<{}[]>('http://localhost:5000/')
  }
}
