<template>
    <div class="recommended">
        <div v-for="item in recommends" class="recommended-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>

export default ({
    name:"Recommended",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
})
</script>
<style  scoped>
    .recommended{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 30px;
    }
    .recommended-item{
        flex: 1;
    }
    .recommended-item>a>img{
        width: 83px;
        height: 83px;
        padding-bottom: 5px;
    }
</style>
