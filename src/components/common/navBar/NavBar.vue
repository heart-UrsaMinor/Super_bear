<template>
<!-- 底部导航栏只有一个所以使用id，但是这里不能使用唯一性因为搜索栏有很多不止一个 -->
    <div class="nav-bar">
        <div class="left"><slot name="Search"></slot></div>
        <div class="center"><slot name="Search2"></slot></div>
        <div class="right"><slot name="Search3"></slot></div>
    </div>
</template>

<script>
export default ({
    name:"NavBar"
})
</script>

<style  scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        /* 注意一个细节line-height需要添加内容否则无法撑开高度 */
        height: 44px;
        width: 100%;
        background-color: gainsboro;
    }
    .left,.right{
       width: 60px;
      
    }
    .center{
        flex: 1;
    }
</style>