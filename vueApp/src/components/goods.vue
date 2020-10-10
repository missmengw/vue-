<template>
<div>
    {{$store.getters.getname}}
    <button @click="change">点击</button>
</div>
   
</template>

<script>
export default {
    methods:{
        change:function(){
            this.$store.commit('changename')
        }
    }
}
</script>

<style scoped>

</style>