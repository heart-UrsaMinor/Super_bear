<template>
<div class="MainTabBar">
       <keep-alive><router-view></router-view></keep-alive>
       <tab-bar>
          <router-link to="/home" tag="div" class="bottomNav" exact-active-class="active" >
         <tab-bar-item class="TabBarItem">
           <div slot="item-text">首页</div>
         </tab-bar-item>
        </router-link>
        <router-link to="/category" tag="div" class="bottomNav" exact-active-class="active" >
         <tab-bar-item class="TabBarItem2" >
           <div slot="item-text">分类</div>
         </tab-bar-item>
         </router-link>
         <router-link to="/cart" tag="div" class="bottomNav" exact-active-class="active">
         <tab-bar-item class="TabBarItem3">
           <div slot="item-text">购物车</div>
         </tab-bar-item>
         </router-link>
         <router-link to="/profile" tag="div" class="bottomNav" exact-active-class="active">
         <tab-bar-item class="TabBarItem4">
           <div slot="item-text">我的</div>
         </tab-bar-item>
        </router-link>

       </tab-bar>
       <!-- 注意驼峰命名法,首字母不用加- -->
       <!-- <tab-bar>
          <tab-bar-item path="/home" class="TabBarItem">
           <div slot="item-text">我的</div>
         </tab-bar-item>
         <tab-bar-item path="/category" class="TabBarItem">
           <div slot="item-text">分类</div>
         </tab-bar-item>
         <tab-bar-item path="/cart" class="TabBarItem">
           <div slot="item-text">购物车</div>
         </tab-bar-item>
         <tab-bar-item path="/profile" class="TabBarItem">
           <div slot="item-text">我的</div>
         </tab-bar-item>
         <tab-bar-item path="/add" class="TabBarItem">
           <div slot="item-text">添加</div>
         </tab-bar-item> 
       </tab-bar> -->
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
    content:"";
    font-size: 25px;
    display: block;
    height: 50%;
    margin-top: 3px;
  }
  .TabBarItem3::before{
    font-family: 'icomoon';
    content:"";
    font-size: 25px;
    display: block;
    height: 50%;
    margin-top: 3px;
  }
  .TabBarItem4::before{
    font-family: 'icomoon';
    content:"";
    font-size: 25px;
    display: block;
    height: 50%;
    margin-top: 3px;
  }
  .bottomNav{
    flex: 1;
    text-align: center;
    height: 100%;
    color: 	black
  }
  .active{
    color: red;
  }
</style>
