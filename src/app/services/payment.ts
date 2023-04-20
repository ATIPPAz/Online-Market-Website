import { Payment } from '../interfaces/payment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

export class PaymentApi {
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
  ): Observable<{ status: number; data: Payment }> {
    return this._http.get<{ status: number; data: Payment }>(
      `${this.apiUr}/payment/${id}?${queryString ? queryString : ''}`,
      { headers: this.headers }
    )
  }
  getAll(
    queryString: string = null
  ): Observable<{ status: number; data: Payment[] }> {
    return this._http.get<{ status: number; data: Payment[] }>(
      `${this.apiUr}/payment?${queryString ? queryString : ''}`,
      { headers: this.headers }
    )
  }
  create(payload): Observable<{ status: number; data: Payment[] }> {
    return this._http.post<{ status: number; data: Payment[] }>(
      `${this.apiUr}/payment`,
      { ...payload },
      { headers: this.headers }
    )
  }
  paidBill(id, cost): Observable<{ status: number; data: any }> {
    return this._http.put<{ status: number; data: any }>(
      `${this.apiUr}/paid/${id}`,
      { cost },
      { headers: this.headers }
    )
  }
}
