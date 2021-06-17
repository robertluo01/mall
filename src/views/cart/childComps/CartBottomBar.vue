<template>

    <div class="bottom-bar">
        <div class="button-content">
            <check-button class="check-button" :is-checked="isSelectAll" @click.native="allClick"></check-button>
            <span>全选</span>
        </div>

        <div class="total-price">
            <span>合计：{{totalprice}}</span>
        </div>

        <div class="calculate">
            <span>去计算（{{checkLength}}）</span>
        </div>
    </div>

</template>

<script>

    import CheckButton from "components/content/checkButton/CheckButton"

    import {mapGetters} from 'vuex'


    export default {
        name: "CartBottomBar",
        components:{
            CheckButton
        },
        computed : {
            ...mapGetters(['cartList']),
            totalprice(){
                return '￥'+ this.$store.state.cartList.filter( item =>{

                    return item.checked
                    }).reduce((preValue,item)=>{

                       return preValue + item.info.num_price * item.count
                    },0).toFixed(2)
            },
            checkLength(){
                return this.$store.state.cartList.filter(item =>{
                    return item.checked
                }).reduce((preVlaue,item)=>{
                    return preVlaue + item.count
                },0)
            },
            isSelectAll:{
                get() {
                    //没有商品时全选不选中
                    if(this.cartList.length == 0) return false


                    //判断是否有不选中，若有，全选不选中，则返回false
                    // return !(this.$store.state.cartList.filter(item => !item.checked ).length)

                    //判断是否有一个不选中，若有，返回false
                    //return !this.$store.state.cartList.find(item=> !item.checked )


                    return this.cartList.every(item=>item.checked)
                },
                set(){}

            }
        },
        methods : {
            allClick(){

                if(this.isSelectAll){
                    this.cartList.forEach(function (item) {
                        item.checked = false
                    })
                }else{
                    this.cartList.forEach(function (item) {
                        item.checked = true
                    })
                }


            }
        }
    }
</script>

<style scoped>

    .bottom-bar{
        display: flex;
        height: 40px;
        background-color: #eee;
        position: relative;
        line-height: 40px;
        font-size: 14px;
    }
    .button-content{
        display: flex;
       align-items: center;
        margin-left: 10px;
        width: 90px;
    }
    .check-button{
        width: 20px;
        height:20px;
        line-height: 20px;
        margin-right: 5px;

    }
    .total-price{
        margin-left: 20px;
        flex: 1;
    }
    .calculate{
        position: relative;
        right: 0px;
        width: 90px;
        background-color: orangered;
    }

</style>