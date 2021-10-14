<template>
        <div class="tab-bar-item">
        <!-- @click="itemclick" -->
        <div><slot name="item-icon"></slot></div>
        <div><slot name="item-text"></slot></div>
    </div>
</template>
<script>

export default{
    name:"TabBarItem",
    // props:{
    //     path:{String,
    //     default:"/home"}
    // },
    // methods: {
    //     itemclick() {
    //        this.$router.push(this.path)
    //     },
    // },
}
</script>
<style scoped>

  .tab-bar-item{
    flex: 1;
    height: 100%;
    text-align: center;
  }

</style>