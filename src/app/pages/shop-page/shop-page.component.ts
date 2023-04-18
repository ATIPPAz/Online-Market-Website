import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
})
export class ShopPageComponent {
  shopId: string
  marketId: string
  shopData: { shopName: '' }
  shopName: ''
  productData: []
  constructor(private routedata: ActivatedRoute, private api: ApiService) {}
  ngOnInit(): void {
    this.shopId = this.routedata.snapshot.paramMap.get('shopId')
    this.api.getOne({ path: 'shop', id: this.shopId }).subscribe((e) => {
      this.shopData = e
      this.shopName = this.shopData.shopName
      console.log(e)
    })
    this.api.getAll('product', `shopId=${this.shopId}`).subscribe((r) => {
      this.productData = r
    })
  }
}
