import { Component } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Product} from '../../interfaces/product'
import {ApiService} from '../../services/api.service'
import { User } from 'src/app/interfaces/users'
@Component({
  selector: 'app-place-orderr-page',
  templateUrl: './place-orderr-page.component.html',
  styleUrls: ['./place-orderr-page.component.css'],
})
export class PlaceOrderrPageComponent {
  productIdByParam:string
  orderIdByParam:string
  pagetype:string
  productData:Product={catagoryId:'',productCoverImg:'',productDescribe:'',productDetail:'',productId:'',productImg:[],productName:'',productPrice:0,productQty:0,shopId:'',}
  qty:number = 1
  user:User = {address:'',email:'',firstName:'',img:'',lastName:'',password:'',userId:'',username:'',phone:''}
  constructor(private routedata: ActivatedRoute,private _api:ApiService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productIdByParam = this.routedata.snapshot.paramMap.get('productId')
    this.orderIdByParam = this.routedata.snapshot.paramMap.get('orderId')
     this._api.getUserData().subscribe(e=>{
        this.user = e.data
        console.log(e.data);
        
      })
    if(!this.orderIdByParam){
      this._api.getOneProduct( this.productIdByParam).subscribe(e=>{
        console.log(e.data);
        this.productData = e.data
      }
      )
     
      this.pagetype = 'craete' 
    }
    else{
      this.pagetype = 'order' 
    }
console.log(this.pagetype );

    
  }
  getQty(qty){
this.qty=qty
console.log(this.qty);

  }
}
