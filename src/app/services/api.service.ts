import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { OrderApi } from './order'
import { ProductApi } from './product'
import { AuthApi } from './auth'
import { CartApi } from './cart'
import { CatagoryApi } from './catagory'
import { MarketApi } from './market'
import { ShopApi } from './shop'
import { UserApi } from './user'
import { PaymentApi } from './payment'
import { FavoriteApi } from './favorite'




@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders
  apiUr: string =
    'https://00c7-2001-fb1-91-dd9f-7ded-9801-3489-6b12.ngrok-free.app/api/v1'
  token: string
  constructor(private _http: HttpClient, private router: Router) {

    this.token = localStorage.getItem('userToken')
    console.log(this.token);
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

  }
  Api() {

    return {
      product: new ProductApi(this._http, this.apiUr, this.headers),
      auth: new AuthApi(this._http, this.apiUr, this.headers, this.router),
      payment: new PaymentApi(this._http, this.apiUr, this.headers),
      cart: new CartApi(),
      catagory: new CatagoryApi(this._http, this.apiUr, this.headers),
      market: new MarketApi(this._http, this.apiUr, this.headers),
      shop: new ShopApi(this._http, this.apiUr, this.headers),
      user: new UserApi(this._http, this.apiUr, this.headers),
      order: new OrderApi(this._http, this.apiUr, this.headers),
      favorite: new FavoriteApi(this._http, this.apiUr, this.headers)
    }


  }
}
