import { Component } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router'
import { Location, PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-components-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string
  password: string
  constructor(private _api: ApiService, private router: Router, private location: Location, private platformLocation: PlatformLocation) {

  }
  ngOnInit(): void {
    if (this._api.Api().auth.isLogin()) {
      this.router.navigateByUrl('/home')
    }
  }
  login() {
    this._api.Api().auth.login({ username: this.username, password: this.password }).subscribe(e => {
      if (e.status === 200) {
        this._api.Api().auth.setToken(e.data.token)
        const canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation)
        if (canGoBack) {
          this.location.back();
        }
        else {
          this.router.navigateByUrl('/home')
        }
      }
      else {
        alert('username or password invalid')
      }
    },
      error => {
        console.log(error);
      })
  }

}
