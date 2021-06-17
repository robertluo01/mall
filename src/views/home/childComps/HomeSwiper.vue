<template>
    <div >
        <swiper>
            <swiper-item v-for="item in banner" :key="item.id">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load = 'swiperImageLoad'>
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
            banner : {
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
            swiperImageLoad(){
                if(!this.isLoad){
                    this.$emit('swiperImageLoad');
                    this.isLoad = !this.isLoad
                }

            }
        }
    }
</script>

<style scoped>

</style>