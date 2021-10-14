<template>
    <div id="swiper">
        <ul class="Shuffling_ul">
            <li v-for="(item,index) in banner" :key="index" class="Shuffling_ul_li" ref="Shuffling_ul_li">
                <a :href="item.link">
                    <img :src="item.image" alt="" class="Shuffling_ul_img">
                </a>
            </li>
            <ol class="Shuffling_ol">
                <li v-for="(item,index) in banner" :key="index" class="currtu"></li>
            </ol>
        </ul>
    </div>
</template>
<script>
import "./swiper"
export default({
    name:"swiper",
    data() {
        return {
        };
    },
    methods: {
        main:function(){
            this.init();
        },
        // 初始化模块
        init:function(){
            var init11 = setTimeout(()=>{
                this.$nextTick(()=>{
                var Banner = document.querySelector("#swiper")
                var BannerWidth = Banner.offsetWidth;
                var BannerHeight = Banner.offsetHeight;
                var ul = Banner.querySelector("ul:first-of-type");
                var ol = Banner.querySelector("ol:first-of-type");
                var first = ul.querySelector("li:first-of-type");
                var last = ul.querySelector("li:last-of-type");
                first.style.width = BannerWidth +"px"
                first.style.height = BannerHeight +"px"
                last.style.width = BannerWidth +"px"
                last.style.height = BannerHeight +"px"
                ul.appendChild(first.cloneNode(true));
                ul.insertBefore(last.cloneNode(true), ul.firstChild);
                var lis = this.$refs.Shuffling_ul_li;
                var count = lis.length
                ul.style.width = (count+2) * BannerWidth + "px";
                for(var i=0;i<lis.length;i++){
                    lis[i].style.width = BannerWidth + "px";
                    lis[i].style.height = BannerHeight +"px";
                };
                // 移动功能模块
                var index = 0;
                ul.style.transform = "translateX(" + -BannerWidth + "px)";
                
            });
            },200);
        }
    },
    mounted() {
        this.main()
    },
    computed: {
   
    },
    props:{
        banner:{
            type:Array,
            default(){
                return
            }
        }
    }
})
</script>

<style  scoped>
    #swiper{
        margin-top: -1px;
        height:200px;
        position: relative;
    }
  .Shuffling_ul{
      height: 100%;
  }
  .Shuffling_ul>li{
        float: left;
        background-color: red;
    }
    .Shuffling_ul>li>a>img{
        width: 100%;
        height: 100%;
    }
    .Shuffling_ol{
        position: absolute;
        top: 200px;

    }
    .currtu{
        background-color: #fff;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        float: left;
        margin-right: 5px;

    }
    .currtu1{
        background-color: silver;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        float: left;
        margin-right: 5px;
    }
</style>