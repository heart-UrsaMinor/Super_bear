<template>
    <div class="goodsListItem">
           <img :src="goodsItem.show.img" alt="" class="goodsImg">
       <div class="recommended">
           <a href="###">
               <img src="" alt="">
           <span class="goodsTitle">&nbsp;{{goodsItem.title}}</span>
           <span class="goodsPrice"><span>￥</span>{{goodsItem.price}}</span>
           <span class="goodsCfav"><span>付款:</span>{{goodsItem.cfav}}</span>
           </a>
       </div>
    </div>
</template>

<script>
export default {
   name:"GoodsListItem",
   props:{
       goodsItem:{
           type:Object,
           default(){
               return {}
           }
       }
   },
   filters: {
       
   },
}
</script>
<style  scoped>
    .goodsListItem{
        width: calc(50% - 10px);
        border-radius: 8px;
        background-color: white;
        margin: 15px 5px 0;
        cursor: pointer;
        padding:0px 0 10px;
        overflow: hidden;
    }

    .recommended{
        overflow: hidden;
        height: auto;
        text-align: left;
    }
    .goodsImg{
        width:100%;
        height: auto;
        min-height: 200px;
    }
    .goodsTitle{
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 17px;
         margin-top: -13px;
        padding: 0 5px 0;
    }
    .goodsPrice{
        height: 15px;
        font-size: 20px;
        color: red;
        margin-left: 5px;
    }
    .goodsPrice>span{
        font-size: 14px;
    }
    .goodsCfav{
        margin-left: 15px;
        color:	#666;
        font-weight: 100;
    }
</style>
