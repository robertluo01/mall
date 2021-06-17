<template>

        <div class="wrapper" ref="wrapper">
            <div class="content">
                <slot></slot>
            </div>
        </div>


</template>

<script>

    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        data(){
            return {
                scroll : null,
            }
        },
        props :  {
            probeType : {
                type: Number,
                default : 0
            },
            pullUpLoad : {
                type : Boolean,
                default : false
            }


        },
        mounted(){


            //1、创建scroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                click :true,
                probeType : this.probeType,
                pullUpLoad : this.pullUpLoad

            })

            //2、监听滚动对象
            this.scroll.on('scroll',(position)=>{
               // console.log(position);

                this.$emit('scroll',position)
            })
            //3、监听上拉事件
            if(this.pullUpLoad){
                this.scroll.on('pullingUp',()=>{
                    //console.log('zuiding');
                    this.$emit('loadMore')
                })
            }

        },
        methods : {
            scrollTo(x,y,time=500){
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time);
            }
            ,
            refresh(){

                //相对下面语句，预防scroll为空时报错。。。若为空，不执行后面函数

                this.scroll && this.scroll.refresh();

                //this.scroll.refresh();
            },
            finishPullUp(){
                this.scroll.finishPullUp();
            },
            getScrollY(){
                return this.scroll ? this.scroll.y : 0 ;
            }


        }

    }
</script>

<style scoped>


</style>