import { Component, Input } from '@angular/core'
import { Market, MarketClass } from '../../interfaces/market'
import { Product } from '../../interfaces/product'
import { Shop } from '../../interfaces/shop'
import {Router}from '@angular/router'
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
  constructor(private router:Router){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.test);
  }
  getQty(qty){
    this.qty = qty 
  }
  createOrder(){
    this.router.navigate(['/order/product/'+this.product.productId])
  }
}
