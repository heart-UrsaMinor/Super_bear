<template>
    <div class="goodsListItem">
        <div class="ListItem_1">
            <div  @click="details" class="ListItem_1_one">
            <img :src="GoodlistImg"  class="goodsImg">
            <div class="recommended">
                <span class="goodsTitle">&nbsp;{{goodsItem.title}}</span>
                <div class="goodsBottom">
                    <span class="goodsPrice"><span>￥</span>{{goodsItem.price}}</span>
                    <span class="goodsCfav">{{goodsItem.cfav}}</span>
                </div>
            </div>
        </div>
        </div>


       <div class="ListItem_2">
           <div  @click="details" class="ListItem_2_one">
           <img :src="GoodlistImg"  class="goodsImg">
            <div class="recommended">
            <span class="goodsTitle">&nbsp;{{goodsItem.title}}</span>
            <div class="goodsBottom">
                <span class="goodsPrice"><span>￥</span>{{goodsItem.price}}</span>
                <span class="goodsCfav">{{goodsItem.cfav}}</span>
            </div>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    data() {
        return {
        };
    },
    props:{
       goodsItem:{
           type:Object,
           default(){
               return {}
           }
       }
    },
    methods: {
        // imgLoad() {
        //     if(this.$router.path("/home")){
        //         this.$bus.$emit("homeitemImageLoad")
        //     }else if(this.$router.path("/details:iid")){
        //         this.$bus.$emit("DetailsitemImageLoad")
        //     }
        // },
        details(){
            this.$router.push("/details"+this.goodsItem.iid)
            // 当配置理由后没有加上：iid则需要采用另一种方式，传递数据query
            // this.$router.push({
            //     path:"/details",
            //     query:{
            //         iid:this.goodsItem.iid
            //     }
            // })
        }
    },
    computed: {
        GoodlistImg() {
            return this.goodsItem.image || this.goodsItem.show.img
        },
    
    },    
    
    
}
</script>
<style  scoped>
    .goodsListItem{
        /* width: calc(50% - 10px);
        border-radius: 8px;
        background-color: white;
        margin: 15px 5px 0;
        cursor: pointer;
        padding:0px 0 10px;
        overflow: hidden; */
        display: flex;
        width: 100%;
        padding: 0px 10px 0px;
    }

    .recommended{
        overflow: hidden;
        height: auto;
        text-align: left;
        min-height: 55px;
        padding-top: 17px;
    }
    .goodsImg{
        width:100%;
        max-height: 260px;
        min-height: 260px;
        height: auto;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

    }
    .goodsTitle{
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 17px;
        height: 38px;
        margin-top: -13px;
        padding: 0 5px 0;
        text-indent: 0.5em;
    }
    .goodsBottom{
        margin-top: 5px;
    }
    .goodsPrice{
        height: 15px;
        font-size: 20px;
        color: red;
        margin-left: 5px;
        float: left;
    }
    .goodsPrice>span{
        font-size: 14px;
    }
    .goodsCfav{
        padding-top: 5px;
        margin-left: 15px;
        float: left;
        color:	#666;
        font-weight: 100;
    }
    .goodsCfav::before{
        content: "";
        color: red;
        font-family: 'icomoon';
        font-size: 14px;
        margin-right: 5px;
    }
    .ListItem_1{
        flex: 1;
        float: left;
        margin-right:5px;
        height: auto;
    }
    .ListItem_2{
        flex: 1;
        float: right;
        margin-left:5px;
        
        height: auto;


    }

    .ListItem_2>div,.ListItem_1>div{
        margin-top: 10px;
        border: solid 2px#DCDCDC ;
        border-radius: 8px;
        overflow: hidden;

    }
    .ListItem_1>div:active,
    .ListItem_2>div:active{
        transform: scale(1.01);
        margin-top: 8px;
    }
    .ListItem_1_one,.ListItem_2_one{
        padding-bottom: 5px;
    }
</style>
