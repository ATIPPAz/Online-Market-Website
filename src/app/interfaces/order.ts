export interface Order {
  userId: string
  orderId: string
  orderDate: string
  orderStatus: string
  orderProduct: [
    {
      productId: string
      productPrice: number
      productQty: number
    }
  ],
  marketId: string
  shopId: string
}
