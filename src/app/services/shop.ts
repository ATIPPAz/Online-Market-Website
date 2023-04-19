import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Shop } from '../interfaces/shop'


export class ShopApi {
  apiUr: string
  headers: HttpHeaders
  _http: HttpClient
  constructor(_http, url, header) {
    this._http = _http
    this.apiUr = url
    this.headers = header
  }

  getOneShop(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Shop }> {
    return this._http.get<{ status: number; data: Shop }>(
      `${this.apiUr}/shop/${id}?${queryString ? queryString : ''}`
      , { headers: this.headers })
  }
  getAllShop(
    queryString: string = null
  ): Observable<{ status: number; data: Shop[] }> {
    return this._http.get<{ status: number; data: Shop[] }>(
      `${this.apiUr}/shop?${queryString ? queryString : ''}`
      , { headers: this.headers })
  }
}