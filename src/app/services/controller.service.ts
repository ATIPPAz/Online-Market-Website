import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  constructor() {}
  disableBtn() {
    const allBtn = document.querySelectorAll('.btn')

    allBtn.forEach((e) => {
      e.classList.add('disabled')
    })
  }
  enableBtn() {
    const allBtn = document.querySelectorAll('.btn.disabled')

    allBtn.forEach((e) => {
      e.classList.remove('disabled')
    })
  }
}
// disabled
