<template>
    <div id="home">
        <nav-bar :groundColor="groundColor"  class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>

        <tab-control
                class="tab-control"
                :titles="tab_titles"
                @tabClick="tabClick"
                ref="tabControl1"
                v-show = "isTabShow"
        />


        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                @scroll="topScroll"
                :pullUpLoad = true
                @loadMore = 'moreGoods'

        >
            <home-swiper :banner="banners" @swiperImageLoad="swiperImageLoad" />

            <recommend-view :recommends="recommends" />

            <feature/>

            <tab-control   :titles="tab_titles" @tabClick="tabClick" ref="tabControl2"/>

            <goods-list :goods="showGoods"/>
        </scroll>


        <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>


    </div>
</template>

<script>
    import HomeSwiper from "views/home/childComps/HomeSwiper"
    import RecommendView from "views/home/childComps/RecommendView"
    import Feature from "views/home/childComps/Feature"

    import NavBar from "components/common/navbar/NavBar"
    import TabControl from "components/content/TabControl/TabControl"
    import GoodsList from "components/content/goods/GoodsList"


    import Scroll from "components/common/scroll/Scroll"

    import {getHomeMultiData,getHomeGoods} from "network/home"

    import {debounce} from  "common/utils"

    import {backTopMixin} from "common/mixin"


    export default {
        name: "Home",
        components :{
            NavBar,
            HomeSwiper,
            RecommendView,
            Feature,
            TabControl,
            GoodsList,
            Scroll,

        },
        mixins:[backTopMixin],
        data(){
            return{
                groundColor:'pink',
                banners : [],
                recommends : [],
                tab_titles : ['流行','新款','精选'],
                goods : {
                    'pop' : {
                        page : 0,
                        list : []
                    },
                    'sell' : {
                        page : 0,
                        list : []
                    },
                    'news' : {
                        page : 0,
                        list : []
                    }
                },
                currentType : 'pop',
                isShowBackTop : false,
                taboffsetTop : 0,
                isTabShow : false,
                saveY : 0

            }
        },
        computed : {
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        activated (){


            this.$refs.scroll.scrollTo(0,this.saveY,0)
            this.$refs.scroll.refresh();



        },

        deactivated () {
            this.saveY = this.$refs.scroll.getScrollY();

        },


        created(){

            //调用methods方法
            this.getHomeMultiData();


            this.getHomeGoods('pop');
            this.getHomeGoods('news');
            this.getHomeGoods('sell');




        },
        mounted (){


            //图片完成加载事件监听
            const refresh = debounce(this.$refs.scroll.refresh,200)

            this.$bus.$on('itemImgLoad',()=>{

                //this.$refs.scroll.refresh();
                //调用防抖动函数
                refresh();

            })



        },


        methods : {

            /**
             * 事件监听
             * @param index
             */

            tabClick(index){

                switch (index){
                    case 0 :
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'news'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
                this.$refs.tabControl1.activeIndex = index
                this.$refs.tabControl2.activeIndex = index
            },

            topClick(){
                this.$refs.scroll.scrollTo(0,0)
            },

            topScroll(position){

                //判断backtop是否显示
                //position.y < -800 ? this.isShowBackTop = true : this.isShowBackTop = false
                //this.isShowBackTop = position.y < -800
                //2、回到顶部图标封装显示
                this.listenShowBackTop(position)

                //判断tabcontroll是否固定

                this.isTabShow = position.y < -this.$refs.tabControl2.$el.offsetTop

            },

            moreGoods(){
              //console.log('moreGoods');
              this.getHomeGoods(this.currentType);

            },

            swiperImageLoad(){

                //2、获取tabControl 的offsetTop
                //所有组件都有$el用于获取组件中的元素



            },



            /**
             * 网络请求方法
             */
            getHomeMultiData(){
                //调用异步方法
                getHomeMultiData().then(res=>{
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                    //console.log(res);
                })
            },
            getHomeGoods(type){

                let page = this.goods[type].page + 1;
                //console.log(page);


                getHomeGoods(type,page).then(res=>{
                    //把data里的数据循环遍历出来加进list
                    this.goods[type].list.push(...res.data.data);
                    //console.log(this.goods[type].list);
                    this.goods[type].page++;

                    this.$refs.scroll.finishPullUp();

                })

                //console.log(this.goods[type].list)
            },


        }
    }
</script>

<style scoped>
    #home{
        padding: 0px 0 49px 0;
        position: relative;
        height: 100vh;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;

    }
    .tab-control{
        position: relative;
        z-index: 9;
    }
    .content{
        position: absolute;
        overflow: hidden;
        top : 44px;
        bottom : 49px

    }
</style>