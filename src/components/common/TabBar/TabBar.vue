<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style>
  /* 在style引入需要加@ */
  #tab-bar{
    background-color:rgb(	220,220,220) ;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 49px;
    box-shadow: 1px 0px 10px rgba(100, 100, 100, 0.4);
  }
</style>
