<template>
    <div id="detail">
        <detail-nav-bar :id='id' @titleClick="titleClick" ref="nav"></detail-nav-bar>


        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <detail-swiper :topImage="topImage" @imgLoad="imgLoad"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-base-info1 ref="ref1" :goods="goods"></detail-base-info1>
            <detail-base-info2 ref="ref2" :goods="goods"></detail-base-info2>
            <detail-base-info3 ref="ref3" :goods="goods"></detail-base-info3>
            <detail-base-info4 ref="ref4" :goods="goods"></detail-base-info4>
        </scroll>

        <detail-bottom @addCart="addToCart"></detail-bottom>
        <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>

    </div>

</template>

<script>
    import DetailNavBar from "views/detail/childComps/DetailNavBar"

    import DetailSwiper from "views/detail/childComps/DetailSwiper"

    import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo"
    import DetailBaseInfo1 from "views/detail/childComps/DetailBaseInfo1"
    import DetailBaseInfo2 from "views/detail/childComps/DetailBaseInfo2"
    import DetailBaseInfo3 from "views/detail/childComps/DetailBaseInfo3"
    import DetailBaseInfo4 from "views/detail/childComps/DetailBaseInfo4"

    import DetailBottom from "views/detail/childComps/DetailBottom"

    import {getProductInfo, Goods} from "network/detail"

    import scroll from "components/common/scroll/Scroll"
    import {debounce} from  "common/utils"

    import {backTopMixin} from "common/mixin"

    import {mapActions} from 'vuex'


    export default {
        name: "Detail",
        data(){
            return {
                id: 0,
                topImage: [],
                res: null,
                goods: null,
                themTopYs: [0, 1000, 2000, 3000],
                getThemTopY: null,
                currentIndex: 0,
            }
        },
        mixins:[backTopMixin],
        created(){
            this.id = this.$route.params.id;
            this.getProductInfo(this.id);

            //防抖
            this.getThemTopY = debounce(() => {
                this.themTopYs = []
                this.themTopYs.push(0);
                this.themTopYs.push(this.$refs.ref1.$el.offsetTop);
                this.themTopYs.push(this.$refs.ref2.$el.offsetTop);
                this.themTopYs.push(this.$refs.ref3.$el.offsetTop);
                // console.log(this.themTopYs)

            })
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            scroll,
            DetailBaseInfo1,
            DetailBaseInfo2,
            DetailBaseInfo3,
            DetailBaseInfo4,
            DetailBottom
        },
        methods: {
            ...mapActions(['addCart']),
            getProductInfo(id){

                getProductInfo(id).then(res => {

                    this.res = res

                    this.topImage = this.res.data.images


                    this.goods = new Goods(this.res.data)
                    //console.log(res)


                    //console.log(this.goods);


                    //请求到数据后页面未必加载出来，获取不到dom，$nextTick会在完成加载后调用一次，不过这时图片未必加载出来
//                    this.$nextTick(()=>{
//                        this.themTopYs = []
//                        this.themTopYs.push(0);
//                        this.themTopYs.push(this.$refs.ref1.$el.offsetTop);
//                        this.themTopYs.push(this.$refs.ref2.$el.offsetTop);
//                        this.themTopYs.push(this.$refs.ref3.$el.offsetTop);
//                    })


                })
            },
            titleClick(index){
                //console.log(index);
                this.$refs.scroll.scrollTo(0, -this.themTopYs[index], 200);
            },

            //图片加载完成加载
            imgLoad(){
                //刷新scroll
                this.$refs.scroll.refresh();
                //添加防抖功能调用加载图片完成后逻辑操作
                //creat时获取了getThemTopY的返回函数，即已定义
                this.getThemTopY();

            },

            contentScroll(position){


                //1、滑动时导航栏跟页面联动效果
                const postitionY = -position.y

                let length = this.themTopYs.length;

                for (let i = 0; i < this.themTopYs.length; i++) {

                    if (this.currentIndex !== i && (( i < length - 1 && postitionY > this.themTopYs[parseInt(i)] && postitionY < this.themTopYs[i + 1]) || ( i === length - 1 && postitionY > this.themTopYs[parseInt(i)]))) {

                        this.currentIndex = i;

                       // console.log(this.currentIndex);
                        this.$refs.nav.currentIndex = this.currentIndex;

                    }
                }


                //2、回到顶部图标封装显示
                this.listenShowBackTop(position)


            },

            addToCart(){
                const product = {
                    id : this.id,
                    info : this.goods
                }

                //添加购物车第一种方法
                //this.$store.commit('addCart',product);
                //添加购物车第二种方法
//                this.$store.dispatch('addCart',product).then((res)=>{
//                    console.log(res);
//                });

                //方法三：将vuex中actions映射到该插件中直接使用
                this.addCart(product).then(res => {
                    console.log(res)

                    this.$toast.show(res)
                })


            }
        },
        mounted(){


        },
        update(){

        }

    }
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }

    .content {
        height: calc(100% - 44px - 49px);
    }

</style>