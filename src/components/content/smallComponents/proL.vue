<template>
	<div class="pro_l">
		<h3>
			<a href="#" title="天然保健品——澳佳宝" target="_blank">天然保健品——澳佳宝</a>
		</h3>
		<ul>
			<li v-for="detail in details" style="white-space: nowrap;">
				<a href="#" title="鱿鱼丝" target="_blank">鱿鱼丝</a>
			</li>
		</ul>
		<p>康裔堂多燕瘦水果片</p>
		<h4>
			<a href="#" title="节后消脂集结号" target="_blank">节后消脂集结号</a>
		</h4>
		<h6>
			<a href="#" title="" target="_blank">
				<img class="lazy" src="http://img01.1gw.com/2aedfba8987838012b9f68b2a7ffb2be4ec92597.jpg"/>
			</a>
		</h6>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				details: ['手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉','手撕牛肉',]
			}
		}
	}
</script>

<style type="text/css">
	.pro_l {
		float: left;
		width: 203px;
		max-height: 513px;
		font-size: 13px;
		border: solid #eeeeee;
		border-width: 0 1px 1px 0;
	}
	
	.pro_l h3 {
		width: 144px;
		height: 32px;
		border-bottom: 1px dotted #cccccc;
		margin: 0 auto;
	}
	
	.pro_l h3 a {
		display: block;
		height: 32px;
		color: #000000;
		line-height: 32px;
		padding-left: 4px;
		background: url(http://www.meiduimall.com/themes/newfirst/images/home/css/images/dot_a.png) no-repeat right center;
	}
	
	.pro_l ul {
		width: 156px;
		height: 232px;
		margin: 0 auto;
	}
	
	.pro_l li {
		float: left;
		width: 66px;
		height: 32px;
		border-bottom: 1px dotted #cccccc;
		margin: 0 6px;
		display: inline;
	}
	
	.pro_l li a {
		display: block;
		width: 66px;
		height: 32px;
		color: #000000;
		text-align: center;
		line-height: 32px;
	}
	
	.pro_l p {
		color: #e9474a;
		text-align: center;
		line-height: 24px;
	}
	
	.pro_l h4 {
		width: 132px;
		height: 24px;
		margin: 0 auto;
	}
	
	.pro_l h4 a {
		display: block;
		height: 24px;
		color: #ffffff;
		text-align: center;
		line-height: 24px;
		background: #f84443;
	}
	
	.pro_l h6 img {
		width: 203px;
		height: 200px;
	}
</style>