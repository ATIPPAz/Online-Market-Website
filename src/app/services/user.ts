import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../interfaces/users'

export class UserApi {
  apiUr: string
  headers: HttpHeaders
  _http: HttpClient
  constructor(_http, url, header) {
    this._http = _http
    this.apiUr = url
    this.headers = header
  }
  getUserData(): Observable<{ status: number; data: User }> {
    return this._http.get<{ status: number; data: User }>(
      `${this.apiUr}/user`,
      { headers: this.headers }
    )
  }
}
