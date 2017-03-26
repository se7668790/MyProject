<template>
	<div class="g-products">
		<ul class="u-products">
			
			<product-big></product-big>
			<product-big></product-big>
			<u-product :products="ppproducts"></u-product>
		</ul>
	</div>
</template>

<script>
	import productBig from './productBig.vue'
	import uProduct from './uProduct.vue'
	export default {
		data() {
			return {
				ppproducts: [{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},{
					'titlee': '韩国正品 可瑞安 芝士味玉米脆条83g',
					'srcc': 'http://img01.1gw.com/2c6ae0f26588368903107d0023170a6f0b1d8e23.png',
					'bbb': '美兑价：17.90元',
					'aaa': '美兑积分',
					'hhh': '可抵',
					'iii': '10',
					'yyy': '元',
					'ggg': '立即抢购 >'
				},]
			}
		},
		components:{
			'product-big': productBig,
			'u-product': uProduct
		}
	}
</script>

<style>
	.g-products {
		width: 1220px;
		margin: 0 auto;
		padding: 0 0 20px;
		overflow: hidden;
	}
	
	.u-product {
		position: relative;
		width: 285px;
		float: left;
		margin: 20px 10px 0;
	}
	
	.u-product--big {
		width: 590px;
	}
	
	.u-product a img {
		width: 285px;
		height: 250px;
	}
	
	.u-product--big a img {
		width: 590px;
		height: 250px;
	}
	
	.u-product__title {
		font-weight: normal;
		display: block;
		padding: 0 10px;
		overflow: hidden;
		height: 43px;
		line-height: 43px;
		font-size: 18px;
		color: #300606;
		text-align: center;
		background: #eee;
	}
	
	.u-ftitle {
		height: 52px;
		line-height: 52px;
		margin: 30px 0 10px;
		font-size: 52px;
		font-weight: bold;
		color: #5acaff;
		text-align: center;
		background: url(http://www.meiduimall.com/statics/single/bigsale/css/images/floor-title.png) no-repeat center center;
	}
	
	.u-product__price {
		padding: 10px 0 6px 14px;
		font-size: 16px;
		color: #c90101;
		background-color: #fff;
	}
	
	.u-product--big .u-product__price b {
		font-size: 30px;
	}
	
	.u-product__point {
		padding: 6px 0 10px 14px;
		font-size: 14px;
		color: #122a45;
		background-color: #fff;
	}
	
	.text-danger {
		color: #d9534f;
	}
	
	.u-product--big .u-product__buy {
		right: 30px;
		font-size: 20px;
	}
	
	.u-product__buy {
		position: absolute;
		bottom: 10px;
		right: 10px;
		height: 37px;
		line-height: 37px;
		padding: 0 12px;
		font-size: 14px;
		color: #fff;
		background: url(http://www.meiduimall.com/statics/single/bigsale/css/images/btn-bg.jpg) repeat-x 0 0;
	}
	
	.u-product__title:hover {
		color: red;
	}
	
	a.text-danger:hover {
		color: #ee1;
	}
	
	.u-product__buy:hover {
		color: orange;
	}
</style>