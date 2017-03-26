<template>
	<div>
		<site-wrapone></site-wrapone>
    	<site-wraptwo></site-wraptwo>
    	<box-w></box-w>
	</div>    
</template>
<script>
	import siteWrapone from './siteWrapone.vue'
	
	import siteWraptwo from './siteWraptwo.vue'
	
	import boxW from './boxW.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			'site-wrapone': siteWrapone,
			'site-wraptwo': siteWraptwo,
			'box-w': boxW
		}
	}
</script>
<style type="text/css">

</style>