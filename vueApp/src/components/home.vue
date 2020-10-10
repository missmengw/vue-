<template>
<div>
    <div class="swipe">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item ,index) in imgs" :key="index">
                <a href="javascript:;">
                    <img :src="item">
                </a>
            </mt-swipe-item>        
        </mt-swipe>
    </div>

    <div class="mui-content">
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		            <img src="src/imgs/menu1.png">
		            <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imgs">
		            <img src="src/imgs/menu2.png">
		            <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goods">
		            <img src="src/imgs/menu3.png">
		            <div class="mui-media-body">商品购买</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="src/imgs/menu4.png">
		            <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="src/imgs/menu5.png">
		            <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="src/imgs/menu6.png">
		            <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
	</div>
    
</div>
   
</template>

<script>
export default {
    data(){
        return {
            imgs:["../src/imgs/1.jpeg","../src/imgs/2.jpeg","../src/imgs/3.jpeg","../src/imgs/4.jpeg"]
        }
    }
}
</script>

<style scoped>

.swipe{
    width: 100%;
    height: 150px;
}
.swipe img{
    width: 100%;
    height: 100%;
}
.mui-content img{
	width: 60%;
}
.mui-grid-view.mui-grid-9{
	background-color: white;
border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border:none
}
.mui-content>.mui-table-view:first-child {
	margin-top:0
}
</style>