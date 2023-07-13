import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Market } from '../interfaces/market'

export class MarketApi {
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
  ): Observable<{ status: number; data: Market }> {
    return this._http.get<{ status: number; data: Market }>(
      console.log(this.apiUr)
      `${this.apiUr}/market/${id}?${queryString ? queryString : ''}`,
      { headers: this.headers }
    )
  }
  getAll(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/market?${queryString ? queryString : ''}`,
      { headers: this.headers }
    )
  }
  getAllRandomShop(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/randomShop?${queryString ? queryString : ''}`,
      { headers: this.headers }
    )
  }
}
