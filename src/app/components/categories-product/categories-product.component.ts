import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-categories-product',
  templateUrl: './categories-product.component.html',
  styleUrls: ['./categories-product.component.css'],
})
export class CategoriesProductComponent {
  @Input('id') id = ''
  @Input('name') name = ''
  @Output() select = new EventEmitter<any>()
  emitCatagory() {
    this.select.emit(this.id)
  }
}
