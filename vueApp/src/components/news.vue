<template>
<div>
    <!-- <mt-header fixed title="新闻资讯">
  		<router-link to="/" slot="left">
    		<mt-button icon="back">返回</mt-button>
  		</router-link>
	</mt-header> -->
    <h2>新闻资讯</h2>

    <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="(item,index) in newsInfo" :key="index">
           <router-link :to="`/home/news/newsCon/${item.id}`">
                <p>{{item.newsTitle}}</p>
                <span>{{item.author}}</span>
                <span>发布时间：{{item.createTime|formatDate("yyyy-mm-dd")}}</span>
           </router-link>
        </li>        
    </ul>
</div>
   
</template>

<script>
export default {
    data(){
        return {newsInfo:[]}
    },
    created:function(){
        this.$http.get("http://localhost:3333/showNews").then((res)=>{
            console.log(res);
            this.newsInfo=res.body;
        })
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis
}
</style>