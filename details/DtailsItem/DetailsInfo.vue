<template>
    <div class="DetailsInfo" v-if="Object.keys(DetailsInfo).length !== 0">
        <p class="DetailsInfoTitle">{{DetailsInfo.desc}}</p>  
        <div class="DetailsInfoMsg">
            <div class="DetailsInfoPrice">{{DetailsInfo.price}}</div>
            <div v-if="DetailsInfo.discountDesc.length !== 0" class="discount">
                <span class="DetailsInfoDiscount">{{DetailsInfo.discountDesc}}:</span>
                <span class="DetailsInfoOldPrice">{{DetailsInfo.oldPrice}}</span>
            </div>
        </div>
        <div  class="columns">
            <span class="DetailsColumns" v-for="columns in DetailsInfo.columns">{{columns}}</span>
        </div>
        
        <hr class="DetailsHr">
        
        <div class="services">
            <span v-for="services in DetailsInfo.shopInfo.services" class="DetailsServices">{{services.name}}</span>
        </div>
        <div class="store">
            <div class="storeInfo">
                <div class="storeLogo">
                <a href="">
                    <img :src="this.DetailsInfo.shopInfo.shopLogo" class="DetailsIcon">
                </a>
                <div class="storeName">{{DetailsInfo.shopInfo.name}}</div>
                </div>
                <div class="storePosition">未知</div>
            </div>
            <div class="storeRatings">
                <div class="number">
                    <div class="number-one">
                        <div class="amount">{{DetailsInfo.shopInfo.cSells | sellCountFilter}}</div>
                        <div>总销量</div>
                    </div>
                    <div class="number-to">
                        <div class="amount">{{DetailsInfo.shopInfo.cGoods}}</div>
                        <div>全部宝贝</div>
                    </div>
                </div>
                <div class="Ratings">
                    <div class="Ratings-name">
                        <div v-for="store in DetailsInfo.shopInfo.score">{{store.name}}</div>
                    </div>
                    <div class="Ratings-score">
                        <div class="Ratings-score-one" >
                            <div v-for="store in DetailsInfo.shopInfo.score" :class="{isScore:store.isBetter}">{{store.score}}</div>
                        </div>
                        <div class="Ratings-score-to" >
                            <div v-for="store in DetailsInfo.shopInfo.score" :class="{isScoreTo:store.isBetter}">{{store.isBetter? "高":"中"}}</div>    
                        </div>

                    </div>
                </div>       
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailsInfo",
    props:{
        DetailsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {

        };
    },
    methods: {
        methodName() {
            
        },
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
}
</script>
<style scoped>
    .DetailsInfo{
        display: block;
        width: 95%;
        margin: 0 2.5% 0;
    }
    .DetailsInfoTitle{
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 17px;
        max-height: 38px;
        text-indent: 1em;
        text-align: left;
        color: #9c9999;
    }
    .DetailsInfoMsg{
        height: auto;
        width: 100%;
        display: -webkit-box;
        margin-top: -2px;
        margin-left: 8px;
        font-weight: 700;
    }
    .DetailsInfoPrice{
        font-size: 25px;
        color: #9c9999;
        font-style: oblique;
    }
    .discount{
        display:block;
        margin-left: 15px;
        height: 100%;
    }
    .DetailsInfoOldPrice{
        margin-left: 5px;
        font-size: 17px;
        color: #7b7b7b;
        font-style:oblique;
        -webkit-text-decoration:line-through red;
    }
    .DetailsInfoDiscount{
        display: -webkit-box;
        color:#fff ;
        background-color: red;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 900;
        display: inline-block;
    }
    .columns{
        height: 15px;
        color: #858181;
        margin-top: 15px;
        margin-left: 10px;

    }
    .DetailsColumns{
        float: left;
        margin-right: 15px;
        font-size: 17px;
    }
    .DetailsHr{
        width: 95%;
        background-color: rgb(201, 201, 201);
        height: 0.1px;
        opacity: 1;
    }
    
    .services{
        margin-top: 5px;
        text-align: left;
    }
    .DetailsServices{
        margin-right: 8px;
    }
    .DetailsServices::before{
        margin-left: 8px;
        content: "";
        font-family: 'icomoon';
        width: 10px;
        height: 10px;
    }


    /* 店铺信息 */
    .store{
        width: 100%;
        margin-top: 20px;
        background-color: #fff;
        border-radius: 15px;
    }
    .storeInfo{
        display: flex;
    }
    .storeLogo{
        flex: 4;
        text-align: left;
        height: 55px;
    }
    .DetailsIcon{
        width: 55px;
        height: 55px;
        margin-left: 25px;
        border-radius: 55px;
        float: left;
        margin-right: 15px;
        border: 0.1px solid #ccc;
    }
    .storeName{
        float: left;
        line-height: 55px;
        text-decoration: underline rgb(161, 161, 161);
    }


    .storePosition{
        flex: 1;
        margin: auto;
        margin-right: 35px;
    }
    .storePosition::before{
        color: #f78383;
        content: "";
        font-family: 'icomoon';
    }



    .storeRatings{
        display: flex;
    }
    .Ratings{
        flex: 1;
        display: flex;
    }
    .Ratings-name{
        flex: 1;
    }
    .Ratings-name>div{
        margin-top: 8px;
    }
    .Ratings-score{
        flex: 1;
        display: flex;
        text-align: center;
        font-weight: 700;
    }
    .Ratings-score-one{
        flex: 1;
        margin-top: 8px;
        margin-left: -5px;
        color: rgb(154, 226, 154);
    }
    .Ratings-score-one>div{
        margin-bottom: 7px;    
    }
    .isScore{
        color: red;
    }
    .Ratings-score-to{
        flex: 1;
        margin-top: 8px;
        margin-right: 18px;
    }
    .Ratings-score-to>div{
        color:white;
        margin-bottom: 7px;
        background-color: rgb(154, 226, 154);
        border-radius: 8px;
    }
    .Ratings-score-to>.isScoreTo{
        background-color: red;
    }


    .number{
        flex: 1.5;
        display: flex;
        text-align: center;
        padding-top: 18px;
    }
    .number-one,.number-to{
        flex: 1;
    }
    .amount{
        font-size: 24px;
        margin-bottom: 15px;
    }
</style>