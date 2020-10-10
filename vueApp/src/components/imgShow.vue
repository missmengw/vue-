<template>
<div>
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
    <div class="mui-scroll">
        <a class="mui-control-item mui-active" @click="showImgs(1)">
            推荐
        </a>
        <a class="mui-control-item" @click="showImgs(2)">
            刺客
        </a>
        <a class="mui-control-item" @click="showImgs(3)">
            辅助
        </a>
        <a class="mui-control-item" @click="showImgs(4)">
            射手
        </a>
        <a class="mui-control-item" @click="showImgs(5)">
            法师
        </a>
        <a class="mui-control-item" @click="showImgs(6)">
            战士
        </a>
        <a class="mui-control-item" @click="showImgs(7)">
            坦克
        </a>
    </div>
</div>

<div v-for="(item,index) in imgList" :key="index">
    <img :src="item.url">
    <div class="con">{{item.imgCon}}</div>
</div>

</div>
   
</template>

<script>
import mui from "../js/mui.min.js";
export default {
    data:function(){
        return {imgList:""}
    },
    methods:{
        showImgs:function(id){
            this.$http.get("http://localhost:3333/showImgs",{params:{keyId:id}}).then(res=>{
                this.imgList=res.body;
                console.log(this.imgList)
            },err=>{
                console.log(err)
            })
        }
    },
    mounted:function(){
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005   //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });

        this.showImgs(1)
    }
}
</script>

<style scoped>
img{
    width: 100%;
    height: 132px;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
    border:none
}
.mui-scroll{
    position: fixed;
    background-color: white;
}
.con{
    background-color: grey;
    width: 100%;
    height: 40px;
    color: white;
    margin: -5px auto 5px;
    text-align: center;
    line-height: 40px;
}
</style>