import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-blog-id-page',
  templateUrl: './blog-id-page.component.html',
  styleUrls: ['./blog-id-page.component.css'],
})
export class BlogIdPageComponent {
  id: string
  constructor(private routedata: ActivatedRoute, private route: Router) {}
  ngOnInit(): void {
    this.id = this.routedata.snapshot.paramMap.get('id')
    console.log(this.id)
  }
}
