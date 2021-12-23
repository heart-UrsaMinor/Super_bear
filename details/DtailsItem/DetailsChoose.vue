<template>
    <div class="DetailsChoose" @click.stop="showMeth" :class="{ShowClass:this.isShow}">
        <div v-if="!isShow" class="selection-sort">
            <div class="selection-name">
                <div class="selection-name-one">选择分类:</div>
                <div class="selection-name-to">试试个人尺码</div>
            </div>
            <div class="selection-icon">
                 <div class="selection-icon-one">
                     <img v-for="item in detailsSwiper.slice(0,4)" :src="item" >
                 </div>
                 <div class="selection-icon-to">
                     共{{detailsSwiper.length}}种颜色可选
                 </div>
            </div>
        </div>
        <div v-if="isShow" class="Show-choose">
            <div class="Show-choose-size">
                    <div class="Choose-size-one">
                        尺码
                    </div>
                    <div class="Choose-size-to" @click.stop.prevent="showMethTo">
                        
                    </div>
                </div>
                <div class="Choose-style">
                    <div v-for="(size,index) in size" class="style" @click="ShowSize(index)" :class="{ShowSize:index == ShowSizeIndex}">{{size}}</div>
                </div>
        </div>
        <div class="Show-choose-img">
            <div class="Show-choose-img-one" v-for="item in detailsSwiper" >
                <img  :src="item" >
                <div class="Show-choose-img-text">秋波蓝</div>
            </div>
            <!-- <div v-for="text in chooseText.slice(0,detailsSwiper.length)" class="Show-choose-img-text">{{text}}</div> -->
        </div>
    </div>
</template>

<script>
    name:"DetailsChoose"
    export default {
         data() {
        return {
            isShow : false,
            size:["xxs适合60斤","S","M","L","XL","2XL"],
            chooseText:["青蓝色","橘红色","茶白色","秋波蓝","瓜皮绿","瓶沁色"],
            ShowSizeIndex:null,
            };
    },
     methods: {
         showMeth(){
            this.isShow = true;
         },
         showMethTo(){
             this.isShow = false;
         },
         ShowSize(index){
            this.ShowSizeIndex = index
            
         }
     },
     mounted() {
     },
     
     props:{
         detailsSwiper:{
             type:Array,
             default(){
                 return []
             }
         }
     }
    }
</script>
<style  scoped>
    .DetailsChoose{
        background-color: #fff;
        height: 100px;
        width: 95%;
        margin: 18px 2.5% 0;
        border-radius: 15px;
        overflow: hidden;
    }
    .ShowClass{
        animation: DetailsShow 0.1s;
        -webkit-animation-fill-mode: forwards;
    }
    @keyframes DetailsShow {
        from{
            height: 100px;
        }
        to{
            height: auto;
        }
    }

    /* 选择分类 */
    .selection-sort{
        display: flex;
        text-align: center;
        height: 100%;
    }
    .selection-name{
        flex: 1;
        font-size: 18px;
        font-weight: 600;
        font-family: "宋体";
        text-align: center;
        margin: auto;
    }
    .selection-name-to{
        margin-top: 5px;
        color: rgba(204, 204, 204, 0.85);
    }
    .selection-icon{
        flex: 2;
    }
    .selection-icon-one{
        height: 60%;
        padding-right: 10px;
        display: block;
    }
    .selection-icon-one>img{
        height: 45px;
        width: 45px;
        margin: 5px;
        border-radius: 3px;
    }
    .selection-icon-to{
        height: 40%;
        width: 100%;
        font-size: 14px;
        margin-top: 5px;
    }
    

    /* 展示 */
    .Show-choose{
        width: 100%;
        padding: 10px 20px  0;
        overflow: hidden;
    }
    .Show-choose-size{
        font-size: 20px;
    }
    .Choose-size{
        text-align: center;
    }
    .Choose-size-one{
        float: left;
    }
    .Choose-size-to{
        font-family: "icomoon";
        float: right;
        font-size: 25px;
        border-radius: 5px;
        display: inline-block;
    }
    .Choose-style{
        display: block;
        text-align: left;
        margin-top: 35px;
    }
    .style{
        float: left;
        border-radius: 5px;
        background-color: rgb(233, 230, 230);
        margin-right: 15px;
        text-align: center;
        min-width: 18px;
    }
    .ShowSize{
        border: solid 1px orange;
    }
    .Show-choose-img{
        margin: 5% 5% 0;
    }
    .Show-choose-img-one{
        float: left;
        width: 30%;
        height: 130px;
        border-radius: 5px;
        margin: 0 5px 0;
        margin-bottom: 10px;
    }
    .Show-choose-img-one>img{
        width: 100%;
        height: 80%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .Show-choose-img-text{
        height: 20%;
        width: 100%;
        margin-top: -5px;
        background-color: rgb(233, 230, 230);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        line-height: 2;
    }

</style>