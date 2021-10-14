<template>
    <div class="swiper">
      <swiper :options="swiperOption" v-if="banner.length > 1 && isKeep">
        <swiper-slide v-for="item in banner">
          <a :href="item.link">
            <img :src="item.image" alt="" class="swiperImg">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import {Swiper,SwiperSlide} from "vue-awesome-swiper"
import "../../../../node_modules/swiper/dist/css/swiper.css"
import "../../../../node_modules/swiper/dist/js/swiper"
export default({
    name:"lunbotu",
      data(){
    return{
      swiperOption:{
        loop:true,
        autoplay:{
          delay:2000,
          disableOnInteraction: false,
        },
        pagination:{
          el: ".swiper-pagination",
        }
      },
      isKeep:false
    }
  },
  activated() {
    this.isKeep = true
  },
  deactivated() {
    this.isKeep = false
  },
  
  
    props:{
        banner:{
            type:Array,
            default(){
                return
            }
        }
    },
    components: { 
      Swiper,
      SwiperSlide
     },
})

</script>
<style  scoped>
.swiper,.swiper-container{
  position: relative;
  width: 100%;
  height: 200px;
}  
.swiper-slide,.swiperImg{
  width: 100%;
  height: 100%;
}
</style>