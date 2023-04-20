export interface Favorite {
  userId: string
  like: [{ shopId: string; product: string[] }]
}
