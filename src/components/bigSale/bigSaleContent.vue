<template>
	<div class="tcj g-wrap">
		<div class="g-banner u-navtop">
			<div class="g-bbox">
				<img src="http://img01.1gw.com/6abf45daed55b34446c09afea28e406ee07369e2.jpg" />
			</div>
		</div>

		<g-floor></g-floor>
		<g-floor></g-floor>
		<div class="u-navitem">
			<h2 class="u-ftitle">低价特惠</h2>
		</div>
		<g-products></g-products>
		<div class="u-navitem">
			<h2 class="u-ftitle">精选特惠</h2>
		</div>
		<u-product :products="pproducts"></u-product>
	</div>
</template>

<script>
	
	import gFloor from './gFloor.vue'
	import gProducts from './gProducts.vue'
	import uProduct from './uProduct.vue'
	export default {
		data() {
				return {
					pproducts:[{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '斗油士炫红简盒橄榄油礼盒750ML*2',
					'srcc': 'http://img01.1gw.com/e9b575ad34f9083ee86e9ff5bddd0b45b8ce961a.jpg',
					'bbb': '美兑价：286.00元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '126',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},]
				}
			},
			methods: {

			},
			components: {
				'g-floor': gFloor,
				'g-products': gProducts,
				'u-product': uProduct
			}
	}
</script>

<style type="text/css">
	.g-wrap {
		position: relative;
		background: #d9f5ff;
	}
	
	a {
		color: #000;
		text-decoration: none;
	}
	
	.g-banner {
		overflow: hidden;
		margin: 0 0 20px;
	}
	
	.g-bbox {
		position: relative;
		top: 0;
		left: 50%;
		width: 1920px;
		margin-left: -960px;
	}
	
	img {
		border: 0;
		vertical-align: middle;
	}
	
	
</style>