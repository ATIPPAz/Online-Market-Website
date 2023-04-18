import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  value: string = '1'
  @Input('max') max: number = 1
  @Input('min') min: number= 1
  @Output() changeValue = new EventEmitter<any>()
  emitValue(){
    this.changeValue.emit(parseInt(this.value))
  }
  check() {
    const qty = parseInt(this.value)
    if (!Number.isNaN(qty)) {
      if (qty > this.max && qty > this.min) {
        this.value = '1'
        window.alert(`กรุณากรอกตั้งเเต่ ${this.min} ถึง ${this.max} ชิ้น`)
      }
      else{
         this.value = qty.toString()
      }
    }
    else {
      window.alert(`กรุณากรอกตัวเลข`)
      this.value = '1'
    }
  this.emitValue()
  }
  plus() {
      const plus = document.getElementById('plus')
      const minus = document.getElementById('minus')


    let qty = parseInt(this.value)
    if (qty < this.max) {
      plus.style.cursor = "pointer"
      minus.style.cursor = 'pointer'
      qty++
      this.value = (qty).toString()
      this.emitValue()
 if(qty===this.max){
      plus.style.cursor = 'not-allowed'
      }
    }
    else{
      minus.style.cursor = 'pointer'
      plus.style.cursor = "not-allowed"
    }
  }
  minus() {
     const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    let qty = parseInt(this.value)
    if (qty > this.min) {
      qty--
      this.value = (qty).toString()
      this.emitValue()
      if(qty===this.min){
      minus.style.cursor = 'not-allowed'
      }
      plus.style.cursor = "pointer"
    }
    else{
     plus.style.cursor = "pointer"
      minus.style.cursor = 'not-allowed'
    }
  }

}
