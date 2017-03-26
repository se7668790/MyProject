<template>
	<div class="index_nav">
		<div class="index_nav_con">
			<div id="category" class="category">
				<h2>
					<a href="#">商品分类</a>
				</h2>
				<div id="category_box" class="cate-list">
					<ul id="J_category" class="category-primary">
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
						<pop-category></pop-category>
					</ul>

				</div>

			</div>
			<div class="site_nav">
				<ul class="bar_ul">
					<li v-for="singleLi in listLi" @click="transferTo(singleLi)" @mouseover="selected(singleLi)" @mouseleave="disappear(singleLi)" :class="{active: activeName == singleLi.desc}">
						<a :href="singleLi.uurl">{{singleLi.desc}}</a>
					</li>
					<i class="nav-icon-hot"></i>
					<div class="nav-popup-box">
						<div class="nav-pop-content">
							<span class="nav-popup-close" @click="popupClose()">X</span>
							<img src="http://img01.1gw.com/715149b5d77c2775fd9774921d1d31a086204dff.png" alt="敬请期待" />
						</div>
					</div>
					<!--<li>
						<a href="#" target="_blank">首页</a>
					</li>
					<li>
						<i class="nav-icon-hot"></i>
						<a href="#" target="_blank">特税专区</a>
					</li>
					<li>
						<a href="#" target="_blank">美妆馆</a>
					</li>
					<li>
						<a href="#" target="_blank">特色坊</a>
					</li>
					<li>
						<a href="#" target="_blank">品牌汇</a>
					</li>
					<li>
						<a href="#" target="_blank">海外精品</a>
					</li>
					<li>
						<a href="#" target="_blank">数码街</a>
					</li>
					<li>
						<a class="btn-nav-popup" href="#" target="_blank">走秀专区</a>
						<div class="nav-popup-box">
							<div class="nav-pop-content">
								<span class="nav-popup-close">X</span>
								<img src="http://img01.1gw.com/715149b5d77c2775fd9774921d1d31a086204dff.png" alt="敬请期待" />
							</div>
						</div>
					</li>-->
				</ul>
			</div>
			<div class="xfc_price3">

			</div>
		</div>
	</div>
</template>

<script>
	//导入商品分类vue
	import popCategory from './popCategory.vue'
	//导出
	export default {
		data() {
			return {
//				
//					lists:[{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					},{
//						lista:['食品1','、保健1'],
//						listb:[{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						},{
//							listaa:'休闲食品1',
//							listbb:[{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							},{
//								listaaa:['休闲零食2','休闲零食2','休闲零食2','休闲零食2']
//							}]
//						}]
//					}],

					listLi: [{
						'uurl': '#/home',
						'desc': '首页'
					}, {
						'uurl': '#/bigsale',
						'desc': '特税专区'
					}, {
						'uurl': '#/home',
						'desc': '美妆馆'
					}, {
						'uurl': '#/bigsale',
						'desc': '特色坊'
					}, {
						'uurl': '#/home',
						'desc': '品牌汇'
					}, {
						'uurl': '#/bigsale',
						'desc': '海外精品'
					}, {
						'uurl': '#/home',
						'desc': '数码街'
					}, {
						'uurl': '#',
						'desc': '走秀专区'
					}],
					activeName: '首页'
				}
			},
			components: {
				'pop-category': popCategory
			},
			methods: {
				selected: function(singleLi) {
					this.activeName = singleLi.desc
				},
				disappear: function(singleLi){
					this.activeName = ''
				},
				transferTo: function(singleLi, e) {
					//					e.preventDefault();
					if (singleLi.desc == '走秀专区') {
						$('.nav-popup-box').css('display', 'block')
					}

				},
				popupClose: function() {
					$('.nav-popup-box').css('display', 'none')
				}
			}
	}
</script>

<style type="text/css">
	.index_nav {
		height: 30px;
		background: #122A45;
	}
	
	a {
		color: #A3A3A3;
		text-decoration: none;
		outline: none;
		display: inline-block;
	}
	
	#category .cate-list {
		z-index: 998;
		height: 451px;
	}
	
	.cate-list {
		float: left;
		line-height: 22px;
		padding: 0px;
		width: 215px;
		position: absolute;
		background: url(http://www.meiduimall.com/themes/newfirst/images/home/css/images/cat_bg.png) no-repeat 0 0;
	}
	
	address,
	em,
	i {
		font-style: normal;
	}
	
	ul,
	ol {
		list-style: none;
	}
	
	.index_nav_con {
		width: 1200px;
		margin: auto;
		position: relative;
	}
	
	.category {
		float: left;
		width: 215px;
		background-color: #122A45;
	}
	
	.category h2 {
		padding: 0px;
		height: 30px;
	}
	
	.category h2 a,
	.category h2 a:hover {
		background: transparent url(http://www.meiduimall.com/themes/newfirst/images/images/icon_main4.png) no-repeat left center;
		color: #FEDB6A;
		text-align: left;
		text-decoration: none;
		float: left;
		width: 175px;
		padding-left: 40px;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		font-weight: bold;
	}
	
	.cate-list {
		line-height: 22px;
	}
	
	.site_nav {
		height: 30px;
		background: #122a45;
	}
	
	.site_nav ul li {
		position: relative;
	}
	
	.site_nav ul li {
		float: left;
	}
	
	.site_nav ul .active {
		background-color: #FEDB6A;
	}
	
	.site_nav ul .active a {
		color: black;
	}
	
	ul li {
		vertical-align: top;
	}
	
	.site_nav ul li a {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		padding: 0 20px;
		font-size: 14px;
		color: #fedb6a;
	}
	
	.nav-icon-hot {
		position: absolute;
		left: 350px;
		top: -15px;
		display: inline-block;
		width: 24px;
		height: 24px;
		background: url(http://www.meiduimall.com/themes/newfirst/images/images/icon-nav-hot.png) no-repeat center center;
	}
	
	.nav-popup-box {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999999999999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
	}
	
	.nav-popup-content {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 800px;
		height: 600px;
		margin-left: -400px;
		margin-top: -300px;
	}
	
	.nav-popup-close {
		position: absolute;
		top: 20px;
		right: 30px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 20px;
		background: #ff0000;
		color: #fff;
		border-radius: 50%;
		cursor: pointer;
	}
	
	.xfc_price3 {
		position: absolute;
		right: 0;
		top: 0;
		font-size: 14px;
		line-height: 38px;
		background-color: #d7000f;
		text-align: center;
		width: 215px;
		color: #ffffff;
	}
</style>