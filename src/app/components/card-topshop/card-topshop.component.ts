import { Component, Input } from '@angular/core'
@Component({
  selector: 'app-card-topshop',
  templateUrl: './card-topshop.component.html',
  styleUrls: ['./card-topshop.component.css'],
})
export class CardTopshopComponent {
  @Input('img') img: string =
    'https://ird.rmuti.ac.th/2020/world/upload/post/picture/thumb/IRD010221C00006/noimg.png'
  @Input('title') title: string = 'market'
  @Input('name') name: string = ''
  @Input('id') shopId: string = ''
}
