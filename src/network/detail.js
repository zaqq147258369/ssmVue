import {request2} from "./request";

export function getDetail(iid) {
  return request2({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getShopDetail(iid) {
  return request2({
    url:'/detail/shop',
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

export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.logo;
    this.name = shopInfo.shopName;
    this.fans = shopInfo.watched_number;
    this.sells = shopInfo.dsrdata.product_count;
    this.score = [{
      "isBetter":false,
      "score":shopInfo.dsrdata.descriptionRating,
      "name":"描述相符"
    },{
      "isBetter":false,
      "score":shopInfo.dsrdata.serviceRating,
      "name":"服务态度"
    },{
      "isBetter":true,
      "score":shopInfo.dsrdata.qualityRating,
      "name":"发货速度"
    }]
    this.goodsCount = shopInfo.dsrdata.shop_id;
  }

}
