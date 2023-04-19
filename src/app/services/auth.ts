import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

export class AuthApi {
  apiUr: string
  headers: HttpHeaders
  _http: HttpClient
  router: Router
  constructor(_http, url, header, router) {
    this._http = _http
    this.apiUr = url
    this.headers = header
    this.router = router
  }
  login({ username, password }): Observable<{ status: number, data: { token: string } }> {
    return this._http.post<{ status: number, data: { token: string } }>(`${this.apiUr}/login`, { username, password })
  }
  setToken(token) {
    localStorage.setItem("userToken", token)
  }
  logout(): void {
    localStorage.removeItem("userToken")
    this.router.navigate(['/home'])
  }
  isLogin() {
    return localStorage.getItem('userToken') === "" || !localStorage.getItem('userToken') ? false : true
  }
  register(user): Observable<{ status: number, data: { token: string } }> {
    return this._http.post<{ status: number, data: { token: string } }>(`${this.apiUr}/register`, { ...user })
  }
  goToLoginPage() {
    this.logout()
    this.router.navigate(['/login'])
  }
}