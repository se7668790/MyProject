<template>
	<li>
		<div class="dropmenu" @click="isNone(isshow)">
			{{liste}}
		</div>
		<ul class="dropmenu-items" v-if="isshow">
			<list-detail  v-for="listb in listbs" :lista="listb"></list-detail>
		</ul>
	</li>
</template>

<script>
	import listDetail from './listDetail.vue'
	export default{
		data(){
			return{
				isshow: false,
			}
		},
		components:{
			'list-detail':listDetail
		},
		methods:{
			isNone:function(isshow){
				this.isshow = !isshow
			}
		},
		props:['liste','listbs',]
	}
</script>