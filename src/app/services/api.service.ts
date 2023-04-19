import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Catagory } from '../interfaces/catagory'
import { Market } from '../interfaces/market'
import { Product } from '../interfaces/product'
import { Shop } from '../interfaces/shop'
import {  Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers:HttpHeaders
  apiUr: string =
    'https://00c7-2001-fb1-91-dd9f-7ded-9801-3489-6b12.ngrok-free.app/api/v1'
    token:string
  constructor(private _http: HttpClient,private router: Router) {
    this.token = localStorage.getItem('userToken')
    console.log(this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }
  login({username,password}): Observable<{ status: number,data: {token:string} }> {
    return this._http.post<{ status: number, data: {token:string}  }>(`${this.apiUr}/login`,{username,password})
  }
  setToken(token){
    localStorage.setItem("userToken", token)
  }
  logout():void {
    localStorage.removeItem("userToken")
    this.router.navigate(['/home'])
  }
  isLogin(){
    return  localStorage.getItem('userToken') === "" || !localStorage.getItem('userToken')?false:true
  }
  register(user): Observable<{ status: number,data: {token:string} }> {
    console.log(user);
    
    return this._http.post<{ status: number, data: {token:string}  }>(`${this.apiUr}/register`,{...user})
  }
  goToLoginPage(){
    this.logout()
    this.router.navigate(['/login'])
  }
  getAllCatagory(
    queryString: string = null
  ): Observable<{ status: number; data: Catagory[] }> {
    return this._http.get<{ status: number; data: Catagory[] }>(
      `${this.apiUr}/catagory?${queryString ? queryString : ''}`
    ,{headers:this.headers})
  }
  getAllProduct(
    queryString: string = null
  ): Observable<{ status: number; data: Product[] }> {
    return this._http.get<{ status: number; data: Product[] }>(
      `${this.apiUr}/product?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getAllShop(
    queryString: string = null
  ): Observable<{ status: number; data: Shop[] }> {
    return this._http.get<{ status: number; data: Shop[] }>(
      `${this.apiUr}/shop?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getAllMarket(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/market?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getAllRandomShop(
    queryString: string = null
  ): Observable<{ status: number; data: Market[] }> {
    return this._http.get<{ status: number; data: Market[] }>(
      `${this.apiUr}/randomShop?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneCatagory(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Catagory }> {
    return this._http.get<{ status: number; data: Catagory }>(
      `${this.apiUr}/catagory/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneProduct(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Product }> {
    return this._http.get<{ status: number; data: Product }>(
      `${this.apiUr}/product/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneShop(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Shop }> {
    return this._http.get<{ status: number; data: Shop }>(
      `${this.apiUr}/shop/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
  getOneMarket(
    id: string,
    queryString: string = null
  ): Observable<{ status: number; data: Market }> {
    return this._http.get<{ status: number; data: Market }>(
      `${this.apiUr}/market/${id}?${queryString ? queryString : ''}`
     ,{headers:this.headers})
  }
}
