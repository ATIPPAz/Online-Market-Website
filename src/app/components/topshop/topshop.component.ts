import { Component } from '@angular/core'
import { TopShop } from '../../interfaces/topShopInterface'
@Component({
  selector: 'app-topshop',
  templateUrl: './topshop.component.html',
  styleUrls: ['./topshop.component.css'],
})
export class TopshopComponent {
  data: TopShop[] = [
    {
      marketImg: 'https://mpics.mgronline.com/pics/Images/558000007916201.JPEG',
      marketTitle: 'ตลาดนัดสวนจตุจักร',
      marketId: '1',
    },
    {
      marketImg: 'https://mpics.mgronline.com/pics/Images/558000007916201.JPEG',
      marketTitle: 'ตลาดนัดสวนจตุจักร',
      marketId: '2',
    },
    {
      marketImg: 'https://mpics.mgronline.com/pics/Images/558000007916201.JPEG',
      marketTitle: 'ตลาดนัดสวนจตุจักร',
      marketId: '3',
    },
    {
      marketImg: 'https://mpics.mgronline.com/pics/Images/558000007916201.JPEG',
      marketTitle: 'ตลาดนัดสวนจตุจักร',
      marketId: '4',
    },
    {
      marketImg: 'https://mpics.mgronline.com/pics/Images/558000007916201.JPEG',
      marketTitle: 'ตลาดนัดสวนจตุจักร',
      marketId: '5',
    },
    {
      marketImg: 'https://mpics.mgronline.com/pics/Images/558000007916201.JPEG',
      marketTitle: 'ตลาดนัดสวนจตุจักร',
      marketId: '6',
    },
  ]
}
