<template>
	<div class="box_w">
		<div>
			<!--主题馆-->
			<div class="sort">
				<div></div>
				<h3 class="sort_a">
			 		<span>主题馆</span>
			 		THEME PAVILIONS
			 	</h3>
			</div>
			<ul class="theme">
				<li v-for="lippie in lippies" :class="lippie.index">
					<div class="theme_c">
						<p>
							<a href="#" target="_blank">
								<img src="http://img01.1gw.com/bd12121571e6ae09a0faa5729b88c50b0330a891.jpg" height="174" width="255" />
							</a>
						</p>
						<div>
							<h6></h6>
							<h5></h5>
							<h4></h4>
						</div>
					</div>
					<dl>
						<dt>
			 				<a href="#" target="_blank"></a>
			 			</dt>
						<dd>
							<a href="#" target="_blank">{{lippie.dsc}}</a>
						</dd>
					</dl>
				</li>
			</ul>
		</div>
		<div>
			<!--每日嗨购-->
			<div class="sort">
				<div></div>
				<h3 class="sort_b">
			 		<span>特兑专区</span>
			 		CONVERT & BUY  ZONE
			 	</h3>
			</div>
			<div class="day">
				<div class="day_l">
					<div style="height:322px; padding: 88px 0px;background:url(http://img01.1gw.com/4c91455510fcdd11488da90739611a68dcf49d4d.jpg) no-repeat 0 0;">

					</div>
				</div>
				<div class="day_c">
					<div style="background:url(http://img01.1gw.com/61856008440c1c5086bce81ede90715ccfdd71f1.jpg) no-repeat 0 72px;height: 310px;">
						<h3>迎春钜惠   畅享特兑</h3>
						<p style="margin-top:48px;height:46px;padding-top: 74px;">
							<br />
						</p>
						<h4>
						<a href="#" target="_blank">点我进入</a>
					</h4>
					</div>
				</div>
				<div class="day_r">
					<li v-for="unguent in unguents">
						<h3>{{unguent.h3}}</h3>
						<p>{{unguent.p}}</p>
						<div>
							<a href="#" target="_blank">
								<img :src="unguent.dree" />
							</a>
						</div>
					</li>
					<!--<li>
					<h3>佳雪男士保湿爽肤水</h3>
					<p>巨补水  倍保湿</p>
					<div>
						<a href="#" target="_blank">
							<img src="http://img01.1gw.com/5cec9d070736edfa453fc5f2cd496fa35e76a5ed.jpg"/>
						</a>
					</div>
				</li>
				<li>
					<h3>佳雪男士保湿爽肤水</h3>
					<p>巨补水  倍保湿</p>
					<div>
						<a href="#" target="_blank">
							<img src="http://img01.1gw.com/5cec9d070736edfa453fc5f2cd496fa35e76a5ed.jpg"/>
						</a>
					</div>
				</li>-->
				</div>
			</div>

		</div>		
		<ad-one v-bind:picture=ppictureone></ad-one>
		<hot-sale></hot-sale>
		<ad-one v-bind:picture="ppicturetwo"></ad-one>
		<floor-count></floor-count>
		<floor-count></floor-count>
		<floor-count></floor-count>
		<floor-count></floor-count>
	</div>
</template>
<script>
	import navList from './smallComponents/navList.vue'
	import adOne from './smallComponents/adOne.vue'
	import proF from './smallComponents/proF.vue'
	import goodsShow from './smallComponents/goodsShow.vue'
	import hotSale from './floorCount/hotSale.vue'
	import floorCount from './floorCount/floorCount.vue'
	export default {
		data() {
				return {
					lippies: [{
						'index': 'pic1',
						'dsc': '点击查看 >>'
					}, {
						'index': 'pic2',
						'dsc': '点击查看 >>'
					}, {
						'index': 'pic3',
						'dsc': '点击查看 >>'
					}, {
						'index': 'pic4',
						'dsc': '点击查看 >>'
					}, {
						'index': 'pic5',
						'dsc': '点击查看 >>'
					}],
					unguents: [{
						'h3': '恩贝氏婴儿叮痕缓适膏',
						'p': '温和无刺激  舒缓皮肤瘙痒',
						'dree': 'http://img01.1gw.com/2a72a4fe946c2730db932f9dc6d433bf060d69e2.jpg'
					}, {
						'h3': '恩贝氏婴儿叮痕缓适膏',
						'p': '温和无刺激  舒缓皮肤瘙痒',
						'dree': 'http://img01.1gw.com/2a72a4fe946c2730db932f9dc6d433bf060d69e2.jpg'
					}, {
						'h3': '恩贝氏婴儿叮痕缓适膏',
						'p': '温和无刺激  舒缓皮肤瘙痒',
						'dree': 'http://img01.1gw.com/2a72a4fe946c2730db932f9dc6d433bf060d69e2.jpg'
					}],					
					activeName: '首页',
					
					ppictureone:'http://img01.1gw.com/92d3187a5868c277e48ae7949e8ce26fdba2620c.jpg',
					ppicturetwo:'http://img01.1gw.com/ec7be15f54446b7ad2aee0d93df926d0544c0303.jpg',
					ppicturethree:'',
					ppicturefour:'',
					ppicturefive:'',
					ppicturesix:'',
					ppictureeleven:'',
					ppictureeight:'',
				}
			},
			methods: {
				
			},
			components:{
				'ad-one': adOne,
				'pro-f': proF,
				'nav-list': navList,
				'goods-show': goodsShow,
				'hot-sale': hotSale,
				'floor-count': floorCount
			},
			counted() {

			},
			created() {

			}
	}
