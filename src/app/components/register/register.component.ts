import { Component } from '@angular/core'
import {Router} from '@angular/router'
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  firstName: string
  lastName: string
  username: string
  address: string
  password: string
  phone: string
  email: string
  constructor(private _api: ApiService,private router: Router) {

  }
  register() {
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.username)
    console.log(this.address)
    console.log(this.password)
    console.log(this.phone)
    console.log(this.email)
    this._api.register({
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      address: this.address,
      password: this.password,
      phone: this.phone,
      email: this.email,
      img:""
    }).subscribe(e=>{
      if(e.status === 201){
        this._api.setToken(e.data.token)
         this.router.navigateByUrl('/home')
      }
    })
  }
}
