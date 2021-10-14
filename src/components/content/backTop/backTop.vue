<template>
    <div class="backTop"></div>
</template>

<script>

export default ({
    name:"backTop",
    methods: {
        backTop() {
            this.$emit('backTop');
        },
    },
})
</script>
<style scoped>
    .backTop::before{
        position: absolute;
        content: "`";
        font-family: "icomoon";
        font-size: 40px;
        width: 40px;
        height: 40px;
        top: calc(100% - 130px);
        background-color: white;
        overflow: hidden;
        border-radius: 40px;
        border-top-right-radius: 25px;
        left: calc(100% - 50px);
        color: rgb(252, 147, 147);
    }
</style>
