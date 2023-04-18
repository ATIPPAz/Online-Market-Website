import { Component, Input } from '@angular/core'
import { Market } from '../../../interfaces/market'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  id: number[]
  @Input('marketData') marketData: Market[] = []
  ngOnInit(): void {
    this.marketData.forEach((e) => {
      this.id.push(parseInt(e.marketId))
    })
  }
}
