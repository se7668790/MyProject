<template>
	<div class="g-products">
		<li class="u-product" v-for="product in products">
			<a href="#" :title="product.titlee" target="_blank">
				<img :src="product.srcc" :alt="product.titlee" />
			</a>
			<a class="u-product__title" href="#" :title="product.titlee">{{product.titlee}}</a>
			<h3 class="u-product__price">
			<b>{{product.bbb}}</b>
		</h3>
			<h4 class="u-product__point">
			<a class="text-danger" href="#" target="_blank">{{product.aaa}}</a>
			{{product.hhh}}
			<i class="text-danger">{{product.iii}}</i>
			{{product.yyy}}
		</h4>
			<a class="u-product__buy" href="#" :title="product.titlee" target="_blank">{{product.ggg}}</a>
		</li>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['products']
	}
</script>

<style type="text/css">
	h3,h4{
		text-align: left;
	}
</style>