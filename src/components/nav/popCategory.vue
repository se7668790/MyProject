<template>
	<li id="pop_Category_15" @mouseover="listshow(isshow)" @mouseleave="listhide(isshow)">
		<div class="cate-item">
			<h3>
									<a href="#" target="_blank">食品</a>
									<a href="#" target="_blank">、保健</a>
								</h3>
		</div>
		<div class="cate-list-expand" v-if="isshow">
			<dl>
				<dt>
										<a href="#" target="_blank">休闲食品</a>
									</dt>
				<dd>
					<a href="#" target="_blank">休闲零食  </a>
					<a href="#" target="_blank">坚果炒货</a>
					<a href="#" target="_blank">肉干肉脯</a>
					<a href="#" target="_blank">蜜饯果干</a>
					<a href="#" target="_blank">饼干蛋糕</a>
					<a href="#" target="_blank">冲调饮品</a>
				</dd>
			</dl>
			<dl>
				<dt>
										<a href="#" target="_blank">进口食品</a>
									</dt>
				<dd>
					<a href="#" target="_blank">海产干货</a>
					<a href="#" target="_blank">饼干/蛋糕</a>
					<a href="#" target="_blank">糖果/巧克力</a>
					<a href="#" target="_blank">休闲零食</a>
					<a href="#" target="_blank">冲调饮品</a>
					<a href="#" target="_blank">粮油调味</a>
				</dd>
			</dl>
			<dl>
				<dt>
										<a href="#" target="_blank">中外名酒</a>
									</dt>
				<dd>
					<a href="#" target="_blank">白酒</a>
					<a href="#" target="_blank">葡萄酒 </a>
					<a href="#" target="_blank">洋酒  </a>
					<a href="#" target="_blank">黄酒/养生酒</a>
					<a href="#" target="_blank">收藏酒/陈年老酒</a>
				</dd>
			</dl>
			<dl>
				<dt>
										<a href="#" target="_blank">茗茶</a>
									</dt>
				<dd>
					<a href="#" target="_blank">铁观音</a>
					<a href="#" target="_blank">普洱</a>
					<a href="#" target="_blank">龙井</a>
					<a href="#" target="_blank">绿茶</a>
					<a href="#" target="_blank">红茶</a>
					<a href="#" target="_blank">乌龙茶</a>
					<a href="#" target="_blank">花草茶</a>
					<a href="#" target="_blank">花果茶</a>
					<a href="#" target="_blank">黑茶</a>
					<a href="#" target="_blank">白茶</a>
					<a href="#" target="_blank">养生茶</a>
				</dd>
			</dl>
			<dl>
				<dt>
										<a href="#" target="_blank">粮油调味</a>
									</dt>
				<dd>
					<a href="#" target="_blank">米面杂粮</a>
					<a href="#" target="_blank">调味品</a>
					<a href="#" target="_blank">方便食品</a>
					<a href="#" target="_blank">南北干货</a>
				</dd>
			</dl>
			<dl>
				<dt>
										<a href="#" target="_blank">农副产品</a>
									</dt>
				<dd>
					<a href="#" target="_blank">水果蔬菜</a>
					<a href="#" target="_blank">海鲜水产</a>
					<a href="#" target="_blank">肉禽蛋品</a>
				</dd>
			</dl>
			<dl>
				<dt>
										<a href="#" target="_blank">地方特产</a>
									</dt>
				<dd>
					<a href="#" target="_blank">黑龙江</a>
					<a href="#" target="_blank">四川</a>
					<a href="#" target="_blank">吉林</a>
					<a href="#" target="_blank">湖南</a>
					<a href="#" target="_blank">内蒙</a>
					<a href="#" target="_blank">北京 </a>
					<a href="#" target="_blank">山西 </a>
					<a href="#" target="_blank">福建</a>
					<a href="#" target="_blank">新疆</a>
					<a href="#" target="_blank">山东</a>
					<a href="#" target="_blank">安徽</a>
					<a href="#" target="_blank">甘肃</a>
					<a href="#" target="_blank">浙江</a>
					<a href="#" target="_blank">其他</a>
				</dd>
			</dl>
			<dl>
				<dt>
										<a href="#" target="_blank">医药保健</a>
									</dt>
				<dd>
					<a href="#" target="_blank">营养保健</a>
					<a href="#" target="_blank">传统滋补</a>
					<a href="#" target="_blank">护理护具</a>
					<a href="#" target="_blank">成人用品</a>
					<a href="#" target="_blank">保健器械</a>
				</dd>
			</dl>
		</div>
	</li>
</template>

<script>
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
		}
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