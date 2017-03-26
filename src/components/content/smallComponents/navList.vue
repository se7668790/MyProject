<template>
	<ul>
		<li v-for="goods in goodslist" :class="{hoverab: hoverabn == goods}" @mouseover="selected(goods)">
			<a href="#" :title=goods target="_blank">{{goods}}</a>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
				return {
					hoverabn: '食品保健',

				}
			},
			props: ['goodslist'],
			methods: {
				selected: function(goods) {
					this.hoverabn = goods;
					if (goods == '食品保健') {
						$('.fine6').css('display', 'none');
						$('.fine5').css('display', 'none');
						$('.fine4').css('display', 'none');
						$('.fine3').css('display', 'none');
						$('.fine2').css('display', 'none');
						$('.fine1').css('display', 'block')
					} else if (goods == '个护美妆') {
						$('.fine6').css('display', 'none');
						$('.fine5').css('display', 'none');
						$('.fine4').css('display', 'none');
						$('.fine3').css('display', 'none');
						$('.fine1').css('display', 'none');
						$('.fine2').css('display', 'block')
					} else if (goods == '鞋靴箱包') {
						$('.fine6').css('display', 'none');
						$('.fine5').css('display', 'none');
						$('.fine4').css('display', 'none');
						$('.fine1').css('display', 'none');
						$('.fine2').css('display', 'none');
						$('.fine3').css('display', 'block')
					} else if (goods == '服装配饰') {
						$('.fine6').css('display', 'none');
						$('.fine5').css('display', 'none');
						$('.fine1').css('display', 'none');
						$('.fine3').css('display', 'none');
						$('.fine2').css('display', 'none');
						$('.fine4').css('display', 'block')
					} else if (goods == '家用电器') {
						$('.fine6').css('display', 'none');
						$('.fine1').css('display', 'none');
						$('.fine4').css('display', 'none');
						$('.fine3').css('display', 'none');
						$('.fine2').css('display', 'none');
						$('.fine5').css('display', 'block')
					} else if (goods == '数码配件') {
						$('.fine1').css('display', 'none');
						$('.fine5').css('display', 'none');
						$('.fine4').css('display', 'none');
						$('.fine3').css('display', 'none');
						$('.fine2').css('display', 'none');
						$('.fine6').css('display', 'block')
					} else if (goods == '营养保健') {
						$('.fineone2').css('display', 'none');
						$('.fineone1').css('display', 'block')
					} else if (goods == '食品酒水') {
						$('.fineone1').css('display', 'none');
						$('.fineone2').css('display', 'block')
					}

					//					alert(this.i)
				}
			},
			mounted() {
				$('.fine6').css('display', 'none');
				$('.fine5').css('display', 'none');
				$('.fine4').css('display', 'none');
				$('.fine3').css('display', 'none');
				$('.fine2').css('display', 'none');
				$('.fine1').css('display', 'block');
				$('.fineone2').css('display', 'none');
				$('.fineone1').css('display', 'block')
			}
	}
</script>

<style type="text/css">
	.sort ul {
		width: auto;
		height: 37px;
		text-align: right;
		line-height: 37px;
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.sort li {
		display: inline-block;
		cursor: pointer;
		min-width: 30px;
		float: right;
	}
	
	.sort ul .hoverab {
		background-color: #FEDB6A;
	}
	
	.sort ul .hoverab a {
		color: black;
	}
</style>