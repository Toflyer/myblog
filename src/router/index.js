import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		// return 期望滚动到哪个的位置
		return {x:0,y:0}
	},
	routes: [{
		path:'*',
		redirect:'/Home'
		}, {
			path: '/Home',
			component: resolve=>require(['@/components/Home'],resolve)
		}, {
			path: '/translate',
			component: resolve=>require(['@/components/Translate'],resolve)
		},
		{
			path: '/getposition',
			component: resolve=>require(['@/components/Getposition'],resolve)
		}, {
			path: '/leavemessage',
			component: resolve=>require(['@/components/Leavemessage'],resolve)
		}, {
			path: '/mytextdetail',
			component: resolve=>require(['@/components/Mytextdetail'],resolve)
		}, 
		{
			path: '/resume',
			component: resolve=>require(['@/components/Resume'],resolve)
		}
	]
})