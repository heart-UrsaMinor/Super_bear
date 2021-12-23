<template>
    <div class="Details">
        <details-item class="DetailsTop" v-show="isNavFixed" ref="DetailsTopOne" @Detailsactive="DeItemActive"/>
        <srcoll class="Details-Scroll" :pull-up-load="true" @position="position" ref="scroll">
            <!-- 导航 -->
            <details-item ref="DetailsTopTo"  @Detailsactive="DeItemActive"/>
            <details-swiper :details-swiper="detailsSwiper"/>
            <details-info :details-info="DetailsInfo"/>
            <!-- <h2>ID：{{this.iid}}</h2> -->
            <!-- <h2>详情页：{{$route.params.iid}}</h2> -->
            <!-- <h2>详情页：{{$route.query.iid}}</h2> -->
            <details-choose :details-swiper="detailsSwiper"/>
            <details-comment-info :comment-info="commentInfo"/>
            <div class="DetailsRecommended">猜你喜欢</div>
            <goods-list :goods="DetailsGoods"/>
            <div class="DetailsBottom">到底啦,请看看别的吧</div>
        </srcoll>
        <details-nav-bottom  class="Details-Nav-Bottom"/>
    </div>
</template>

<script>
import {getDetail,getDetailsInfo,getDetailsGoods,getRecommend} from "network/details"
// 商品数据
import DetailsInfo from "./DtailsItem/DetailsInfo.vue"
// 导航
import DetailsItem from "./DtailsItem/DetailsItem.vue"
import DetailsChoose from "./DtailsItem/DetailsChoose.vue"
// 评论
import DetailsCommentInfo from "./DtailsItem/DetailsCommentInfo.vue"
// 推荐商品
import GoodsList from "components/content/goods/GoodsList.vue"


import DetailsNavBottom from "./DtailsItem/Details-Nav-bottom.vue"
// 轮播
import detailsSwiper from "./DtailsItem/DetailsSwiper.vue"
import Srcoll from "components/common/scroll//scroll.vue"
export default ({
    name:"Details",
    data() {
        return {
            iid: null,
            detailsSwiper:[],
            DetailsInfo:{},
            isNavFixed:false,
            DetailsTop:0,
            choose:false,
            DetailsGoods:[],
            // 评论信息
            commentInfo:[],
            // 滚动位置
            ScrollToPosition:null,
            i:0
        };
    },
    methods: {
        position(position) {
            this.isNavFixed = (-position.y)>this.DetailsTop;
            position.y = -position.y
            if(position.y >= 0 && position.y <= 549){
                this.i = 0;
            }else if(position.y >= 550 && position.y <= 849 ){
                this.i = 1;
            }else if(position.y >= 850 && position.y <= 1049){
                this.i = 2;
            }else if(position.y >= 1050){
                this.i = 3;
            }
            this.$refs.DetailsTopOne.currentIndex = this.i
            this.$refs.DetailsTopTo.currentIndex = this.i 
        },
        play(){
            this.choose != true
        },
        DeItemActive(index){
            // 让hack方式的两个显示处于同一位置
            switch(index){
                case 0:
                    this.ScrollToPosition =  1;
                    break;
                case 1:
                    this.ScrollToPosition = 550;
                    break;
                case 2:
                    this.ScrollToPosition = 850;
                    break;
                case 3:
                    this.ScrollToPosition = 1100;
                    break;
            }
            this.$refs.DetailsTopTo.currentIndex = index
            this.$refs.DetailsTopOne.currentIndex = index
            this.$refs.scroll.ScrollTop(0,-this.ScrollToPosition,0)
        }
    },
    created() {
        this.iid = this.$route.params.iid 
        getDetail(this.iid).then((res)=> {
            const data = res.result;
        // 详情页轮播图数据
            this.detailsSwiper = data.itemInfo.topImages
        //详情页商品数据
            this.DetailsInfo = new getDetailsInfo(data.itemInfo,data.columns,data.shopInfo)
            // console.log(data);
            if(data.rate.cRate != 0){
                this.commentInfo = data.rate.list
            }
        })
        // getDetailsGoods().then((res)=>{
        //     this.DetailsGoods=  res.data.list;
        //     this.DetailsGoods.sort(function(){
        //         return (0.5-Math.random());
        //     })
        // })
        // 推荐商品
        getRecommend().then(res=>{
            this.DetailsGoods = res.data.list
        })
        },

    components: { DetailsItem,DetailsNavBottom,detailsSwiper,getDetailsInfo,DetailsInfo,Srcoll,DetailsChoose,GoodsList,getDetailsGoods,DetailsCommentInfo,getRecommend},
    
})
</script>
<style  scoped>
    .Details{
        overflow: hidden;
        z-index: 5;
        background-color: rgb(242, 241, 241);
    }
    .Details-Scroll{
        height: calc(100vh - 55px);
    }
    .DetailsTop{
        position: fixed;
        width: 100%;
        z-index: 5;
    }
    .details-show{
        height: 400px;
        width: 100%;
        background-color: #fff;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
    .DetailsRecommended{
        margin-top: 15px;
        padding: 5px;
        background-color: #ccc;
        border-radius: 5px;
        height: 30px;
        font-size: 20px;
        width: 95%;
        margin: 2.5% 2.5% 0;
    }
    .DetailsBottom{
        text-align: center;
        color: #ccc;
    }
    .Details-Nav-Bottom{
        height: 55px;
        background-color: rgb(242, 241, 241);
        position: fixed;
        width: 100%;
        bottom: 0;
    }
</style>