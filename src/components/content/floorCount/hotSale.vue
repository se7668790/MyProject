<template>
	<div>
		<!--热销排行-->
		<div class="sort">
			<div class="sort-hot"></div>
			<h3 class="sort_c">
			 		<span>{{choice}}</span>
			 		{{hotsale}}
			 	</h3>
			<nav-list :goodslist="goodslistone"></nav-list>
		</div>
		<div class="fine">
			<div class="fine_c">
				<div class="fine_l">
					<h3>{{rank}}</h3>
					<div class="fine_list">
						<dl v-for="copen in copens">
							<dt class="top">{{copen.index}}</dt>
							<dd>
								<a href="#" :title="copen.desc">{{copen.desc}}</a>
							</dd>
						</dl>
					</div>
				</div>
				<goods-show :hasmines="hasminesone" class="fine1"></goods-show>
				<goods-show :hasmines="hasminestwo" class="fine2"></goods-show>
				<goods-show :hasmines="hasminesthree" class="fine3"></goods-show>
				<goods-show :hasmines="hasminesfour" class="fine4"></goods-show>
				<goods-show :hasmines="hasminesfive" class="fine5"></goods-show>
				<goods-show :hasmines="hasminessix" class="fine6"></goods-show>
			</div>
			<pro-f v-bind:apples="applesone"></pro-f>
		</div>
	</div>
</template>

