<template>
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in detailsSwiper">
            <img :src="item" class="swiperImg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import {Swiper,SwiperSlide} from "vue-awesome-swiper"
import "../../../../node_modules/swiper/dist/css/swiper.css"
import "../../../../node_modules/swiper/dist/js/swiper"


export default {
     data(){
    return{
      swiperOption:{
        pagination:{
          el: ".swiper-pagination",
          dynamicBullets:true
        }
      },
      isKeep:false,
      ImgFullScreen:false
    }
  },
  activated() {
    this.isKeep = true
  },
  deactivated() {
    this.isKeep = false
  },
    
    components: { 
      Swiper,
      SwiperSlide
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

<style scoped>
.swiper{
  box-shadow:2px 10px 15px #666 ;
  background-color: #fff;
}
.swiper,.swiper-container{
  position: relative;
  width: 100%;
  height: 400px;
}  
.swiperImg{
  width: 100%;
  height: 100%;
}
.swiper-pagination{
  --swiper-pagination-color: red;
}

</style>