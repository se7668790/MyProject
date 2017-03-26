<template>
	<dl>
		<dt>
										<a href="#" target="_blank">{{list1}}</a>
									</dt>
		<pop-category2 v-for="list4 in listls" :list2s="list4.listaaa"></pop-category2>
	</dl>
</template>

<script>
import popCategory2 from './popCategory2.vue'
	export default{
		data(){
			return{
				
			}
		},
		compentents:{
			'pop-category2':popCategory2
		},
		props:['listls']
	}
</script>

<style type="text/css">
	
</style>