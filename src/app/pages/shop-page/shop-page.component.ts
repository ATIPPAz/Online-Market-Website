import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../../services/api.service'
import { Catagory } from '../../interfaces/catagory'
import { Product } from '../../interfaces/product'
import { Shop } from '../../interfaces/shop'

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
})
export class ShopPageComponent {
  valueScroll: number = 1
  shopId: string = ''
  marketId: string = ''
  shopData: Shop
  shopName: string = ''
  catagoryId: string = ''
  catagoriesData: Catagory[] = []
  productData: Product[] = []
  constructor(private routedata: ActivatedRoute, private api: ApiService) {}
  ngOnInit(): void {
    this.shopId = this.routedata.snapshot.paramMap.get('shopId')
    this.api
      .Api()
      .shop.getOne(this.shopId)
      .subscribe((e) => {
        this.shopData = e.data
        this.shopName = this.shopData.shopName
      })

    this.api
      .Api()
      .product.getAll(`shopId=${this.shopId}`)
      .subscribe((e) => {
        this.productData = e.data
        console.log(this.productData)
      })
    this.api
      .Api()
      .catagory.getAll()
      .subscribe((e) => {
        this.catagoriesData = e.data
      })
  }
  getCatagory() {
    const catagoty = this.catagoriesData.find(
      (e) => e.catagoryId == this.catagoryId
    )
    return catagoty ? catagoty.catagoryName : 'All Catagory'
  }
  hasProduct() {
    return this.productData.length !== 0 ? true : false
  }
  fecthDataWithCatagory(id) {
    this.catagoryId = id
    this.api
      .Api()
      .product.getAll(`shopId=${this.shopId}&catagoryId=${id}`)
      .subscribe((r) => {
        this.productData = r.data
      })
    console.log(this.hasProduct())
  }
}
