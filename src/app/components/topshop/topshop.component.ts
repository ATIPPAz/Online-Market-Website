import { Component, Input } from '@angular/core'



@Component({
  selector: 'app-topshop',
  templateUrl: './topshop.component.html',
  styleUrls: ['./topshop.component.css'],
})
export class TopshopComponent {
  @Input('randomShopData') randomShopData = []


  // data: TopShop[] = [
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2019/01/15/aa7b249dc9a545fda16ff07f0a193737.jpg',
  //     marketTitle: 'ตลาดนัดสวนจตุจักร',
  //     shopName: 'ร้านเจ๊อึ่ง',
  //     shopId: '1',
  //   },
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2021/07/11/1374a1704200474a9b8bb3c4ca2f60d1.jpg',
  //     marketTitle: 'ตลาดนัดสวนจตุจักร',
  //     shopName: 'ชิ้นปั่นสด',
  //     shopId: '2',
  //   },
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2020/07/28/b48698d0987f48afa1067ea3e1352f9d.jpg',
  //     marketTitle: 'ตลาดนัดสวนจตุจักร',
  //     shopName: 'Miruku Pure Milk',
  //     shopId: '3',
  //   },
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2016/12/25/31117e65e54448f8baf472b70d96a5ad.jpg',
  //     marketTitle: 'ตลาดเลียบด่วน',
  //     shopName: 'Wantong Cafe',
  //     shopId: '4',
  //   },
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2017/02/20/12f9eac5d4b7424b988fceab76b6f8a5.jpg',
  //     marketTitle: 'ตลาดเลียบด่วน',
  //     shopName: 'Come Waan',
  //     shopId: '5',
  //   },
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2020/12/12/a42734374e174c75a19b8337aed83177.jpg',
  //     marketTitle: 'ตลาดเลียบด่วน',
  //     shopName: 'bfox_kitchen',
  //     shopId: '6',
  //   },
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2015/08/27/1e7f7b10ac7345c2a46b96081913387a.jpg',
  //     marketTitle: 'ตลาดนัดรถไฟศรีนครินทร์',
  //     shopName: 'ไอติมหม้อไฟยศเส',
  //     shopId: '7',
  //   },
  //   {
  //     marketImg:
  //       'https://img.wongnai.com/p/400x0/2018/12/20/6d2c1b63c92c48d4b9104a02c9886a1e.jpg',
  //     marketTitle: 'ตลาดนัดรถไฟศรีนครินทร์',
  //     shopName: 'ฝุ่นตลบ',
  //     shopId: '8',
  //   },
  // ]
}
