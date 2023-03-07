import { Component } from '@angular/core'
import { ApiModule } from '../../modules/api.module'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: any = []
  constructor(private api: ApiModule) {}
  ngOnInit(): void {
    this.api.GetRequest().subscribe((e) => {
      this.data = e
    })
  }
}
