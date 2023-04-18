import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from '../../../services/api.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  _api:ApiService
  constructor(private router: Router, _api :ApiService) {
    this._api = _api
  }
  ngOnInit(): void {
    this.go()
  }
  go() {
    const page: string = this.router.url.split('/')[1]
    const nav = document.getElementById(page)
    nav.classList.add('navClick')
  }
  logout(){
  this._api.logout()
  }
}
