import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUr: string =
    'https://c512-2001-fb1-90-c3a9-e5d0-bb1e-763d-be07.ngrok-free.app/api/v1'
  constructor(private _http: HttpClient) { }

  login({username,password}): Observable<{ status: number,data: {token:string} }> {
    return this._http.post<{ status: number, data: {token:string}  }>(`${this.apiUr}/login`,{username,password})
  }
  isLogin(){
    return  localStorage.getItem('userToken') === "" || !localStorage.getItem('userToken')?false:true
  }
}
