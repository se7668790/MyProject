<template>
	<div>
		<ul id="fine_1" class="fine_r" style="display: block;">
			<li v-for="hasmine in hasmines">
				<div>
					<p>
						<a href="#" :title="hasmine.desca" target="_blank">
							<img :src="hasmine.src" :alt="hasmine.desca" style="display: inline;" height="196" width="228" />
						</a>
					</p>
					<h5></h5>
				</div>
				<h3>
								<a href="#" :title="hasmine.desca" target="_blank">{{hasmine.desca}}</a>								
							</h3>
				<h4>{{hasmine.descb}} </h4>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					
				}
			},
			props: ['hasmines'],
			methods: {

			}

	}
</script>

<style type="text/css">
	.fine_r li {
		float: left;
		width: 228px;
		height: 258px;
		padding: 4px 5px;
		margin: 0 0 2px 4px;
		display: inline;
		background: #f5f5f5;
	}
	
	.fine_r li div {
		width: 228px;
		height: 196px;
		background: #ffffff;
		position: relative;
	}
	
	.fine_r li div h5 {
		width: 100px;
		height: 42px;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.fine_r li h3 {
		font-size: 12px;
		color: #323232;
		text-align: center;
		line-height: 24px;
		padding-top: 10px;
	}
	
	.fine_r li h3 a {
		color: #323232;
	}
	
	.fine_r li h3 span {
		color: #f84443;
		border: 1px solid #f84443;
		padding: 0px;
		margin: 0px;
	}
	
	.fine_r li h4 {
		font-size: 12px;
		color: #000000;
		font-weight: bold;
		text-align: center;
		line-height: 24px;
	}
</style>