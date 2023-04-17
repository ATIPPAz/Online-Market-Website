import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { query } from '@angular/animations'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUr: string = 'http://localhost:5000/api/v1'
  constructor(private _http: HttpClient) {
    // console.log(s)
  }
  getAll(
    path: string,
    queryKey: [] = [],
    queryValue: [] = []
  ): Observable<any> {
    return this._http.get<any>(`${this.apiUr}/${path}`)
  }
  getOne(
    obj: {
      path: string
      id: string
    },
    queryKey: [] = [],
    queryValue: [] = []
  ): Observable<any> {
    return this._http.get<any>(`${this.apiUr}/${obj.path}/${obj.id}`)
  }
}
