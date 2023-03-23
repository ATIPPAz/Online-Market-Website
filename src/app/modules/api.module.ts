import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Api } from './api'
// require('dotenv').config()
@Injectable({
  providedIn: 'root',
})
export class ApiModule {
  constructor(public httpClient: HttpClient, private api: Api) {
    console.log('test')
  }
  GetRequest(): Observable<{}[]> {
    console.log(this.api.test())
    return this.httpClient.get<{}[]>('http://localhost:5000/')
  }
}
