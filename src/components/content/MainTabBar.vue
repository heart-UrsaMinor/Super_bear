<template>
<div class="MainTabBar">
       <tab-bar>
          <router-link to="/home" tag="div" class="bottomNav" exact-active-class="active" >
         <tab-bar-item class="TabBarItem">
           <div slot="item-text" class="MainTabText">首页</div>
         </tab-bar-item>
        </router-link>
        <router-link to="/category" tag="div" class="bottomNav" exact-active-class="active" >
         <tab-bar-item class="TabBarItem2" >
           <div slot="item-text" class="MainTabText">分类</div>
         </tab-bar-item>
         </router-link>
         <router-link to="/cart" tag="div" class="bottomNav" exact-active-class="active">
         <tab-bar-item class="TabBarItem3">
           <div slot="item-text" class="MainTabText">购物车</div>
         </tab-bar-item>
         </router-link>
         <router-link to="/profile" tag="div" class="bottomNav" exact-active-class="active">
         <tab-bar-item class="TabBarItem4">
           <div slot="item-text" class="MainTabText">我的</div>
         </tab-bar-item>
        </router-link>
       </tab-bar>
</div>
</template>

<script>
 import TabBar from '../common/TabBar/TabBar.vue'
  import TabBarItem from "../common/TabBar/TabBarItem.vue"
export default {
    name:"MainTabBar",
    components:{
    TabBarItem,
    TabBar
  }
}
</script>
<style scoped>
  .TabBarItem::before{
    font-family: 'icomoon';
    content:"";
    font-size: 25px;
    display: block;
    height: 50%;
    margin-top: 3px;
  }
  .TabBarItem2::before{
    font-family: 'icomoon';
    content:"";
    font-size: 25px;
    display: block;
    height: 50%;
    margin-top: 3px;
  }
  .TabBarItem3::before{
    font-family: 'icomoon';
    content:"";
    font-size: 25px;
    display: block;
    height: 50%;
    margin-top: 3px;
  }
  .TabBarItem4::before{
    font-family: 'icomoon';
    content:"";
    font-size: 25px;
    display: block;
    height: 50%;
    margin-top: 3px;
  }
  .bottomNav{
    flex: 1;
    text-align: center;
    height: 100%;
    color: 	black;
  }
  .active{
    color:rgb(252, 138, 138);

  }
  .MainTabText{
    font-size: 15px;
  }
</style>
