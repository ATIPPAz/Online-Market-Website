import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../interfaces/product'

import { Observable } from 'rxjs'
export class ProductApi {
  url: string
  headers: HttpHeaders
  _http: HttpClient
  constructor(_http, url, header) {
    this._http = _http
    this.url = url
    this.headers = header
  }
  getAll(
    queryString: string = null
  ): Observable<{ status: number; data: Product[] }> {
    return this._http.get<{ status: number; data: Product[] }>(
      `${this.url}/product?${queryString ? queryString : ''}`,
      { headers: this.headers }
    )
  }
  getOne(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Product }> {
    return this._http.get<{ status: number; data: Product }>(
      `${this.url}/product/${id}?${queryString ? queryString : ''}`,
      { headers: this.headers }
    )
  }
}
