<template>
    <div id="home">
        <srcoll class="home-scroll" ref="scroll" :probe-type="3" @position="position" :pull-up-load="true" @pullingUp="loadMore">
            <nav-bar>
                <div slot="Search"><a href="./home">金品柚</a></div>
                <div slot="Search2">
                <div class="Search-home">
                    <span class="Search-home-text">搜索</span>
                    <span class="Search-home-text2">|</span>
                    <span class="Search-home-text3"></span>
                    <span class="Search-home-text4"><input type="search" placeholder="精品柚子"></span>
                </div>
                </div>
                <div slot="Search3"><a href="###">登录</a></div>
            </nav-bar>
        <swiper :banner="banner"></swiper>
        <recommended :recommends="recommends"></recommended>
        <classifcation :titles="titles" @tabClick="tabclick"/>
        <goods-list :goods="shwoGoods"></goods-list>
        </srcoll>
        <back-top @click.native="backTop" ref="backtop" v-show="scrollTop"/>
        <!-- 如果要监听原生组件事件必须加上native -->
    </div>
</template>

<script>
// 网络请求数据
import {getHomeMultidata,getHomeGoods} from "../../network/home"

// 公共
import NavBar from "../../components/common/navBar/NavBar.vue"
import GoodsList from "../../components/content/goods/GoodsList.vue"
import srcoll from "../../components/common/scroll//scroll.vue"
import BackTop from "../../components/content/backTop/backTop.vue"
// 栏目图片
import Recommended from "./Recommended/Recommended.vue"
import classifcation from "./classification/classifcation.vue"


// 插件
import Swiper from "./swiper/lunbotu.vue"
export default {
    name:"home",
   data() {
       return {
           banner:[],
           recommends:[],
           titles:['流行',"新款","精选","金柚"],
           goods:{
               "pop":{page:0,list:[]},
               "new":{page:0,list:[]},
               "sell":{page:0,list:[]},
               "jinju":{page:0,list:[]},
           },
           currentType:"pop",
           scrollTop:false
       };
   },
    components:{
        NavBar,
        getHomeMultidata,
        Swiper,
        Recommended,
        classifcation,
        GoodsList,
        srcoll,
        BackTop
    },
    created (){
        this.getHomeMultidata()     
        this.getHomeGoods("pop")
        this.getHomeGoods("new")
        this.getHomeGoods("sell")
        this.getHomeGoods("jinju")
    },
    methods: {
        getHomeMultidata() {
            getHomeMultidata().then(res=>{
                this.banner = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            });
            
        },
        getHomeGoods(type){
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
            //    this.goods[type].list.pusu(...res.data.list) 不能使用apply方法
            //    将数据存放到数组中，注意...数组这个方法是将数组的元素个个取出
            // 很奇怪没有赋值就有数据了
                for(var i of res.data.list){
                    this.goods[type].list.push(i)
                }
                this.goods[type].page += 1
            })
        },

        tabclick(index){
            switch(index){
                case 0:
                    this.currentType = "pop"
                    break;
                case 1:
                    this.currentType = "new"
                    break;
                case 2:
                    this.currentType = "sell"
                    break;
                case 3:
                    this.currentType = "new"
                    break;
            }
        },
        backTop(){
            this.$refs.scroll.Scroll.scrollTo(0,0,500)
        },
        position(position){
            var y = position.y;
            y = -y;
           this.scrollTop = y > 980

        },
        loadMore(){
            this.getHomeGoods(this.currentType)
            this.$refs.scroll.Scroll.finishPullUp()
            // .refresh()
        }
    },
    computed: {
        shwoGoods() {
            return this.goods[this.currentType].list
        },
    
    },

    beforeRouteEnter:(to,from,next)=>{
        next();
    }
}
</script>
<style>
    #home{
        overflow-x: hidden;
        height: 100vh;
    }
    .Search-home{
        background-color: #fff;
        height: 34px;
        margin-top: 5px;
        border-radius: 12px;
        display: flex;
    }
    .Search-home-text{
        color: gainsboro;
        float: left;
        margin: -5px 0px 5px 0px;
        width: 35px;
        font-size: 12px;
    }
     .Search-home-text2{
        color: gainsboro;
        float: left;
        margin: -5px 0 0 0;
     }
    .Search-home-text3::before{
        font-family: 'icomoon';
        content:"";
        color: darkgray;
        float: left;
        margin: -5px 5px 0 3px;
    }
    .Search-home-text4{
        flex: 1;
    }
    .Search-home-text4>input{
        display: block;
        width: 100%;
        flex: 1;
        height: 34px;
        font-size: 12px;
         margin-top: -5px;
         border-top-right-radius:15px;
         border-bottom-right-radius:15px;
         padding-left: 15px;
         outline: none;
         margin-top: 0px;
         border: none;
    }
    .home-scroll{
        height: calc(100vh - 49px);
    }
</style>