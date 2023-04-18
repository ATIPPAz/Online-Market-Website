import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Catagory } from '../interfaces/catagory'
import { Market } from '../interfaces/market'
import { Product } from '../interfaces/product'
import { Shop } from '../interfaces/shop'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUr: string =
    'https://c512-2001-fb1-90-c3a9-e5d0-bb1e-763d-be07.ngrok-free.app/api/v1'
  constructor(private _http: HttpClient) {
    // console.log(s)
  }
  getAllCatagory(
    queryString: string = null
  ): Observable<{ status: number; data: Catagory[] }> {
    return this._http.get<{ status: number; data: Catagory[] }>(
      `${this.apiUr}/catagory?${queryString ? queryString : ''}`
    )
  }
  getAllProduct(
    queryString: string = null
  ): Observable<{ status: number; data: Product[] }> {
    return this._http.get<{ status: number; data: Product[] }>(
      `${this.apiUr}/product?${queryString ? queryString : ''}`
    )
  }
  getAllShop(
    queryString: string = null
  ): Observable<{ status: number; data: Shop[] }> {
    return this._http.get<{ status: number; data: Shop[] }>(
      `${this.apiUr}/shop?${queryString ? queryString : ''}`
    )
  }
  getAllMarket(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/market?${queryString ? queryString : ''}`
    )
  }
  getAllRandomShop(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/randomShop?${queryString ? queryString : ''}`
    )
  }
  getOneCatagory(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Catagory }> {
    return this._http.get<{ status: number; data: Catagory }>(
      `${this.apiUr}/catagory/${id}?${queryString ? queryString : ''}`
    )
  }
  getOneProduct(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Product }> {
    return this._http.get<{ status: number; data: Product }>(
      `${this.apiUr}/product/${id}?${queryString ? queryString : ''}`
    )
  }
  getOneShop(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Shop }> {
    return this._http.get<{ status: number; data: Shop }>(
      `${this.apiUr}/shop/${id}?${queryString ? queryString : ''}`
    )
  }
  getOneMarket(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Market }> {
    return this._http.get<{ status: number; data: Market }>(
      `${this.apiUr}/market/${id}?${queryString ? queryString : ''}`
    )
  }
}
