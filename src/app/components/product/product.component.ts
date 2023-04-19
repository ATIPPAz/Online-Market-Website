import { Component, Input } from '@angular/core'
import { Product } from '../../interfaces/product'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/services/api.service'
import { Favorite } from 'src/app/interfaces/favorite'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProduceComponent {
  href: string
  @Input('product') product: Product
  likeData: Favorite
  liked: boolean = false
  img: string = ''
  constructor(private router: Router, private api: ApiService) { }
  ngOnInit(): void {
    console.log(this.product)
    this.href = this.router.url + `/product/${this.product.productId}`
    this.getlike()
  }
  getlike() {
    this.api.Api().favorite.getOne().subscribe(e => {
      this.likeData = e.data
      const id = this.likeData.like.findIndex(d => d.shopId == this.product.shopId)
      if (id !== -1) {
        const pId = this.likeData.like[id].product.findIndex(d => d == this.product.productId)
        if (pId !== -1) {
          this.liked = true
        }
        else {
          this.liked = false
        }
      }
      this.img = this.liked ? 'https://www.freeiconspng.com/uploads/heart-png-15.png' : 'https://img.icons8.com/ios-glyphs/30/FD7E14/hearts.png'
      console.log(this.img);

    })
  }

  like() {
    console.log(this.product);
    this.api.Api().favorite.liked({ shopId: this.product.shopId, productId: this.product.productId }).subscribe(e => {
      console.log(e.data);
      this.getlike()
    }, err => { this.getlike() })
  }
}
