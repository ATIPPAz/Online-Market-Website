import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Favorite } from '../interfaces/favorite'
export class FavoriteApi {
  apiUr: string
  headers: HttpHeaders
  _http: HttpClient
  constructor(_http, url, header) {
    this._http = _http
    this.apiUr = url
    this.headers = header
  }
  liked({ shopId, productId }): Observable<{ status: number; data: any }> {
    return this._http.post<{ status: number; data: any }>(
      `${this.apiUr}/favorite`, { shopId, productId }
      , { headers: this.headers })
  }
  getOne(): Observable<{ status: number; data: Favorite }> {
    return this._http.get<{ status: number; data: Favorite }>(
      `${this.apiUr}/favorite`
      , { headers: this.headers })
  }
}