</script>
<style type="text/css">
	li {
		list-style: none;
	}
	
	.box_w {
		width: 1200px;
		margin: 0 auto;
		font-family: "微软雅黑";
		font-size: 14px;
		color: #666666;
	}
	
	
	
	.theme {
		width: 1200px;
		height: 216px;
		overflow: hidden;
		margin-bottom: 20px;
	}
	
	.theme li {
		float: left;
		width: 255px;
		height: 216px;
		margin-right: 4px;
		display: inline;
	}
	
	.theme_c {
		width: 255px;
		height: 174px;
		position: relative;
	}
	
	.theme_c div {
		min-width: 146px;
		height: 88px;
		text-align: center;
		padding-top: 12px;
		position: absolute;
		right: 5px;
		top: 16px;
	}
	
	.theme_c h6 {
		font-size: 12px;
		color: #545454;
		line-height: 18px;
	}
	
	.theme_c h5 {
		font-size: 14px;
		color: #545454;
		line-height: 24px;
	}
	
	.theme_c h4 {
		font-size: 24px;
		color: #f84443;
		line-height: 36px;
	}
	
	.theme dl {
		width: 243px;
		height: 30px;
		line-height: 30px;
		border: 1px solid #ededed;
		padding: 5px;
		background: #f5f5f5;
	}
	
	.theme dt {
		float: left;
		width: 120px;
		padding: 0 3px;
	}
	
	.theme dt a {
		display: block;
		width: 90px;
		height: 30px;
		font-size: 13px;
		color: #323232;
		line-height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: keep-all;
		white-space: nowrap;
	}
	
	.theme dd {
		float: left;
		width: 110px;
	}
	
	.theme dd a {
		display: block;
		width: 120px;
		height: 30px;
		font-size: 13px;
		color: #eecf68;
		text-align: center;
		line-height: 30px;
		background: #122a45;
	}
	
	.theme dd a:hover {
		text-decoration: underline;
	}
	
	.day {
		width: 1200px;
		height: 310px;
		background: #f8f8f8;
		margin-bottom: 20px;
	}
	
	.day .day_l {
		float: left;
		width: 228px;
		height: 310px;
		text-align: center;
	}
	
	.day .day_c {
		float: left;
		width: 344px;
		height: 310px;
		padding-right: 18px;
	}
	
	.day_c h3 {
		height: 50px;
		font-size: 24px;
		color: #333333;
		line-height: 50px;
		padding: 16px 27px 24px;
	}
	
	.day_c p {
		font-size: 12px;
		color: #999999;
		line-height: 24px;
		text-align: right;
		padding: 32px 0 6px;
	}
	
	.day_c h4 {
		height: 36px;
	}
	
	.day_c h4 a {
		display: block;
		float: right;
		width: 112px;
		height: 36px;
		font-size: 16px;
		color: #122a45;
		text-align: center;
		line-height: 36px;
		background: #eecf68;
	}
	
	.day_c h4 a:hover {
		text-decoration: underline;
	}
	
	.day .day_r {
		float: left;
		width: 600px;
		height: 290px;
		padding: 10px 5px;
	}
	
	.day_r li {
		float: left;
		width: 188px;
		height: 288px;
		border: 1px solid #eeeeee;
		margin: 0 5px;
		display: inline;
		background: #ffffff;
	}
	
	.day_r li h3 {
		height: 24px;
		font-size: 16px;
		color: #333333;
		line-height: 24px;
		padding: 15px 0 0 20px;
	}
	
	.day_r li p {
		height: 21px;
		font-size: 13px;
		color: #666666;
		line-height: 21px;
		padding: 0 0 20px 20px;
	}
	
	.day_r li div {
		width: 188px;
		height: 208px;
	}
	
	
	.sort .sort-hot {
		height: 36px;
		background: #122a45;
		border-bottom: 1px solid #122a45;
	}
	
	.sort h3.sort_c {
		min-width: 212px;
	}
	
	
	/*.sort li a:hover,
	.sort li.hover a {
		color: #122a45;
		background: #fedb6a;
	}*/
	
	.sort li a {
		font-size: 12px;
		color: #fedb6a;
		padding: 0 20px;
	}
	
	
	
	.fine_c .fine_r {
		float: left;
		width: 968px;
		height: 536px;
		display: none;
	}
	
	
	
	
</style>