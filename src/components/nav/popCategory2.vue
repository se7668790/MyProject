<template>
		<dd>
			<a v-for="list2 in list2s" href="#" target="_blank">{{list2}}</a>
		</dd>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['list2s']
	}
</script>

<style type="text/css">
	
</style>
