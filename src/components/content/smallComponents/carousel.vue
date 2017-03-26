<template>
	<div class="carousel">
		<ul class="showimg" ref="imgMargin">
			<template v-for='(sd, index) in shufflingData'>
				<!--<transition name="img">-->
					<li v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext'>
						<a target="_blank" v-bind:title="sd.title" class="img" v-bind:href="sd.href"><img v-bind:alt="sd.title" v-bind:src="sd.url" /></a>
					</li>
				<!--</transition>-->
			</template>
		</ul>
		<div class='bullet-nav'>
			<div class="bullet-box">
				&nbsp;
				<a class="bullet" v-for='(sd, index) in shufflingData' v-bind:class="{'active': shufflingId==index}" v-on:mouseover='bulletFun(index)'></a>
				&nbsp;
			</div>
		</div>
		<!--<div v-show='PreNext' class="preNext pre" v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext' v-on:click='preFun'></div>-->
		<!--<div v-show='PreNext' class="preNext next" v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext' v-on:click='nextFun'></div>-->
	</div>
</template>


/*第二种  不用看*/
<!--<template>
		<div class="carousel">
				<ul class="showimg">
					<template v-for='(sd, index) in shufflingData'>
						<transition name="img">
							<li v-if='shufflingId== index' v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext' >
								<a target="_blank" v-bind:title="sd.title" class="img" v-bind:href="sd.href"><img v-bind:alt="sd.title" v-bind:src="sd.url" /></a>
							</li>
						</transition>
					</template>
				</ul>
				<div class='bullet-nav'>
					<div class="bullet-box">
						&nbsp;
						<a class="bullet" v-for='(sd, index) in shufflingData' v-bind:class="{'active': shufflingId==index}" v-on:mouseover='bulletFun(index)'></a>
						&nbsp;
					</div>
				</div>
				<div v-show='PreNext' class="preNext pre" v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext' v-on:click='preFun'></div>
				<div v-show='PreNext' class="preNext next" v-on:mouseover='showPreNext' v-on:mouseout='hiddenPreNext' v-on:click='nextFun'></div>
		</div>
</template>-->

<script>
	export default {
		components: {},
		mounted: function() {
			var _this = this;
			var timer = setInterval(function() {
				if(_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
					_this.shufflingId = parseInt(_this.shufflingId) + 1;
				} else if(_this.shufflingId == _this.shufflingData.length - 1) {
					_this.shufflingId = 0;
				}
			}, 5000)
		},
		methods: {
			bulletFun: function(index) {
				this.shufflingId = index;
			},
			showPreNext: function() {
				this.PreNext = true;
			},
			hiddenPreNext: function() {
				this.PreNext = false;
			},
			preFun: function() {
				var _this = this;
				if(_this.shufflingId > 0 && _this.shufflingId < _this.shufflingData.length) {
					_this.shufflingId = parseInt(_this.shufflingId) - 1;
				}
			},
			nextFun: function() {
				var _this = this;
				if(_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
					_this.shufflingId = parseInt(_this.shufflingId) + 1;
				}
			}
		},
		data() {
			return {
				shufflingData: [{
						title: '喵来个米',
						href: '1',
						url: 'static/banner_1.jpg',
						//						url: 'http://static.udz.com/uploads/2017/3/7/869995198182180.jpg',
					},
					{
						title: '豆豆',
						href: '2',
						url: 'static/banner_2.jpg',
						//						url: 'http://static.udz.com/uploads/2017/3/7/869995198182180.jpg',
					}, {
						title: '猫咪咪',
						href: '3',
						url: 'static/banner_3.jpg',
						//						url: 'http://static.udz.com/uploads/2017/3/7/869995198182180.jpg',
					}, {
						title: '猫咪咪',
						href: '3',
						url: 'static/banner_4.jpg',
						//						url: 'http://static.udz.com/uploads/2017/3/7/869995198182180.jpg',
					}
				],
				shufflingId: 0,
				PreNext: false,
			}
		},
		watch:{
			shufflingId: function(newId){
				this.$refs.imgMargin.style.marginLeft= -1920 * newId +"px";
			},
		},
	}
</script>

<style lang="less" stylesheet="less">
	.carousel {
		position: relative;
		overflow: hidden;
		height: 450px;
		max-width: 1920px;
		margin: 0 auto;
		.showimg {
			transition: all 0.5s linear;
			width: 19200px;
			margin-left: 0px;
			left: -0px;
			li {
				float: left;
				img {
					display: block;
					height: 450px;
					width: 1920px;
				}
			}
		}
		.bullet-nav {
			position: absolute;
			bottom: 0px;
			width: 100%;
			text-align: center;
			overflow: hidden;
			.bullet-box {
				display: inline-block;
				height: 20px;
				line-height: 20px;
				border-radius: 20px;
				background-color: rgba(0, 0, 0, 0.2);
				.bullet {
					display: inline-block;
					background: gray;
					width: 12px;
					height: 12px;
					border-radius: 6px;
					-webkit-border-radius: 6px;
					margin-right: 5px;
					margin: 5px;
					opacity: 0.5;
					transition: opacity 3s linear;
					&.active {
						background-color: white;
						opacity: 1;
						cursor: pointer;
					}
				}
			}
		}
	}
	
	.img-enter-active,
	.img-leave-active {
		transition: all 1s ease;
	}
	
	.img-enter {
		/*transform: translateX(1920px);*/
		/*opacity: 0;*/
	}
	
	.img-leave {
		transform: translateX(0px);
	}
	/*.preNext {
		display: block;
		width: 31px;
		height: 41px;
		position: absolute;
		top: 200px;
		cursor: pointer;
	}*/
	/*.pre {
		background: url('../assets/banner_1.jpg') no-repeat right center;
	}
	
	.next {
		background: url('../assets/banner_1.jpg') no-repeat left center;
		right: 0px;
	}*/
	
	* {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
</style>