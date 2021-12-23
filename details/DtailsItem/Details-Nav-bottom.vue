<template>
    <div class="Details-Nav-bottom">
        <div class="Details_Bottom_one">
            <div class="Customer-service">
                <div></div>
                <span>客服</span>
            </div>
            <div class="store">
                <div></div>
                <span>店铺</span>
            </div>
            <div class="collection">
                <div></div>
                <span>收藏</span>
            </div>
        </div>
        <div class="Details_Bottom_to">
            加入购物车
        </div>
        <div class="Details_Bottom_three">
            下单
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style   scoped>
    .Details-Nav-bottom{
        display: flex;
        justify-content: center;
    }
    .Details-Nav-bottom>*{
        flex: 1;
        padding-top: 5px;
    }
    .Details_Bottom_one{
        flex: 2;
        display: flex;
    }
    .Customer-service,.store,.collection{
        padding-top: 5px;
        flex: 1;
        font-family: "icomoon";
    }
    .Customer-service>div{
        color: hotpink;
        font-size: 20px;
    }

    .store>div{
        color:rgb(197, 197, 197);;
        font-size: 20px;
    }
    .collection>div{
        font-size: 20px;
        color: rgb(197, 197, 197);
    }
    .Details_Bottom_to{
        line-height: 40px;
        color: #5b5b5b;
        background:linear-gradient(to right bottom,rgba(255, 0, 0, 0.658),rgb(248, 161, 161,0.7));

    }
    .Details_Bottom_three{
        line-height: 40px;
        color: #5b5b5b;
        background-color: rgba(255, 166, 0, 0.439);

    }
</style>