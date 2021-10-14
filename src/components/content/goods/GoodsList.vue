<template>
    <div class="goodsList">
        <goods-list-item v-for="item in goods" :goods-item="item" class="goodsItem" />
    </div>
</template> 

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
   name:"GoodsList",
   props:{
       goods:{
           type:Array,
           default(){
               return []
           }
       }
   },
   components: { GoodsListItem },
}
</script>
<style  scoped>
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        overflow: hidden;  
        
    }
    .goodsItem{
        height: 100%;
        overflow: hidden;
    }
</style>
