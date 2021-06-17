<template>
    <div class="detail-base-info">
        <h1>第四个</h1>

        {{goods}}
        {{goods}}
        {{goods}}

    </div>

</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
            goods : {
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .detail-base-info{
        width: 100%;
        overflow-x: hidden;
    }

</style>