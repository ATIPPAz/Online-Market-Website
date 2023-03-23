import { Component } from '@angular/core'
import { ApiModule } from '../../modules/api.module'
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
})
export class OtherComponent {
  constructor(private t: ApiModule) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.t.GetRequest()
  }
}
