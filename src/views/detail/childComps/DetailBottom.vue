<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div><span class="text">客服</span></div>
            <div><span class="text">店铺</span></div>
            <div><span class="text">收藏</span></div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottom",
        methods : {
            addCart(){

                this.$emit('addCart')
            }
        }
    }
</script>

<style scoped>
    .bottom-bar{
        height: 49px;
        background-color: #fff;
        position: relative;
        display: flex;
        font-size: 13px;
    }
    .bar-item{
        flex: 1;
        display: flex;
    }
    .bar-item >div{
        flex: 1;
        text-align: center;
        line-height: 49px;

    }

</style>