<template>
	<li id="pop_Category_15" @mouseover="listshow(isshow)" @mouseleave="listhide(isshow)">
		<div class="cate-item">
			<h3>
									<a v-for="list0 in list0s" href="#" target="_blank">{{list0}}</a>
								</h3>
		</div>
		<div class="cate-list-expand" v-if="isshow">
			<pop-category1 v-for="list1 in list1s" :listls="list1.listaa" :listls="list1.listbb"></pop-category1>			
		</div>
	</li>
</template>

<script>
import popCategory2 from './popCategory2.vue'
	export default{
		data(){
			return{
				isshow:false,
			}
		},
		methods: {
			listshow : function(isshow){
				this.isshow = true;
			},
			listhide : function(isshow){
				this.isshow = false;
			}
		},
		components:{
			'pop-category1':popCategory2
		},
		props:['list0s','list1s']
	}
</script>

<style type="text/css">
	ul,
	ol {
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
	
	a {
		outline: none;
	}
	
	.cate-list li {
		height: 34px;
		vertical-align: middle;
		background: url(http://www.meiduimall.com/themes/newfirst/images/home/css/images/cat_line_bg.png) no-repeat center bottom;
	}
	
	.cate-list h3 a {
		font-size: 14px;
		color: #000;
		display: inline-block;
		text-decoration: none;
	}
	
	.cate-list h3 {
		text-align: left;
		font-weight: normal;
	}
	
	#category .cate-item {
		line-height: 34px;
	}
	
	.cate-item {
		background: url(http://img01.1gw.com/images/43/14/12/e6cc5dcb1368520945d662d56b801a1c2b376496.png) no-repeat 0px center;
	}
	
	#category .cate-item {
		width: 165px;
		height: 34px;
		z-index: 2;
		position: relative;
		top: 0px;
		line-height: 34px;
		margin: 0 9px;
		padding-left: 32px;
	}
	
	#category .cate-list-expand {
		background: #fff;
		width: 500px;
		min-height: 450px;
		position: absolute;
		top: 1px;
		left: 215px;
		z-index: 1;
		padding: 10px 0px;
		/*display: none;*/
		z-index: 998;
	}
	
	#category .cate-list-expand dl {
		margin-bottom: 20px;
		display: inline-block;
		width: 100%;
	}
	
	.cate-list h3 {
		font-weight: normal;
	}
	
	#category .cate-item {
		line-height: 34px;
	}
	
	#category .cate-list-expand dl {
		margin-bottom: 20px;
		display: inline-block;
		width: 100%;
	}
	
	#category .cate-list-expand dl dt {
		font-weight: 700;
		font-size: 12px;
		width: 70px;
		float: left;
		line-height: 22px;
		height: 22px;
		overflow: hidden;
		text-align: right;
	}
	
	#category .cate-list-expand dl dd {
		float: left;
		margin-top: 0px;
		width: 360px;
	}
	
	#category .cate-list-expand dl dt a {
		color: #333;
	}
	
	#category .cate-list-expand dl dd a {
		color: #333333;
		background: transparent url(http://www.meiduimall.com/themes/newfirst/images/images/navline.jpg) no-repeat right 4px;
		display: inline-block;
		padding: 0 10px;
		line-height: 20px;
		white-space: nowrap;
	}
</style>