import { Order } from '../interfaces/order'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

export class OrderApi {
  apiUr: string
  headers: HttpHeaders
  _http: HttpClient
  constructor(_http, url, header) {
    this._http = _http
    this.apiUr = url
    this.headers = header
  }
  getOne(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Order }> {
    return this._http.get<{ status: number; data: Order }>(
      `${this.apiUr}/order/${id}?${queryString ? queryString : ''}`
      , { headers: this.headers })
  }
  getAll(queryString: string = null): Observable<{ status: number; data: Order[] }> {
    return this._http.get<{ status: number; data: Order[] }>(
      `${this.apiUr}/order?${queryString ? queryString : ''}`
      , { headers: this.headers })
  }
  create(payload): Observable<{ status: number; data: Order[] }> {
    return this._http.post<{ status: number; data: Order[] }>(
      `${this.apiUr}/order`, { ...payload }
      , { headers: this.headers })
  }
}