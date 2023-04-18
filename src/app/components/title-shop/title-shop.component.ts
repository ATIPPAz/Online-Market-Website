import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-title-shop',
  templateUrl: './title-shop.component.html',
  styleUrls: ['./title-shop.component.css'],
})
export class TitleShopComponent {
  @Input('title') title: string = ''
}
