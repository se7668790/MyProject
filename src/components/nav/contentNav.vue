<template id="contentNav">
	<div class="index_header">
		<div class="index_header_con">
			<!--美兑壹购物图片链接-->
			<h1>
				<a class="h1" href="/"></a>
			</h1>
			<!--积分指南图片链接-->
			<h2 class="ad_part">
				<a class="h2" href="#" title="" target="_blank"></a>
			</h2>
			<!--搜索框-->
			<div class="search_part">
				<div class="search_part1">
					<form id="goods_search" action="#" method="post">
						<div class="input_txt">
							<input name="keyword" class="inputstyle" placeholder="最低可0元购" />
						</div>
						<input type="submit" id="btn-search-new" class="inputbtn" value="搜索" @click="searchSubmit()" />
					</form>
					<!--关闭-->
					<div class="search_part3">
						<p>关闭</p>
					</div>
				</div>
				<!--搜索框下商品展示-->
				<div class="search_part2">
					<p>
						<a class="current" target="_blank" href="#">宾爵</a>
						<a target="_blank" href="#">麦西西</a>
						<a class="current" target="_blank" href="#">泸州老窖</a>
						<a target="_blank" href="#">雷朋</a>
						<a class="current" target="_blank" href="#">手机</a>
						<a target="_blank" href="#">自然乐园</a>
						<a class="current" target="_blank" href="#">电脑</a>
						<a target="_blank" href="#">澳佳宝</a>
					</p>
				</div>
			</div>			
			<div class="tel_kf">
				<div class="tel_box">
					<h2>400-622-6555</h2>
					<p>周一至周日 9:00-20:00</p>
				</div>
			</div>
			<div class="phone_qrcode"></div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
           return{
           	
           }
		},
		methods: {
			searchSubmit: function() {
				var def = "最低可0元购";
				$(".search_part1 input[name='keyword']").val($(".search_part1 input[name='keyword']").val() === "" ? def : $(".search_part1 input[name='keyword']").val());
				$('#goods_search').submit();
			}
		}

	}
</script>

<style type="text/css">
	.index_header {
		display: inline-block;
		width: 100%;
		background: #fedb6a;
	}
	
	.index_header .search_part {
		margin-top: 34px;
		float: left;
		margin-left: 30px;
	}
	
	.index_header .search_part1 {
		background: #122a45;
		width: 422px;
		height: 36px;
	}
	
	.search_part1 {
		position: relative;
	}
	
	.search_part3 {
		display: none;
		width: 420px;
		border: 1px solid #ccc;
		border-top: none;
		background: #FFFFFF;
		position: absolute;
		top: 36px;
		left: 0px;
		z-index: 999;
	}
	
	.tel_kf{
		float: right;
		margin-top: 44px;
	}
	
	.phone_qrcode{
		position: absolute;
		right: absolute;
		right: -110px;
		top: 5px;
	}
	
	.tel_box{
		width: 140px;
		height: 40px;
		padding-left: 56px;
		border: 1px solid #122A45;
		background: #FFFFFF url(http://www.meiduimall.com/themes/newfirst/images/images/icon_tel5.png) no-repeat 14px center;
		border-radius: 10px;		
	}
	
	.tel_box h2{
		padding: 6px 0 2px 0;
		font-size: 14px;
		line-height: 14px;
		font-weight: bold;
		color: #122A45;
	}
	
	.tel_box p{
		color: #7a7a7a;
	}
	
	.index_header h1 a {
		display: inline-block;
		width: 220px;
		height: 120px;
	}
	
	.ad_part {
		float: left;
	}
	
	.ad_part a {
		display: block;
		width: 240px;
		height: 120px;
		overflow: hidden;
	}
	
	.index_header_con {
		width: 1200px;
		margin: 0 auto;
		height: 120px;
		position: relative;
	}
	
	.index_header_con h1 {
		float: left;
	}
	
	.h1 {
		background: url(http://img01.1gw.com/3f76f3535da6fb21d113d9f9439500e6666a1e25.png) no-repeat;
		background-position: left center;
	}
	
	.h2 {
		background: url(http://img01.1gw.com/6a202acfaf3244ed694bdd1e135912ef2dc92f10.png) no-repeat center center;
	}
	
	a {
		color: #a3a3a3;
		text-decoration: none;
		outline: none;
		display: inline-block;
	}
	
	input {
		font-family: "微软雅黑";
		color: #666666;
	}
	
	.search_part3 p {
		text-align: right;
		padding: 5px 10px;
		font-size: 14px;
		border-top: 1px solid #CCCCCC;
	}
	
	.index_header .search_part2 {
		margin-top: 10px;
		max-width: 430px;
		overflow: hidden;
	}
	
	.index_header .search_part2 p {
		white-space: nowrap;
	}
	
	.index_header .search_part2 p a:hover,
	.index_header .search_part2 p .current {
		color: #122A45;
	}
	
	.index_header .search_part2 p a:first-child {
		padding: 0 5px 0 0;
	}
	
	.index_header .search_part2 p a {
		padding: 0 10px;
		border-right: 1px solid #b6b6b6;
	}
	
	.index_header .search_part1 .input_txt {
		width: 300px;
		float: left;
		height: 32px;
		margin: 2px;
		background: #fff;
	}
	
	.index_header .search_part1 .inputstyle {
		width: 288px;
		padding: 8px 0 8px 12px;
		height: 16px;
		border: none;
		font-size: 14px;
		outline: none;
	}
	
	.index_header .search_part1 .inputbtn {
		width: 116px;
		height: 36px;
		border: none;
		color: #FEDB6A;
		background: none;
		float: left;
		font-size: 14px;
		cursor: pointer;
		font-weight: bold;
	}
</style>