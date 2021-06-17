<template>
    <div class="goods-item" @click="itemClick">
        <!--<img :src="good.image" alt="" @load ='itemImgLoad'>-->
        <img v-lazy="good.image" alt="" @load ='itemImgLoad'>
        <div class="goods-info">
            <p>{{good.model}}</p>

            <span class="price">{{Number(good.price)}}</span>
            <span class="collect">{{Number(good.quantity)}}</span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props : {
            good : {
                type : Object,
                default(){
                    return {}
                }
            }
        },
        methods : {
            itemImgLoad(){
                //console.log('itemImgLoad');
                this.$bus.$emit('itemImgLoad');
            },
            itemClick(){
                //console.log(this.good.product_id);
                this.$router.push('/detail/'+ this.good.product_id)
            }
        }
    }
</script>

<style scoped>
    .goods-item {
        padding-bottom: 40px;
        position: relative;

        width: 40%;
    }

    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }

</style>