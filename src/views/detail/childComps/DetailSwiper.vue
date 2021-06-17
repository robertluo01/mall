<template>
    <div class="detail-swiper" >
        <swiper>
            <swiper-item v-for="(item,index) in topImage" :key="index">
                <a :href="item.link">
                    <img :src="item.thumb" alt="" @load="imgLoad">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>

    import {Swiper,SwiperItem} from "components/common/swiper"


    export default {
        name: "HomeSwiper",
        components : {
            Swiper,
            SwiperItem
        },
        props :{
            topImage : {
                type: Array,
                default(){
                    return ''
                }
            }
        },
        data (){
            return {
                isLoad : false
            }
        },
        methods : {

            imgLoad(){
                this.$emit('imgLoad')
            }

        }
    }
</script>

<style scoped>

</style>