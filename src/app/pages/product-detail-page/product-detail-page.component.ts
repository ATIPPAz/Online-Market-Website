import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {
  value: number = 1
  plus() {
    this.value++
  }
  minus() {
    if(this.value > 0){
      this.value--
    }
  }
}

