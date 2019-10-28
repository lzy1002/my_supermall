import {request} from "./request.js";

export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(columns, itemInfo, shopInfo){
    this.columns = columns;
    this.title = itemInfo.title;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.highPrice = itemInfo.highPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.services = shopInfo.services;
    this.desc = itemInfo.desc;
  }
}

export class Shops {
  constructor(shopInfo){
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
  }
}

export function getRecommend() {
  return request({
    url: "/recommend"
  })
}
