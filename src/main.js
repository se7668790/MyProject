import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import BigSale from './components/BigSaleV/BigSale.vue'
import freeRegister from './components/freeRegister/freeRegister.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/home',
	component: App
},{
	path: '/bigsale',
	component: BigSale
},{
	path: '/freereg',
	component: freeRegister
},{
	path:'/',
	redirect:'/home'
}]

const router = new VueRouter({
	routes,
})

var ap = new Vue({
	el: '#app',
	router,
})