<script>
	import navList from '../smallComponents/navList.vue'
	import goodsShow from '../smallComponents/goodsShow.vue'
	import proF from '../smallComponents/proF.vue'
	export default {		
		data() {
				return {
					choice: '热销精选',
					hotsale: 'HOT SALE',
					rank: '热销排行榜',
					goodslistone: ['数码配件', '家用电器', '服装配饰', '鞋靴箱包', '个护美妆', '食品保健'],
					copens: [{
						'index': '1',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '2',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '3',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '4',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '5',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '6',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '7',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '8',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '9',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '10',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '11',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}, {
						'index': '12',
						'desc': '【爆款】Copen高倍滋颜花梨木深层补水蚕丝面膜'
					}],
					hasminesone: [{
						'src': 'http://img01.1gw.com/363420895dde2c0e9fa7ab851d25699440dda94e.jpg',
						'desca': '海波里恩芹菜籽片',
						'descb': '降尿酸 降血压 降血脂 去便秘',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/cf7371a5c5003e07204e35bdfae680b14cdf8588.jpg',
						'desca': '野生黑枸杞',
						'descb': '青海基地直采',
						'discc': '买二送一'
					}, {
						'src': 'http://img01.1gw.com/a51d4f56534e03811bdbe2073a32903937fcd41a.jpg',
						'desca': '长根堂 你火了吗？草本茶',
						'descb': '下火良品',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/6cd4b7f08795831957951664a22c793b3b46eba9.jpg',
						'desca': '干柠檬片250克',
						'descb': '美白养颜 提神醒脑',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/d43f2e583888cd5733f0581b1511be525ec8faf6.jpg',
						'desca': '红枣夹核桃仁500g',
						'descb': '粒粒精选',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/825433f8c78dbcf22d1ef4803d3f79b13797e731.jpg',
						'desca': '云南野生反柄灵芝',
						'descb': '好源头 高品质 品种佳',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/9aab144f52883c91049faadc3487f522cb3684a2.jpg',
						'desca': '陇东粮仓 葵瓜子 200g',
						'descb': '黄土高原 自然生长',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/8271a78af888150207ca9ae15123548de2273bd1.jpg',
						'desca': '婺珍坊白酒50度500ml',
						'descb': '入口醇厚甘爽不上头',
						'discc': ''
					}],
					hasminestwo: [{
						'src': 'http://img01.1gw.com/6139e8e681a1c3bbaf8a6e76d3f4c4b4738c0c61.jpg',
						'desca': '韩诺负离子卫生巾套餐',
						'descb': '降尿酸 降血压 降血脂 去便秘',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/78fd6ffb21ec9ef704d41292909001c9fe494b60.jpg',
						'desca': '韩诺负离子卫生巾套餐',
						'descb': '3包日用10片2包夜用8片',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/19f7eba1b68187947d75df7604d79eb780060f0e.jpg',
						'desca': '大三湘东方树山茶沐浴液500ml',
						'descb': '止痒滋润 性质温和',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/82227832e3929207e6e7ec5b271330489475fd7e.jpg',
						'desca': '阿道夫 茶麸无硅油卸妆洗发原液',
						'descb': '天然光泽 修护损伤',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/dacc1510d4fa12ead322c5776eb756ce6877a477.jpg',
						'desca': '自然乐园 纳益其尔精粹自然玫瑰安瓶',
						'descb': '改善皱纹 美白祛斑',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/f4334a4da8121187ab468460ceb387200a0a2187.jpg',
						'desca': 'Terrake法国天芮多元修护眼霜',
						'descb': '淡化细纹 紧致眼周',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/cae533d32dee0bea3a048aaf069d91919631ec72.jpg',
						'desca': '韩国正品 兰芝气垫BB霜 No.21 15g*2',
						'descb': '水感亮白 自然遮瑕',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/942d8a9f04f29f4e19cb6a504df169cd37165b6e.jpg',
						'desca': 'Innisfree大米面膜 10片*2',
						'descb': '美白紧致 深层清洁',
						'discc': ''
					}],
					hasminesthree: [{
						'src': 'http://img01.1gw.com/b259f8107f8811169d20cb050bcc547b7746578d.jpg',
						'desca': '真皮休闲套脚鞋',
						'descb': '透气舒适 炫酷闪耀',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/dcb6b1d2a2ad99871c61d12fd8d962e52c685f30.jpg',
						'desca': '复古圆头软底防滑单鞋',
						'descb': '这份舒适够大牌',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/73c94649773adbc398ee7c3cd43c2787a507ef59.jpg',
						'desca': '蛇缠珍珠欧美高跟单鞋',
						'descb': '高端优雅 欧美风范',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/52e2cacc068ee9faa70d404dc091d6ded8687467.jpg',
						'desca': '张小盒 设计师款 设计师款贴纸箱20/24寸',
						'descb': '多彩生活 旅行新主意',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/3f4bb07d7ff8f11287d04dead1ca7c7ec4193d87.jpg',
						'desca': '英国it luggage拉杆箱',
						'descb': '女人节活动钜惠',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/f4334a4da8121187ab468460ceb387200a0a2187.jpg',
						'desca': '英国it luggage拉杆箱',
						'descb': '面包块纹路 高端大气',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/2a6c9dd2c66f9f36ac356ed5e1c514a693f73f19.jpg',
						'desca': '张小盒 设计师款 迷彩绿20/24/28寸',
						'descb': '旅行 在路上',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/fe184a0c7d0e5e1d73e411b39714743276dd353f.jpg',
						'desca': '张小盒 设计师款宇宙符号-28寸',
						'descb': '好看耐用 双排静音轮设计',
						'discc': ''
					}],
					hasminesfour: [{
						'src': 'http://img01.1gw.com/2b52d461c86c1d55c51557d98a21820d238a9958.jpg',
						'desca': '南极人 段染速干运动短袖',
						'descb': '新升级 更透气',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/62c3e90dce8e57907470c44e0f80b129cdfb5be0.jpg',
						'desca': 'BOSIBIO  男士中长款卫衣',
						'descb': '亲肤面料 韩版时尚',
						'discc': '买二送一'
					}, {
						'src': 'http://img01.1gw.com/b55cab8a48ce66c0dde81fd58c5c4f9ff29f158a.jpg',
						'desca': '平色 2017新款蕾丝网纱打底衫',
						'descb': '韩版修身 显瘦百搭',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/baa26d2af17a84e1d600bb9e3cda2924ce10a364.jpg',
						'desca': '平色 2017新褶皱收腰上衣',
						'descb': '优质面料 气质修身',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/94141fceac0bf784f92ab6508097a53d6c9175bb.jpg',
						'desca': 'BOSIBIO 男士高弹修身牛仔裤',
						'descb': '舒适弹力 修身有型',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/1557a620eb7750c483687fc1d0f23b30b7e08d5b.jpg',
						'desca': '嘉艾思 韩版高腰弹力流苏边微辣女裤',
						'descb': '时尚典范 个性由我',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/9aab144f52883c91049faadc3487f522cb3684a2.jpg',
						'desca': '陇东粮仓 葵瓜子 200g',
						'descb': '黄土高原 自然生长',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/8271a78af888150207ca9ae15123548de2273bd1.jpg',
						'desca': '婺珍坊白酒50度500ml',
						'descb': '入口醇厚甘爽不上头',
						'discc': ''
					}],
					hasminesfive: [{
						'src': 'http://img01.1gw.com/363420895dde2c0e9fa7ab851d25699440dda94e.jpg',
						'desca': '海波里恩芹菜籽片',
						'descb': '降尿酸 降血压 降血脂 去便秘',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/cf7371a5c5003e07204e35bdfae680b14cdf8588.jpg',
						'desca': '野生黑枸杞',
						'descb': '青海基地直采',
						'discc': '买二送一'
					}, {
						'src': 'http://img01.1gw.com/a51d4f56534e03811bdbe2073a32903937fcd41a.jpg',
						'desca': '长根堂 你火了吗？草本茶',
						'descb': '下火良品',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/6cd4b7f08795831957951664a22c793b3b46eba9.jpg',
						'desca': '干柠檬片250克',
						'descb': '美白养颜 提神醒脑',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/d43f2e583888cd5733f0581b1511be525ec8faf6.jpg',
						'desca': '红枣夹核桃仁500g',
						'descb': '粒粒精选',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/825433f8c78dbcf22d1ef4803d3f79b13797e731.jpg',
						'desca': '云南野生反柄灵芝',
						'descb': '好源头 高品质 品种佳',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/9aab144f52883c91049faadc3487f522cb3684a2.jpg',
						'desca': '陇东粮仓 葵瓜子 200g',
						'descb': '黄土高原 自然生长',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/8271a78af888150207ca9ae15123548de2273bd1.jpg',
						'desca': '婺珍坊白酒50度500ml',
						'descb': '入口醇厚甘爽不上头',
						'discc': ''
					}],
					hasminessix: [{
						'src': 'http://img01.1gw.com/363420895dde2c0e9fa7ab851d25699440dda94e.jpg',
						'desca': '海波里恩芹菜籽片',
						'descb': '降尿酸 降血压 降血脂 去便秘',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/cf7371a5c5003e07204e35bdfae680b14cdf8588.jpg',
						'desca': '野生黑枸杞',
						'descb': '青海基地直采',
						'discc': '买二送一'
					}, {
						'src': 'http://img01.1gw.com/a51d4f56534e03811bdbe2073a32903937fcd41a.jpg',
						'desca': '长根堂 你火了吗？草本茶',
						'descb': '下火良品',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/6cd4b7f08795831957951664a22c793b3b46eba9.jpg',
						'desca': '干柠檬片250克',
						'descb': '美白养颜 提神醒脑',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/d43f2e583888cd5733f0581b1511be525ec8faf6.jpg',
						'desca': '红枣夹核桃仁500g',
						'descb': '粒粒精选',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/825433f8c78dbcf22d1ef4803d3f79b13797e731.jpg',
						'desca': '云南野生反柄灵芝',
						'descb': '好源头 高品质 品种佳',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/9aab144f52883c91049faadc3487f522cb3684a2.jpg',
						'desca': '陇东粮仓 葵瓜子 200g',
						'descb': '黄土高原 自然生长',
						'discc': ''
					}, {
						'src': 'http://img01.1gw.com/8271a78af888150207ca9ae15123548de2273bd1.jpg',
						'desca': '婺珍坊白酒50度500ml',
						'descb': '入口醇厚甘爽不上头',
						'discc': ''
					}],
					applesone: [{
						'src': 'http://img01.1gw.com/images/36/51/67/3c4fd7d9013607437a75216481ebe651191cf013.png',
						'desc': '苹果'
					}, {
						'src': 'http://img01.1gw.com/images/c5/64/d4/62b210198931c3d6ff782e2abda69d0b2f388e71.png',
						'desc': '华为'
					}, {
						'src': 'http://img01.1gw.com/images/a7/89/9d/58585c2acecb71d85a55ff67558984e7e5eda420.png',
						'desc': '兰芝'
					}, {
						'src': 'http://img01.1gw.com/images/67/e3/28/aad14f350c03d66b43e0040e781de49538828531.png',
						'desc': '金狐狸'
					}, {
						'src': 'http://img01.1gw.com/19a03664346d41b297e5d99d8ad60da67c8ead05.jpg',
						'desc': '雷朋'
					}, {
						'src': 'http://img01.1gw.com/images/fd/2a/b3/80879be6c6348e456236e0be6e279e6e8255fdea.png',
						'desc': '阿迪'
					}, {
						'src': 'http://img01.1gw.com/images/47/95/01/d174a616677bcf4f6d3e304427100fe4c4db40cc.png',
						'desc': '梵'
					}, {
						'src': 'http://img01.1gw.com/images/be/b6/b3/6e3ce15eb847b0496b119b9dfeb4c490db6758e5.png',
						'desc': '美的'
					}, {
						'src': 'http://img01.1gw.com/images/4f/a3/98/87087a25fe7945f126145ddb9ac0718c67e26e9d.png',
						'desc': '泸州老窖'
					}, {
						'src': 'http://img01.1gw.com/abb94a3ac0bea18ed4145e97d2922467f7582a0d.png',
						'desc': '六朵茶花'
					}],
				}
			},
			props: [''],
			methods: {

			},
			components: {
				'nav-list': navList,
				'goods-show': goodsShow,
				'pro-f': proF
			},
			
	}
