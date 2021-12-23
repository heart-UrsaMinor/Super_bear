<template>
  <div id="app">
    <keep-alive exclude="Details"><router-view></router-view></keep-alive>
    <main-tab-bar v-if="$route.meta.showTab"/>
  </div>
</template>
<script>
 import MainTabBar from "./components/content/MainTabBar.vue"
export default({
  name:"App",
  data() {
    return {
      footShow: true,
    };
  },
  components:{
    MainTabBar
  }
})
</script>
<style>

@import url("./assets/css/base.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
