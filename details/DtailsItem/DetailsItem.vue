<template>
    <div class="DetailsItem">
        <!-- 导航 -->
        <nav-bar>
            <div slot="Search" class="Search1" @click="backClick"></div>
            <div slot="Search2" class="Search2">
                <div v-for="(titles,index) in DetailsTitles" :key="index" class="S2_one" :class="{active:index == currentIndex}" @click="active(index)">{{titles}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue"
export default ({
    name:"DetailsItem",
    data() {
        return {
            DetailsTitles:["商品","参数","评论","推荐"],
            currentIndex:0
        };
    }, 
    components: { 
        NavBar
    },
    methods: {
        active(index) {
            // this.currentIndex = index
            this.$emit('Detailsactive',index);
        },
        backClick(){
            this.$router.back()
        }
    },
})
</script>
<style  scoped>
    .DetailsItem{
        height: 45px;
        z-index: 9;
    }
    .Search2{
        display: flex;
        font-size: 14px;
    }
    .S2_one{
        flex: 1;
    }
    .active{
        color: red;
    }
    .Search1::before{
        font-family: 'icomoon';
        content:"";
        font-size: 20px;
        float: left;
        margin:1px 0 0  15px;
    }
</style>