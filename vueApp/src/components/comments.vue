<template>
<div> 
    <h2>评论：</h2>    
    <textarea placeholder="会说话你就多说点。" v-model="comment"></textarea>
    <mt-button type="primary" size="large" @click.native="publish">发表评论</mt-button>
    <div class="msg"></div>
    <mt-button type="danger" size="large" plain @click.native="view">查看更多</mt-button>
    <ul>
        <li v-for="(item,index) in comList" :key="index">{{item.contents}}</li>
    </ul>
</div>
   
</template>

<script>
export default {
    data(){
        return {comment:"",comList:""}
    },
    props:["id"],
    methods:{
        //发表评论
        publish:function(){
            let data={  newsId:this.id,
                        contents:this.comment
                        };
            console.log(data)
            this.$http.post("http://localhost:3333/publish",data,{emulateJSON:true}).then((res)=>{
                console.log(res)
            });
            this.comment=""
        },
        //查看评论
        view:function(){
            this.$http.get(`http://localhost:3333/view?id=${this.id}`).then((res)=>{
                this.comList=res.body
            })
        }   
    }
}
</script>

<style scoped>
.msg{
    width: 100%;
    height: 5px;
}
</style>