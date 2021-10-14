<template>
    <div class="category">
        <scroll class="content" :probe-type="0">
            <ul>
                <li v-for="item in 1000">{{item}}</li>
            </ul>
        </scroll>
    </div>
</template>

<script>
import Scroll from "../../components/common/scroll/scroll.vue"
export default {
    name:"category",
    data() {
        return{}
    },
    components: { 
        Scroll

     },
}
</script>
<style scoped>
    .content{
        background-color: red;
        height: 200px;
    }
    
</style>