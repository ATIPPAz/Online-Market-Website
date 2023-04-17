import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomeComponentPage {
  marketData = []
  constructor(private _api: ApiService) {
    this._api.getAll('market').subscribe((data) => {
      this.marketData = data
      this.marketData.forEach((e) => {
        e.marketId = parseInt(e.marketId)
      })
    })
    this._api.getOne({ path: 'product', id: '1' }).subscribe((data) => {
      console.log(data)
    })
  }
}
