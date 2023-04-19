import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Catagory } from '../interfaces/catagory'

export class CatagoryApi {
  apiUr: string
  headers: HttpHeaders
  _http: HttpClient
  constructor(_http, url, header) {
    this._http = _http
    this.apiUr = url
    this.headers = header
  }
  getAllCatagory(
    queryString: string = null
  ): Observable<{ status: number; data: Catagory[] }> {
    return this._http.get<{ status: number; data: Catagory[] }>(
      `${this.apiUr}/catagory?${queryString ? queryString : ''}`
      , { headers: this.headers })
  }
  getOneCatagory(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Catagory }> {
    return this._http.get<{ status: number; data: Catagory }>(
      `${this.apiUr}/catagory/${id}?${queryString ? queryString : ''}`
      , { headers: this.headers })
  }
}