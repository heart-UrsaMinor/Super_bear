import { request } from "./request"
export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}
export function getDetailsGoods(type, page) {
    return request({
        url: "/home/data?type=sell&page=1",
        params: {
            type,
            page
        }
    })
}

// 因为数据不在同一个位置，所以需要封装一个对象，再导出去(ES6类)
export class getDetailsInfo {
    constructor(itemInfo, columns, shopInfo) {
        this.desc = itemInfo.desc;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.shopInfo = shopInfo;
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = ShopInfo.name;
        this.fans = ShopInfo.cFans;
        this.sells = ShopInfo.cSells;
        this.score = ShopInfo.score;
        this.DetailsCount = ShopInfo.cGoods;
    }
}

export function getRecommend() {
    return request({
        url: "/recommend"
    })
}