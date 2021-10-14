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
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        this.Scroll.on("scroll",(position)=>{
            this.$emit('position', position);
        })
        // pullingUp 扩展上拉加载的能力，pullUpLoad 选项对象 number类型默认值0 finisPullUp()结束上拉加载行为
        this.Scroll.on("pullingUp",()=>{
            this.$emit('pullingUp');
        })
    },
    methods: {
        // es6可以在传值时 直接通过= 设置默认值
        // srcollTo(x,y,time=600) {
        //     this.srcoll.srcollTo(x,y,tiem)
        // },
        // finishPullUp(){
        //     this.scroll.finishPullUp().refresh()
        // }
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
