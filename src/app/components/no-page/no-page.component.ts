import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css'],
})
export class NoPageComponent {
  path: string = ''
  constructor(private route: ActivatedRoute) {
    this.path = window.location.pathname.split('/')[1]
  }
}
