import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { query } from '@angular/animations'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUr: string =
    'https://c512-2001-fb1-90-c3a9-e5d0-bb1e-763d-be07.ngrok-free.app/api/v1'
  constructor(private _http: HttpClient) {
    // console.log(s)
  }
  getAll(path: string, queryString: string = null): Observable<any> {
    return this._http.get<any>(
      `${this.apiUr}/${path}?${queryString ? queryString : ''}`
    )
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
