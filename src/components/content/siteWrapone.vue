<template>
	<div class="site_wrap1">
		<div class="mainBody">
			<div class="itmes_wrap clearfix">
				<!--轮播-->
				<div class="middleSide">
					<div id="scroll_container" class="scroll_container">
						<ul>
							<!--<li class="fir01" v-for="singleSrc in srcs">
								<a href="#" target="_blank">
									<img :src=singleSrc.addr :alt=singleSrc.discript />
								</a>
							</li>-->
							<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/a7e54e5c8fe7935e10fe15cebe63577773d61d88.jpg" alt="优选全球购" />
								</a>
							</li>
							<!--<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/aa59ed9bd9fd1560c62d0fd540736dde452795c8.jpg" alt="鹤年堂" />
								</a>
							</li>
							<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/9f17247a4b3b49bfa8d8ab44f53ab944e06a2ada.jpg" alt="母婴" />
								</a>
							</li>
							<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/e0bc7751b7d72702793a93d93a21c986121f4727.jpg" alt="雷瓦" />
								</a>
							</li>
							<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/ec9748d50feacbb9b1b2e98dfbce4b281f159f51.jpg" alt="阿胶" />
								</a>
							</li>
							<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/3b4a67dc029e2dfa37e061e9c437fb15b7ea261b.jpg" alt="丸美" />
								</a>
							</li>
							<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/37db82f3f207b12eed42a073cb9f72707d2a0daf.jpg" alt="女人节" />
								</a>
							</li>
							<li class="fir01">
								<a href="#" target="_blank">
									<img src="http://img01.1gw.com/ccbf898c234ad0c834d3abd67b95642df4f9ff51.jpg" alt="特兑" />
								</a>
							</li>-->
						</ul>
						<p id="scroll_num" class="clearfix">
							<span class="">1</span>
							<span class="">2</span>
							<span class="">3</span>
							<span class="">4</span>
							<span class="">5</span>
							<span class="">6</span>
							<span class="">7</span>
							<span class="">8</span>
						</p>
						<p>
							<a class="clickBtn prevBtn" href="#"></a>
							<a class="clickBtn nextBtn" href="#"></a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="site_wrap1_con">
			<div class="main">
				<div class="leftitem"></div>
			</div>
			<div class="rightitem">
				<div class="right_box">
					<div class="gw_info">
						<div class="hd">
							<h3>商城快讯</h3>
						</div>
						<div class="bd">
							<ul>
								<li>
									<a href="#" target="_blank" title="共享衣服，你敢尝试吗？">共享衣服，你敢尝试吗？</a>
								</li>
								<li>
									<a href="#" target="_blank" title="造车运动兴起，可翘着二郎腿开车真的好吗？">造车运动兴起，可翘着二郎腿开车真的好吗？</a>
								</li>
								<li>
									<a href="#" target="_blank" title="风靡加勒比，这种酒是如何做到的">风靡加勒比，这种酒是如何做到的</a>
								</li>
								<li>
									<a href="#" target="_blank" title="再不去旅行，你就真的老了">再不去旅行，你就真的老了</a>
								</li>
								<li>
									<a href="#" target="_blank" title="存在6亿年，吃了怎能不滋补">存在6亿年，吃了怎能不滋补</a>
								</li>
								<li>
									<a href="#" target="_blank" title="真能返老还童？你可能没见过的反柄灵芝">真能返老还童？你可能没见过的反柄灵芝</a>
								</li>
								<li>
									<a href="#" target="_blank" title="别担心，让它来帮助你守住年龄的秘密">别担心，让它来帮助你守住年龄的秘密</a>
								</li>
								<li>
									<a href="#" target="_blank" title="李英爱演绎皇后之吻 尊享宫廷奢华">李英爱演绎皇后之吻 尊享宫廷奢华</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="rz_box">
						<a href="#" target="_blank">
							<p>
								<i>申请商家入驻</i>
								<span>已提交审核可查看审核状态</span>
							</p>
						</a>
					</div>
					<div class="ad_item">
						<a href="#" title="" target="_blank">
							<img src="http://img01.1gw.com/f2880ca9c3ca18491e0bbae634af12b05bf4bf3d.jpg" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					srcs: [{
						'addr': 'http://img01.1gw.com/a7e54e5c8fe7935e10fe15cebe63577773d61d88.jpg',
						'discript': '优选全球购'
					}, {
						'addr': 'http://img01.1gw.com/aa59ed9bd9fd1560c62d0fd540736dde452795c8.jpg',
						'discript': '鹤年堂'
					}, {
						'addr': 'http://img01.1gw.com/9f17247a4b3b49bfa8d8ab44f53ab944e06a2ada.jpg',
						'discript': '母婴'
					}, {
						'addr': 'http://img01.1gw.com/e0bc7751b7d72702793a93d93a21c986121f4727.jpg',
						'discript': '雷瓦'
					}, {
						'addr': 'http://img01.1gw.com/ec9748d50feacbb9b1b2e98dfbce4b281f159f51.jpg',
						'discript': '阿胶'
					}, {
						'addr': 'http://img01.1gw.com/3b4a67dc029e2dfa37e061e9c437fb15b7ea261b.jpg',
						'discript': '丸美'
					}, {
						'addr': 'http://img01.1gw.com/37db82f3f207b12eed42a073cb9f72707d2a0daf.jpg',
						'discript': '女人节'
					}, {
						'addr': 'http://img01.1gw.com/ccbf898c234ad0c834d3abd67b95642df4f9ff51.jpg',
						'discript': '特兑'
					}, ]
				}
			},
			mounted() {
				clearInterval(interval);
				var index = 0;
				var interval = setInterval(function() {
					index++;
					if (index == 1) {
						$()
					}
				}, 2000)
			},
			methods: {

			}
	}
