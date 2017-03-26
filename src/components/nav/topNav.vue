<template>
	<div id="nav">
		<div class="nav_con">
			<div class="nav_con">
				<div class="left">
					<p id="login_811" class="small-signin">
						{{nav1}}
						<a id="text-danger" href="#" rel="nofollow">{{nav2}}</a>
						<a id="text-danger" href="#" rel="nofollow">{{nav3}}</a>
					</p>
				</div>
				<div class="right">
					<ul id="nav">
						<li>
							<a id="text-danger" href="#" rel="nofollow">{{nav4}}</a>
						</li>
						<li>
							<a id="text-danger" href="#" rel="nofollow">
								<i class="icon_7"></i>
								{{nav5}}
							</a>
						</li>
						<li>
							<a id="text-danger" href="#" rel="nofollow">								
								<i class="icon_6"></i>
								{{nav6}}
							</a>
						</li>
						<li>
							<a id="text-danger" href="#">{{nav7}}</a>
						</li>
					</ul>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav1: '欢迎来到美兑壹购物商城！请 ',
				nav2: '登录',
				nav3: '免费注册',
				nav4: '我的美兑壹购物',
				nav5: ' 购物车',
				nav6: ' 我的收藏',
				nav7: '帮助中心',
			}
		}
	}
</script>

<style type="text/css">
	ul,
	ol {
		list-style: none;
	}
	
	.small-signin{
		/*font-size: 0px;*/
	}
	
	a {
		color: #a3a3a3;
		text-decoration: none;
		outline: none;
		display: inline-block;
	}
	
	ul li {
		vertical-align: top;
	}
	
	.nav {
		background: #f5f5f5;
		border-bottom: 1px solid #dddddd;
		height: 30px;
	}
	
	.nav_con {
		max-width: 1200px;
		margin: auto;
		color: #a2a2a2;
	}
	
	
	.nav_con .left {
		/*float: left;*/
		line-height: 30px;
		font-size: 12px;
	}
	
	.nav_con .left p{
		float: left;
	}
	
	.nav_con .left p a {
		color: #a2a2a2;
	}
	
	.nav_con .left p a {
		color: #a2a2a2;
	}
	
	.nav_con .right {
		float: right;
		margin-right: 122px;
	}
	
	.nav_con .right ul li {
		float: left;
		margin-left: 22px;
	}
	
	#nav a {
		/*float: left;*/
		text-decoration: none;
		padding: 8px 5px;
	}
	
	.nav_con .right ul li a {
		display: block;
		font-size: 12px;
		color: #a2a2a2;
	}
	
	.nav_con .right ul li {
		float: left;
		margin-left: 22px;
	}
	
	.nav_con .right ul li a {
		display: block;
		font-size: 12px;
		color: #a2a2a2;
	}
	
	#nav li i.icon_7 {
		background: url(http://www.meiduimall.com/themes/newfirst/images/images/icon_cart7.png);
	}
	
	#nav li i {
		display: inline-block;
		width: 20px;
		height: 17px;
		vertical-align: top;
		margin-right: 3px;
		margin-top: -1px;
	}
	
	#nav li i.icon_6 {
		background: url(http://www.meiduimall.com/themes/newfirst/images/images/icon_fa6.png) no-repeat;
	}
	
	#text-danger:hover{
		color: red;
	}
</style>