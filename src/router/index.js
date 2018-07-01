import Vue from 'vue'
import Router from 'vue-router'


/*
import header from '@/components/header'
import Home from '@/components/Home'
import translate from '@/components/translate'
import getPosition from '@/components/Getposition'
import leavemessage from '@/components/Leavemessage'
import mytextdetail from '@/components/mytextdetail'
import resume from '@/components/resume'

*/
/*var header = r => require.ensure([], () => r(require('@/components/header')), "header");
var Home = r => require.ensure([], () => r(require('@/components/Home')), "Home");
var translate = r => require.ensure([], () => r(require('@/components/translate')), "translate");
var getPosition = r => require.ensure([], () => r(require('@/components/getPosition')), "getPosition");
var leavemessage = r => require.ensure([], () => r(require('@/components/leavemessage')), "leavemessage");
var mytextdetail = r => require.ensure([], () => r(require('@/components/mytextdetail')), "mytextdetail");
var resume = r => require.ensure([], () => r(require('@/components/resume')), "resume");

*/
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
			component: resolve=>require(['@/components/translate'],resolve)
		},
		{
			path: '/getposition',
			component: resolve=>require(['@/components/Getposition'],resolve)
		}, {
			path: '/leavemessage',
			component: resolve=>require(['@/components/Leavemessage'],resolve)
		}, {
			path: '/mytextdetail',
			component: resolve=>require(['@/components/mytextdetail'],resolve)
		}, 
		{
			path: '/resume',
			component: resolve=>require(['@/components/resume'],resolve)
		}
	]
})