</script>

<style type="text/css">
	/*sort*/
	
	.sort {
		width: 1200px;
		height: 37px;
		margin: 16px 0 10px 0;
		position: relative;
	}
	
	.sort div {
		height: 36px;
		border-bottom: 1px solid #122a45;
	}
	
	.sort h3.sort_a {
		min-width: 164px;
	}
	
	.sort h3.sort_b {
		min-width: 210px;
	}
	
	.sort h3 {
		height: 37px;
		font-size: 12px;
		color: #eecf68;
		line-height: 37px;
		padding: 0 16px;
		position: absolute;
		left: 0;
		top: 0;
		background: #122a45;
	}
	
	.sort h3 span {
		font-size: 16px;
		color: #eecf68;
		padding-right: 12px;
	}
	/*finelist*/
	
	.fine {
		margin-bottom: 20px;
	}
	
	.fine_c {
		width: 1200px;
		height: 536px;
	}
	
	.fine_c .fine_l {
		float: left;
		width: 232px;
		min-height: 10px;
	}
	
	.fine_l h3 {
		height: 60px;
		font-size: 16px;
		color: #fedb6a;
		text-align: center;
		line-height: 60px;
		background: #122a45;
	}
	
	.fine_l .fine_list {
		width: 190px;
		height: 462px;
		border: 1px solid #dcdcdc;
		padding: 10px 20px 0;
		background: #f8f8f8;
	}
	
	.fine_l dl {
		width: 190px;
		height: 37px;
		border-bottom: 1px solid #dcdcdc;
	}
	
	.fine_l dt.top {
		color: #122a45;
		background: url(http://www.meiduimall.com/themes/newfirst/images/home/css/images/fine_h2.png) no-repeat 0 center;
	}
	
	.fine_l dt {
		float: left;
		width: 22px;
		height: 34px;
		font-size: 12px;
		color: #666666;
		text-align: center;
		line-height: 37px;
		padding-right: 18px;
		background: url(http://www.meiduimall.com/themes/newfirst/images/home/css/images/fine_a.png) no-repeat 0 center;
	}
	
	.fine_l dd {
		float: left;
		width: 150px;
		height: 37px;
		font-size: 12px;
		line-height: 37px;
	}
	
	.fine_l dd a {
		display: block;
		width: 150px;
		height: 37px;
		color: #737373;
		line-height: 37px;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: keep-all;
		white-space: nowrap;
	}
</style>