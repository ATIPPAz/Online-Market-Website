import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-market-id-page',
  templateUrl: './market-id-page.component.html',
  styleUrls: ['./market-id-page.component.css'],
})
export class MarketIdPageComponent {
  id: string
  constructor(private routedata: ActivatedRoute, private route: Router) {}
  ngOnInit(): void {
    this.id = this.routedata.snapshot.paramMap.get('id')
    console.log(this.id)
  }
}
