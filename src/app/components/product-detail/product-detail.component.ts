import { Component, Input } from '@angular/core'
import { Market, MarketClass } from '../../interfaces/market'
import { Product } from '../../interfaces/product'
import { Shop } from '../../interfaces/shop'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  @Input('market') market: Market
  @Input('shop') shop: Shop
  @Input('product') product: Product
  qty:number = 1
  ngOnInit(): void {

  }
  getQty(qty){
    this.qty = qty 
  }
}
