import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../../interfaces/product'
import { ApiService } from '../../services/api.service'
import { User } from 'src/app/interfaces/users'
@Component({
  selector: 'app-place-orderr-page',
  templateUrl: './place-orderr-page.component.html',
  styleUrls: ['./place-orderr-page.component.css'],
})
export class PlaceOrderrPageComponent {
  productIdByParam: string
  orderIdByParam: string
  pagetype: string
  shipping: number = 0
  productData: Product = { catagoryId: '', productCoverImg: '', productDescribe: '', productDetail: '', productId: '', productImg: [], productName: '', productPrice: 0, productQty: 0, shopId: '', }
  qty: number = 1
  user: User = { address: '', email: '', firstName: '', img: '', lastName: '', password: '', userId: '', username: '', phone: '' }
  constructor(private routedata: ActivatedRoute, private _api: ApiService) {

  }
  getProduct() {
    this._api.Api().product.getOne(this.productIdByParam).subscribe(e => {
      console.log(e.data);
      this.productData = e.data
    }
    )

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productIdByParam = this.routedata.snapshot.paramMap.get('productId')
    this.orderIdByParam = this.routedata.snapshot.paramMap.get('orderId')

    this._api.Api().user.getUserData().subscribe(e => {
      this.user = e.data
      console.log(e.data);

    })
    if (!this.orderIdByParam) {
      this.getProduct()
      this.pagetype = 'craete order'
    }
    else {
      this.pagetype = 'purchese order'
    }
    console.log(this.pagetype);
  }
  getQty(qty) {
    this.qty = qty
    console.log(this.qty);

  }
  buyOrder() {
    // this._api.Api().order.get()

    try {
      this._api.Api().shop.getOne(this.productData.shopId).subscribe(d => {
        console.log(
          d.data
        );
        const currentdate = new Date().toLocaleString();
        const order = {
          userId: this.user._id,
          orderDate: currentdate,
          orderStatusId: "2",
          orderProduct: [
            {
              productId: this.productData.productId,
              productPrice: this.productData.productPrice,
              productQty: this.qty
            }
          ],
          marketId: d.data.marketId,
          shopId: d.data.shopId
        }
        this._api.Api().order.create(order).subscribe(e => {
          console.log(e.data);
          alert('จ่ายสำเร็จ')
          this.getProduct()
        })
      })
    }
    catch (err) {
      alert(err.maasage)
    }


    // "2019-01-01T00:00:00
    // const date = currentdate.getFullYear() + "-"
    //   + (currentdate.getMonth() + 1) + "-"
    //   + currentdate.getDate() + "T"
    //   + currentdate.getHours() + ":"
    //   + currentdate.getMinutes() + ":"
    //   + currentdate.getSeconds()



    //puechase method

    //create order status paid
  }
}
