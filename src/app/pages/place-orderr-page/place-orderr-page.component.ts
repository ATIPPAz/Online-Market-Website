import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../../interfaces/product'
import { ApiService } from '../../services/api.service'
import { ControllerService } from '../../services/controller.service'

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
  moneyRemain: string
  shipping: number = 0
  productData: Product = {
    catagoryId: '',
    productCoverImg: '',
    productDescribe: '',
    productDetail: '',
    productId: '',
    productImg: [],
    productName: '',
    productPrice: 0,
    productQty: 0,
    shopId: '',
  }
  qty: number = 1
  user: User = {
    address: '',
    email: '',
    firstName: '',
    img: '',
    lastName: '',
    password: '',
    userId: '',
    username: '',
    phone: '',
  }
  constructor(
    private routedata: ActivatedRoute,
    private _api: ApiService,
    private ctl: ControllerService
  ) {}
  getProduct() {
    this._api
      .Api()
      .product.getOne(this.productIdByParam)
      .subscribe((e) => {
        console.log(e.data)
        this.productData = e.data
      })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productIdByParam = this.routedata.snapshot.paramMap.get('productId')
    this.orderIdByParam = this.routedata.snapshot.paramMap.get('orderId')

    this._api
      .Api()
      .user.getUserData()
      .subscribe((e) => {
        this.user = e.data
        console.log(e.data)
      })
    if (!this.orderIdByParam) {
      this.getProduct()
      this.pagetype = 'craete order'
    } else {
      this.pagetype = 'purchese order'
    }
    console.log(this.pagetype)
  }
  getQty(qty) {
    this.qty = qty
    console.log(this.qty)
  }
  async buyOrder() {
    // this._api.Api().order.get()

    try {
      // this._api.
      this.ctl.disableBtn()

      this._api
        .Api()
        .shop.getOne(this.productData.shopId)
        .subscribe(
          (d) => {
            console.log(d.data)
            const currentdate = new Date().toLocaleString()
            const order = {
              userId: this.user._id,
              orderDate: currentdate,
              orderStatusId: '2',
              orderProduct: [
                {
                  productId: this.productData.productId,
                  productPrice: this.productData.productPrice,
                  productQty: this.qty,
                },
              ],
              marketId: d.data.marketId,
              shopId: d.data.shopId,
            }
            const totalPrice = order.orderProduct.reduce((acc, product) => {
              const productTotal = product.productPrice * product.productQty
              return acc + productTotal
            }, 0)

            this._api
              .Api()
              .payment.getOne(this.user._id)
              .subscribe((e) => {
                if (e.data.accountId) {
                  this._api
                    .Api()
                    .payment.paidBill(e.data.accountId, totalPrice)
                    .subscribe(
                      (e) => {
                        console.log(e.data)
                        this.moneyRemain = e.data.money
                        console.log(this.moneyRemain)
                        alert('จ่ายสำเร็จคงเหลือ ' + this.moneyRemain + ' บาท')
                        this._api
                          .Api()
                          .order.create(order)
                          .subscribe(
                            (e) => {
                              console.log(e.data)
                              alert('ทำ order สำเร็จ')
                              this.getProduct()
                              this.ctl.enableBtn()
                            },
                            (error) => alert(`เกิดข้อผิดพลาด`),
                            () => {
                              this.ctl.enableBtn()
                            }
                          )
                      },
                      (err) => {
                        const noti = `${
                          err.error.data === 1
                            ? 'เงินไม่พอจ่าย'
                            : err.error.data === 2
                            ? 'ไม่พบบัญชีธนาคาร'
                            : 'เกิดข้อผิดพลาด'
                        }`
                        alert(noti)
                        if (err.error.data === 2) {
                          const data = window.prompt('กรอก account Id')
                          const accountId = parseInt(data)
                          console.log(accountId)

                          if (accountId) {
                            // this._api.Api().payment.create({ accountId }).subscribe(e => {
                            //   alert(`เพิ่มสำเร็จ`)
                            // })
                          }
                        }
                        this.ctl.enableBtn()
                      }
                    )
                } else {
                  //goto payment
                }
              })
          },
          (error) => alert(`เกิดข้อผิดพลาด`),
          () => {
            this.ctl.enableBtn()
          }
        )
    } catch (err) {
      alert(err.maasage)
    } finally {
      this.ctl.enableBtn()
    }
  }
}
