export interface Market {
  marketId: string
  marketName: string
  marketImg: string
  marketIntroImg: string
  readmore: string
  marketDescribe: string
}
const test = {}
export class MarketClass {
  marketId: string
  marketName: string
  marketImg: string
  marketIntroImg: string
  readmore: string
  marketDescribe: string
  constructor() {
    this.marketId = ''
    this.marketName = ''
    this.marketImg = ''
    this.marketIntroImg = ''
    this.readmore = ''
    this.marketDescribe = ''
  }
}
