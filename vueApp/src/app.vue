<template>
<div>
    <mt-header fixed title="vue项目">
		<router-link to="/" slot="left">
    		<!-- <mt-button icon="back">返回</mt-button> -->
  		</router-link>
	</mt-header>
	
	<div class="msg1"></div>
	<transition>	
        	<router-view></router-view>
	</transition>
    <div class="msg2"></div>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
            <router-link class="mui-tab-item1" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
</div>
   
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style scoped>
.msg1{
   width: 100%;
   height: 40px;
}
.msg2{
   width: 100%;
   height: 60px;
}
.v-enter{
	opacity: 0;
	/* transform: translateX(100%); */
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
}
.v-enter-active,.v-leave-active{
	transition: all .5s ;
	position: absolute;
}
.mui-tab-item1{
	display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .router-link-active{
	color: #007aff;
}
.mui-bar-tab .mui-tab-item1 .mui-icon{
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>