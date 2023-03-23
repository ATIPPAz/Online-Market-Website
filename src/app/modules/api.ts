// import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs'
// import { Injectable } from '@angular/core'
// require('dotenv').config()
// import { config } from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export class Api {
  path: string = ''
  constructor() {
    console.log('test')
  }
  test() {
    // console.log(config)

    console.log('test')
  }
  // GetRequest(): Observable<{}[]> {
  //   return this.httpClient.get<{}[]>('http://localhost:5000/')
  // }
}
