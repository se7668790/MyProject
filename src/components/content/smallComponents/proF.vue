<template>
	<ul class="pro_f">
		<li v-for="apple in apples">
			<a href="#" :title="apple.desc" target="_blank">
				<img class="lazy" :src="apple.src" :alt="apple.src" style="display: inline;" height="64" width="108" />
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props: ['apples']
	}
</script>

<style type="text/css">
	.pro_f {
		height: 64px;
		background: #f8f8f8;
	}
	
	.pro_f li:nth-child(10n+1) {
		background: none;
	}
	
	.pro_f li {
		float: left;
		width: 120px;
		height: 64px;
		text-align: center;
		background: url(http://www.meiduimall.com/themes/newfirst/images/home/css/images/pro_f.png) no-repeat 0 center;
	}
</style>