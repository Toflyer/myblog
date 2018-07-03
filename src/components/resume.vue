<template>
	<div id="resume">
		<Header></Header>
		<div id="main_">
			<h1>朱鹏钢</h1>
			<h1>目标岗位:web前端开发实习生</h1>
			<h2>联系方式：</h2>
			<ul>
				<li>手机:18846420815</li>
				<li>QQ:948588560</li>
				<li>微信:zpgg2016</li>
				<li>e-mail:948588560@qq.com</li>
			</ul>
			<h1>个人信息:</h1>
			<ul>
				<li>朱鹏钢/男/1997</li>
				<li>哈尔滨理工大学/软件学院/本科/(2015-2019)</li>
				<li>毕业时间为2019年6月份，大四期间学校允许实习，所以大四期间可以全年实习</li>
				<li>技术博客：https://blog.csdn.net/weixin_42158320</li>
				<li>Github:https://github.com/Toflyer</li>
			</ul>
			<h1>专业技能:</h1>
			<ul>
				<li>熟练掌握 HTML5，CSS3，Javascript 等技术</li>
				<li>熟悉页面的架构和布局，熟练进行语义化开发 </li>
				<li>常用 jquery 辅助原生 js 进行 DOM 操作，熟练使用正则表达式</li>
				<li>熟练使用ES6进行编程，并且对ES7有一定的了解</li>
				<li>熟悉 MySQL 关系型数据库，熟练运用 SQL 语句进行数据操作</li>
				<li>常用node.js，npm，yarn的工具部署开发环境</li>
				<li>熟悉HTTP协议，对前端调试，性能优化，web安全有一定的实践</li>
				<li>熟悉主流框架，可以利用媒体查询，Bootstrap，Element-UI等进行响应式开发</li>
				<li>可以运用 Ajax Axios 进行数据交互，并对字符串，数组，JSON 等常用的数据类型进行转换操作</li>
				<li>熟练掌握 Vue，对 React 有一定的了解，有多人协同开发的的经验，能够使用Github的Desktop进行团队开发</li>
				<li>了解前端工程化思想，能够使用 Webpack 对项目进行模块化打包</li>
				<li>对开源社区有一定的了解，并且能够主动学习，拥有开发热情</li>
			</ul>
			<h1>自我评价:</h1>
			<ul>
				<li>先做人，再做事</li>
				<li>性格开朗、为人诚恳、乐观向上、拥有较强的组织能力和适应能力、并具有较强的管理策划与组织管理协调能力。</li>
				<li>具有较强的适应力，能快速融入到新环境</li>
				<li>交流能力强，沟通无障碍。</li>
				<li>为人谦和</li>
			</ul>
			<h1>
				实习经验:
			</h1>
			<ul>
				<li>哈尔滨黑狐科技有限公司</li>
				<li>2017/6-2017/8</li>
				<li>作为小组组长，包括分配部分前端页面的开发工作，后期整合，简单的代码测验。</li>
				<li>配合后端人员进行数据交互。</li>
				<li>从用户角度出发对项目进行优化。</li>
			</ul>
			<h1>项目经验:</h1>
			<h1 class="project">独立建站:http://120.79.32.191(域名审核中:www.zhupenggang.com)</h1>
			<ul>
				<li>使用HTML5 , CSS3 , Vue , JavaScipt , Node , Element UI 开发</li>
				<li>功能实现：个人博客的展示,用户评论，交互轮播图，自适应布局，在线翻译器，定位等。</li>
				<li>以HTML+CSS为基础，以Vue+Element-UI为主要框架，Node搭建后台，前台使用Vue 的脚手架搭 建，框架相比使用广泛的Bootstrap，选择了更为亲和Vue 的Element-UI，界面兼容移动端和PC端， 通过设置proxyTable 实现代理跨域，调用node预留接口，配合服务端MySQL实现数据的存入取出， 以及通过Ajax 跨域调用外部接口实现翻译，定位功能(在此感谢百度大大提供的API接口)</li>
			</ul>
			<h1 class="project">哈尔滨理工大学的学院评分系统</h1>
			<ul>
				<li>使用Vue.js实现前端框架搭建，Node部署服务器端请求处理，实现前后端分离</li>
				<li>功能实现：教师，学生信息上传，教师学生分组，学生打分，数据导出，学院分配，分数上限设定</li>
				<li>项目通过Github 管理工具多人协作开发，借用Vue-router实现SPA、借用Vuex保存老师的部分打分信 息来优化用户体验，前台跨域清求服务器资源，后端通过Express 框架搭建Node 服务，并解POST ， GET 或者OPTIONS 方式的请求，以及使用Muliter,body-parser 等中间件解析数据，配合使用MySQL 数据库进行数据交互，实现前端功能
				</li>
				<li>个人在项目中为前端开发者</li>
			</ul>
			<h1>致谢:</h1>
			<ul>
				<li>感谢您在百忙之中抽出时间阅读我的简历，期待有与您一起共事的机会。</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from './Footer'
	import Header from './Header'
	export default {
		mounted() {},
		components: {
			Header,
			Footer
		}
	}
</script>

<style>
	#resume .project {
		margin-left: 20px;
	}
	
	#resume #main_ {
		padding: 0 15% 20px 15%;
		animation: resume_animate 1s;
	}
	
	#resume h1 {
		font-size: 20px!important;
		margin-top: 20px;
		margin-bottom: 20px;
		font-weight: 500;
		opacity: 0.5;
		font-weight: bolder;
	}
	
	#resume h2 {
		font-size: 18px;
		margin-top: 20px;
		margin-bottom: 20px;
		font-weight: 500;
		opacity: 0.6;
	}
	
	#resume ul {
		margin-left: 30px;
		list-style-type: circle;
		font-size: 16px;
		opacity: 0.6;
	}
	
	#resume ul li {
		padding: 5px 0 5px 0;
	}
	
	@keyframes resume_animate {
		0% {
			opacity: 0;
			-webkit-transform: translateY(-2000px);
			-ms-transform: translateY(-2000px);
			transform: translateY(-2000px)
		}
		60% {
			opacity: 1;
			-webkit-transform: translateY(30px);
			-ms-transform: translateY(30px);
			transform: translateY(30px)
		}
		80% {
			-webkit-transform: translateY(-10px);
			-ms-transform: translateY(-10px);
			transform: translateY(-10px)
		}
		100% {
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0)
		}
	}
	
	@media screen and (max-width: 768px) {
		#resume #main_ {
			padding: 0 5% 20px 5%;
			animation: resume_animate 1s;
		}
	}
</style>