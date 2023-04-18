import { Component } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.go()
  }
  go() {
    const page: string = this.router.url.split('/')[1]
    const nav = document.getElementById(page)
    nav.classList.add('navClick')
  }
}
