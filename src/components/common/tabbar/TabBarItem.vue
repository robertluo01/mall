<template>


    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-hover"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TabBarItem",
        data(){
            return {
                //isActive : false
            }
        },
        methods : {
            itemClick(){
                this.$router.push(this.path);

            }

        },
        props : {
            path : String,
            activeColor : {
                type : String,
                default : 'pink'
            }
        },
        computed : {
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle(){
                return this.isActive ? {color : this.activeColor} :{}
            }
        }
    }
</script>

<style scoped>

    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;

    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 3px;
    }

</style>
