import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { Market } from '../../interfaces/market'
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomeComponentPage {
  marketData: Market[] = []
  randomShopData: Market[] = []
  constructor(private _api: ApiService) {
    this._api.getAllMarket().subscribe((data) => {
      this.marketData = data.data
      this._api.getAllRandomShop().subscribe((e) => {
        this.randomShopData = e.data
        this.randomShopData.forEach(rd => {
          this.marketData.forEach(mk => {
            if (rd.marketId === mk.marketId)
              rd.marketName = mk.marketName
          })
        })
        console.log(this.randomShopData);
      })
    })
console.log(this._api.isLogin());

  }
}
