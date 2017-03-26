<template>
	<div id="main" class="main clearfix">
		<div class="wrap-lg">
			<div class="bread-crumbs">
				<div class="section">
					<div class="col-lg-3 box">
						<ul class="dropmenu-list">
							<list-top v-for="listc in listcs" :liste="listc.listdd" :listbs="listc.listcc"></list-top>
						</ul>
					</div>
					<div class="row">

					</div>
				</div>
			</div>
			<div class="section">

			</div>
		</div>
	</div>
</template>
<script>
	import listTop from './listTop.vue'
	export default {
		data() {
				return {
					isShow:false,
					listcs:[{
						listdd:'购物指南1',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南2',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南3',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南4',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南5',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南6',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					},{
						listdd:'购物指南7',
						listcc:['免费注册1','免费注册2','免费注册3','免费注册4','免费注册5']
					}]
				}
			},
			components: {
				'list-top': listTop
			},
			methods:{
				isShow:function(isShow){
							alert('111')				
				}
			}
	}
</script>

<style type="text/css">
	.wrap-lg {
		margin-left: auto;
		margin-right: auto;
		width: 1190px;
	}
	
	.bread-crumbs {
		font-size: 14px;
		margin-top: 10px;
		margin-bottom: 10px;
		line-height: 25px;
		height: 25px;
	}
	
	.col-lg-3 {
		width: 215px;
	}
	
	[class|="col-lg"] {
		margin-left: 10px;
	}
	
	.col,
	[class|="col"] {
		float: left;
		margin-left: 10px;
	}
	
	ul li {
		vertical-align: top;
	}
	
	.dropmenu-list .dropmenu {
		background: #F0F0F0;
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
	}
	
	.dropmenu-list .dropmenu .icon,
	.dropmenu-list .dropmenu [class^="icon-"]::before {
		float: right;
	}
	
	.dropmenu-list .dropmenu-items li {
		background: #fff;
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
	}
	
	.dropmenu-list .dropmenu-items li a {
		color: #666;
	}
</style>