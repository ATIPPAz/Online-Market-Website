import { Component } from '@angular/core'

@Component({
  selector: 'app-produce',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProduceComponent {
  value: number = 1
  plus() {
    this.value++
  }
  minus() {
    this.value--
  }
}
