<template>
	<div>
		<!--floorOne-->
		<div class="sort">
			<div class="sort-hot"></div>
			<h3 class="sort_c">
			 		<span>{{choice}}</span>
			 		{{hotsale}}
			 	</h3>
			<nav-list :goodslist="goodslistFone"></nav-list>
		</div>
		<pro-l></pro-l>
		<goods-show :hasmines="hasminesone" class="fineone1"></goods-show>
		<goods-show :hasmines="hasminestwo" class="fineone2"></goods-show>
		<pro-f v-bind:apples="applesone"></pro-f>
		<ad-one v-bind:picture=ppictureone></ad-one>
	</div>
</template>

<script>
	import navList from '../smallComponents/navList.vue'
	import goodsShow from '../smallComponents/goodsShow.vue'
	import proF from '../smallComponents/proF.vue'
	import proL from '../smallComponents/proL.vue'
	import adOne from '../smallComponents/adOne.vue'
	export default {
		data() {
				return {
					choice: "F1",
					hotsale: '食品保健',
					goodslistFone: ['食品酒水', '营养保健'],
					ppictureone:'http://img01.1gw.com/92d3187a5868c277e48ae7949e8ce26fdba2620c.jpg',
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
			components: {
				'nav-list': navList,
				'goods-show': goodsShow,
				'pro-f': proF,
				'pro-l': proL,
				'ad-one': adOne
			}
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
		font-size: 14px;
		color: #eecf68;
		line-height: 37px;
		padding: 0 16px;
		position: absolute;
		left: 0;
		top: 0;
		background: #122a45;
		text-align: left;
	}
	
	.sort h3 span {
		font-size: 24px;
		color: #eecf68;
		padding-right: 12px;
	}
</style>