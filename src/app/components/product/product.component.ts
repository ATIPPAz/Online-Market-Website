import { Component, Input } from '@angular/core'
import { Product } from '../../interfaces/product'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProduceComponent {
  href: string
  @Input('product') product: Product
  constructor(private router: Router, private api: ApiService) { }
  ngOnInit(): void {
    console.log(this.product)
    this.href = this.router.url + `/product/${this.product.productId}`
  }
  like() {
    console.log(this.product);

    this.api.Api().favorite.liked({ shopId: this.product.shopId, productId: this.product.productId }).subscribe(e => {
      console.log(e.data);
    })
  }
}