</script>
<style type="text/css">
	.site_wrap1 {
		width: 100%;
		display: inline-block;
	}
	
	.middleSide {
		height: 450px;
	}
	
	#scroll_container {
		position: relative;
	}
	
	.scroll_container {
		width: 100%;
		overflow: hidden;
	}
	
	#scroll_container p:nth-child(2) {
		width: 775px;
		position: absolute;
		left: 50%;
		top: 0;
		margin-left: -389px;
		z-index: 3;
	}
	
	#scroll_container p .prevBtn {
		display: none;
	}
	
	#scroll_container p .nextBtn {
		display: none;
	}
	
	.mainBody .itmes_wrap .middleSide .nextBtn {
		left: auto;
		right: 1px;
		text-align: right;
		background-position: -80px 0;
	}
	
	.mainBody .itmes_wrap .middleSide .clickBtn {
		display: none;
		position: absolute;
		top: 200px;
		left: 4px;
		width: 40px;
		height: 80px;
		background: url(http://www.meiduimall.com/themes/newfirst/images/images/leftright.png) no-repeat;
	}
	
	#scroll_container ul .fir01 {
		/*opacity: 0;*/
		background-color: rgb(251, 71, 56);
		/*display: none;*/
	}
	
	.mainBody .itmes_wrap .middleSide li.fir01 {
		display: block;
		opacity: 1;
		filter: alpha(opacity=100);
	}
	
	.mainBody .itmes_wrap .middleSide li {
		/*display: none;*/
		width: 100%;
		height: 450px;
		overflow: hidden;
		/*opacity: 0;*/
		/*filter: alpha(opacity=0);*/
	}
	
	ul li {
		vertical-align: top;
	}
	
	.mainBody .itmes_wrap .middleSide li a {
		display: block;
		margin: auto;
		height: 480px;
		width: 770px;
	}
	
	.mainBody .itmes_wrap .middleSide li a img {
		width: 770px;
		height: 450px;
		display: block;
		vertical-align: bottom;
		margin: 0 auto;
	}
	
	#scroll_num {
		position: absolute;
		bottom: 10px;
		left: 50%;
		margin-left: -90px;
		height: 20px;
		line-height: 20px;
		text-align: center;
	}
	
	#scroll_num span {
		display: inline;
		float: left;
		margin-right: 10px;
		width: 20px;
		height: 20px;
		color: #fff;
		cursor: pointer;
		font-weight: bold;
		border-radius: 10px;
		background: #000;
		opacity: 0.8;
		filter: alpha(opacity=80);
		font-family: "Arial";
	}
	
	#scroll_num span.act {
		background: #fedb6a;
		color: #122a45;
	}
	
	.site_wrap1_con {
		width: 1200px;
		margin: auto;
	}
	
	.site_wrap1 .main {
		float: left;
		width: 100%;
		margin-right: -35em;
	}
	
	.site_wrap1 .main .leftitem {
		float: left;
		width: 775px;
		margin-left: 210px;
	}
	
	.site_wrap1 .rightitem {
		float: right;
		width: 215px;
		text-align: left;
		margin-top: -450px;
		height: 450px;
		position: relative;
	}
	
	.right_box {
		height: 450px;
		background: url(http://www.meiduimall.com/themes/newfirst/images/home/css/images/add_shop_bg2.png) no-repeat 0 0;
	}
	
	.site_wrap1 .rightitem {
		text-align: left;
	}
	
	.site_wrap1 .rightitem {
		text-align: left;
	}
	
	.gw_info .hd {
		position: relative;
		margin: 0 16px;
		padding: 26px 0 10px 0;
		border-bottom: 1px dashed #cdcdcd;
	}
	
	.gw_info .hd h3 {
		font-size: 17px;
		color: #444444;
		font-weight: bold;
	}
	
	.gw_info .bd {
		padding: 10px 16px 0px;
	}
	
	.gw_info .bd ul li a {
		display: inline-block;
		width: 183px;
		height: 22px;
		line-height: 22px;
		font-size: 12px;
		color: #666666;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.rz_box {
		padding: 10px 8px 0;
		width: 199px;
		text-align: center;
	}
	
	.rz_box a {
		display: inline-block;
		width: 172px;
		height: 47px;
		background: #122a45;
		border-radius: 10px;
	}
	
	.rz_box a:hover{
		background: #5e6ba2;
	}
	
	.rz_box a p {
		padding: 10px 0 10px 0;
		text-align: center;
	}
	
	.rz_box a p i {
		color: #fedb6a;
		display: block;
		font-size: 15px;
		margin-bottom: 4px;
		font-style: normal;
		font-weight: bold;
		text-align: center;
	}
	
	.rz_box a p span {
		display: block;
		color: #cdced0;
		font-size: 12px;
	}
	
	.ad_item {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 215px;
		height: 110px;
	}
	
	.ad_item img {
		width: 215px;
		height: 110px;
	}
</style>