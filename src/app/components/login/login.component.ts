import { Component } from '@angular/core'
@Component({
  selector: 'app-components-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string
  password: string
  constructor() {}

  login() {
    console.log(`username : ${this.username} password: ${this.password}`)
  }
}
