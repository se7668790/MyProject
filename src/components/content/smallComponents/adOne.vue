<template>
	<div class="ad1">
		<a href="#" target="_blank">
			<img :src="picture" />
		</a>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props: ['picture']
	}
</script>

<style type="text/css">
	.ad1 {
		display: inline-block;
		width: 100%;
		margin-bottom: 30px;
	}
	
	.add1 img {
		max-width: 1200px;
	}
</style>