import { Component, Input } from '@angular/core'
import { Product } from '../../interfaces/product'
import { Router } from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProduceComponent {
  href: string
  @Input('product') product: Product
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.product)
    this.href = this.router.url + `/product/${this.product.productId}`
  }
  value: number = 1
  plus() {
    if (this.value < this.product.productQty) {
      this.value++
    }
  }
  minus() {
    if (this.value > 1) {
      this.value--
    }
  }
}
