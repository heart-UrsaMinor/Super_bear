<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import scroll from "better-scroll"
import "@better-scroll/observe-dom"
import "@better-scroll/pull-up"
export default ({
    name:"scroll",
    data() {
        return {
            Scroll: null,
        };
    },
    mounted() {
        this.Scroll = new scroll(this.$refs.wrapper,{
            observeDOM:true,
            click:true,
            disableTouch:false,
            // observeImage:true,
            // better-scroll2就解决了这个问题直接添加这个属性即可100毫秒调用一次重新计算高度，因为这个遍历图片有点多不能一张图条就调用一次不现实所以采用别的方法
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            scrollX:true,
            tap:true,
            useTransition:false
        })
        if(this.probeType === 3){
            // pullingUp 扩展上拉加载的能力，pullUpLoad 选项对象 number类型默认值0 finisPullUp()结束上拉加载行为
            this.Scroll.on("pullingUp",()=>{
                this.$emit('pullingUp');
            })
        }
        // 实时监听滚动条位置，发射出去判断隐藏或显示返回顶部
        this.Scroll.on("scroll",(position) =>{
            this.$emit('position',position);
        })
    
        // this.Scroll.on('beforeScrollStart', (beforeScrollStart) => {
        //   console.log(beforeScrollStart);
        //   console.log("开始");
        // })
        // this.Scroll.on("scroll",(scroll)=>{
        //     console.log(scroll.x);
        //     console.log("记录");
        // })
        // this.Scroll.on('touchEnd', (touchEnd) => {
        //     console.log(touchEnd);
        // console.log("手指离开");
        // })


    },
    methods: {
        // es6可以在传值时 直接通过= 设置默认值
        ScrollTop(x,y,time) {
            this.Scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.Scroll && this.Scroll.finishPullUp()
        },
        refresh(){
            this.Scroll.refresh()
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    }
})
</script>
