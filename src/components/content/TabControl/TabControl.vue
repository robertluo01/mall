<template>
    <div class="tab-control">
        <div class="tab-control-item"
             v-for="(item,index) in titles"
             :key="item.id"
             :class="index == activeIndex ? 'active' : ''"

             @click="tabClick(index)"

        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props : {
            titles : {
                type : Array,
                default (){
                    return []
                }
            }
        },
        data(){
            return {
                activeIndex : 0
            }
        },
        methods :{
            tabClick(index){
                this.activeIndex = index
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>

    .tab-control{
        display: flex;
        text-align: center;
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        background-color: #fff;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
        padding: 8px;

    }
    .active{
        color: var(--color-high-text);
    }
    .active span {
        border-bottom: 3px solid var(--color-tint);

    }


</style>