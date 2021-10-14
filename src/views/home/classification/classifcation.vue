<template>
    <div class="classifcation" >
        <div v-for="(item,index) in titles" :key="index" class="titles"  :class="{active: index === currentIndex}" @click="selected(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default ({
    name:"classifcation",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        };
    },
    
    methods: {
        selected(index){
            this.currentIndex = index;
            this.$emit('tabClick',index);
        }
    },

    mounted() {


    }   
})  
</script>
<style  scoped>
    .classifcation{
        height: 30px;
        width: 100%;
        display: flex;
        text-align: center;
        overflow: hidden;
        box-shadow:10 100 10 gainsboro
    }
    .titles{
        flex: 1;
        font-weight: 600;
        font-size: 15px;
    }
   .active{
       color:#FF4500;
       font-size: 17px;
       
   }
   .active>span{
       border-bottom: 2px solid#FF4500;
       padding-bottom: 2px;
   }
</style>
