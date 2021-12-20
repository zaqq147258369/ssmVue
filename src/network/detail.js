import {request2} from "./request";

export function getDetail(iid) {
  return request2({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class GoodsInfo {
  constructor(productName,itemInfo,colums,services) {
    this.title = productName //标题
    this.desc = itemInfo.promo_price_name   //描述
    this.newPrice = itemInfo.price_2 //价格
    this.oldPrice = itemInfo.price_1 //原价格
    this.discount = itemInfo.price_type_name //价格名称
    this.colums = colums
    this.services = services
    this.realPrice = itemInfo.price_4_sale;
  }
}
