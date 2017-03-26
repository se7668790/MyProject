<template>
	<div id="app" class="wrap">
		<!--使用组件欢迎来到美兑壹购物商城-->
		<top-nav></top-nav>
		<!--使用组件美兑壹购物-->
		<content-nav></content-nav>
		<!--使用组件导航-->
		<index-nav></index-nav>
		<!--使用组件内容-->
		<content-mai></content-mai>
		<!--使用组件底部-->
		<footer-con></footer-con>
	</div>
</template>

<script>
	//导入topNav.vue
	import topNav from './nav/topNav.vue'
	//导入contentNav.vue
	import contentNav from './nav/contentNav.vue'
	//导入indexNav.vue
	import indexNav from './nav/indexNav.vue'
	//导入content.vue
	import contentMai from './content/content.vue'
	//导入footerCon.vue
	import footerCon from './footer/footerCon.vue'
	//导出App.vue
	export default {
		name: 'app',
		data() {
			return {

			}
		},
		components: {
			'top-nav': topNav,
			'content-nav': contentNav,
			'index-nav': indexNav,
			'content-mai': contentMai,
			'footer-con': footerCon
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font: 12px/14px "Microsoft Yahei", "Heiti", Segoe UI, Arial, sans-serif, serif;
		background: #fff;
		min-width: 1200px;
		text-align: center;
		color: #404040;
	}
	
	.wrap {
		width: 100%;
		min-width: 1200px;
	}
	
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	font,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	select,
	button,
	input,
	textarea {
		margin: 0;
		padding: 0;
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
		font-weight: normal;
	}
	
	menu,
	ol,
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	
	select,
	button,
	input,
	textarea {
		vertical-align: middle;
		line-height: normal;
	}
	
	a {
		color: #a3a3a3;
		text-decoration: none;
		outline: none;
		display: inline-block;
	}
	
	ul {
		list-style-type: none;
	}
	
	ul,
	ol {
		list-style: none;
	}
	
	ul li {
		vertical-align: top;
	}
	
	a img,
	fieldset,
	iframe {
		border: 0 none;
	}
	
	img {
		vertical-align: middle;
	}
	
	fieldset,
	img,
	abbr,
	acronym {
		border: 0;
	}
</style>