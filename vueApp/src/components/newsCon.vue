<template>
<div>
    <!-- <mt-header fixed title="新闻资讯">
  		<router-link to="/" slot="left">
    		<mt-button icon="back">返回</mt-button>
  		</router-link>
	</mt-header> -->

    <h2>{{newsContent.newsTitle}}</h2>
    <div>
        <span>{{newsContent.author}}</span><span>发布日期：{{newsContent.createTime|formatDate("yyyy-mm-dd")}}</span>
    </div>
    <hr>
    <p>{{newsContent.content}}</p>

    <comment :id="newsContent.id"></comment>
</div>
   
</template>

<script>
import comment from "./comments.vue"
export default {
    data(){
        return {newsContent:"",id:""}
    },
    created:function(){
        console.log(this.$route.params.id);
        this.id=this.$route.params.id;

        this.$http.get(`http://localhost:3333/newsContent?id=${this.id}`).then((res)=>{
            console.log(res);
            this.newsContent=res.body[0];
        })
        
    },
    components:{
        comment:comment
    }
}
</script>

<style scoped>
p{
    color: black;
    text-indent: 2em;
}
</style>