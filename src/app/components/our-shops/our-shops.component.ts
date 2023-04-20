import { Component } from '@angular/core'
// import { TopShop } from '../../interfaces/topShopInterface'
@Component({
  selector: 'app-our-shops',
  templateUrl: './our-shops.component.html',
  styleUrls: ['./our-shops.component.css'],
})
export class OurShopsComponent {
  data: any[] = [
    {
      marketImg:
        'https://media.discordapp.net/attachments/1079420055776940043/1094531618821111859/image_29.png?width=261&height=321',
      marketTitle: 'Category Food and Beverages',
      shopName: 'Coco.nut_katiishappy',
      shopId: '1',
      marketId: '1',
    },
    {
      marketImg:
        'https://media.discordapp.net/attachments/1079420055776940043/1094531619076972554/image_40.png?width=261&height=321',
      marketTitle: 'Category Food and Beverages',
      shopName: 'Coco.nut_katiishappy',
      marketId: '1',
      shopId: '2',
    },
    {
      marketImg:
        'https://media.discordapp.net/attachments/1079420055776940043/1094531619337031690/image_42.png?width=261&height=321',
      marketTitle: 'Category Food and Beverages',
      shopName: 'Coco.nut_katiishappy',
      marketId: '1',
      shopId: '3',
    },
    {
      marketImg:
        'https://media.discordapp.net/attachments/1079420055776940043/1094531619576094791/image_44.png?width=261&height=321',
      marketTitle: 'ตลาดเลียบด่วน',
      shopName: 'Wantong Cafe',
      marketId: '1',
      shopId: '4',
    },
    {
      marketImg:
        'https://img.wongnai.com/p/400x0/2017/02/20/12f9eac5d4b7424b988fceab76b6f8a5.jpg',
      marketTitle: 'ตลาดเลียบด่วน',
      shopName: 'Come Waan',
      marketId: '1',
      shopId: '5',
    },
    {
      marketImg:
        'https://media.discordapp.net/attachments/1079420055776940043/1094531619815182377/image_46.png?width=261&height=321',
      marketTitle: 'ตลาดเลียบด่วน',
      shopName: 'bfox_kitchen',
      marketId: '1',
      shopId: '6',
    },
    {
      marketImg:
        'https://media.discordapp.net/attachments/1079420055776940043/1094531620876341258/image_52.png?width=261&height=321',
      marketTitle: 'ตลาดนัดรถไฟศรีนครินทร์',
      shopName: 'ไอติมหม้อไฟยศเส',
      marketId: '1',
      shopId: '7',
    },
    {
      marketImg:
        'https://media.discordapp.net/attachments/1079420055776940043/1094531620586922095/image_50.png?width=261&height=321',
      marketTitle: 'ตลาดนัดรถไฟศรีนครินทร์',
      shopName: 'ฝุ่นตลบ',
      marketId: '1',
      shopId: '8',
    },
  ]
}
