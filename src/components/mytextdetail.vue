<template>
	<div id="mytextdetail">
		<Header></Header>
		<div id="over">
			<div id="root">
				<div id="train" v-for='(val, key, index) in myblog' class="animated">
					<el-card class="box-card" :id="val.id">
						<div slot="header">
							<span id="card_name">{{val.title}}</span>
							<div id="write_date">
								<i class="el-icon-edit"></i>
								<span>{{val.date}}</span>
							</div>
						</div>
						<div id="text_context">
							{{val.context}}
						</div>

						<div id="footer">
							<div id="footer_left" v-if="myblog[key-1]" @click="previous_(100)">
								<{{myblog[key-1].title}}</div>

									<div id="footer_right" v-if="myblog[key+1]" @click="next_(100)">{{myblog[key+1].title}}></div>
							</div>
					</el-card>
					</div>
				</div>
			</div>
			<Footer v-if='!isshow'></Footer>
		</div>
</template>

<script>
	import Footer from './footer'
	import Header from './header'
	import { mapGetters } from 'vuex'
	export default {
		computed: mapGetters([
			'isshow'
		]),
		mounted() {
			this.ispc = this.IsPC(); 
			var that = this;
			this.id_ = parseInt(this.$route.query.id);
			this.$store.dispatch('showLoading');
			this.$http.get('/api/other.html', {}).then(function(res) {
				that.myblog = res.data;
				that.resize();
				that.next_(that.id_);
				//对onresize进行优化
				window.onresize = function() {
					debounce(lazyload, window);
				};

				function debounce(method, context) {
					clearTimeout(method.timeout);
					method.timeout = setTimeout(function() {
						method.call(context);
					}, 100);
				}

				function lazyload() {
					that.resize();
				}
				//最简单的异步实现，等待元素的样式attach之后在进行取和重置
				setTimeout(function() {
					that.resize();
					var height = $("#" + that.id_).outerHeight();
					$("#root").css('height', height);
					that.$store.dispatch('hideLoading')
				}, 220)
			}).catch(function(err) {
				console.log(err);
			})
		},
		methods: {
		    IsPC() {
				var userAgentInfo = navigator.userAgent;
				var Agents = ["Android", "iPhone",
					"SymbianOS", "Windows Phone",
					"iPad", "iPod"
				];
				var flag = true;
				for(var v = 0; v < Agents.length; v++) {
					if(userAgentInfo.indexOf(Agents[v]) > 0) {
						flag = false;
						break;
					}
				}
				return flag;
			},
			//上一个
			previous_(id) {
				if(id == 100) {
					id = 1;
					console.log(this.id_);
					var newnumber = this.id_ - 1;
					this.id_ = newnumber;
					var height = $("#" + newnumber).outerHeight();
					$("#root").css('height', height);
				}
				var height = window.innerWidth;
				var left = height;
				var marginleft = parseInt($('#root').css('margin-left'));
				var new_ = marginleft + left;
				var new__ = new_ + 'px'

				$('#root').css('margin-left', new__);
				window.scrollTo(0, 0);
			},
			//下一个
			next_(id) {
				if(id == 100) {
					id = 1;
					console.log(this.id_);
					var newnumber = this.id_ + 1;
					this.id_ = newnumber;
					var height = $("#" + newnumber).outerHeight();
					$("#root").css('height', height);
				}
				if(id == 0) {
					id = 0;
				}
				var height = window.innerWidth;
				var left = height;
				var marginleft = parseInt($('#root').css('margin-left'));
				var new_ = marginleft - left * id;
				var new__ = new_ + 'px';
				$('#root').css('margin-left', new__);
				window.scrollTo(0, 0);
			},
			resize() {
				var that = this;
				var height = window.innerHeight;
				var width = parseInt(window.innerWidth);
				var root_width = width * (-this.id_) + 'px';
				if(this.ispc){
					var card_width = width * 0.7 + 'px';
					var card_left = width * 0.15 + 'px';
					var card_right = width * 0.15 + 'px';

					$("#mytextdetail .box-card").css('opacity', '0');
					setTimeout(function() {
						$("#mytextdetail .box-card").css('opacity', '1');
						var height = $("#" + that.id_).outerHeight(true);
						$("#root").css('height', height);
					}, 500)
				}else{
					var card_width = width * 0.9 + 'px';
					var card_left = width * 0.05 + 'px';
					var card_right = width * 0.05 + 'px';

					setTimeout(function() {
						var height = $("#" + that.id_).outerHeight(true);
						$("#root").css('height', height);
					}, 500)
				}
				
			
				
				$("#mytextdetail .box-card").css('width', card_width);
				$("#mytextdetail .box-card").css('margin-left', card_left);
				$("#mytextdetail .box-card").css('margin-right', card_right);
				$("#root").css('margin-left', root_width);

			}
		},
		components: {
			Header,
			Footer
		},
		data() {
			return {
				ispc:'',
				id_: '',
				isanimated: true,
				text_id: '',
				ifshow_left: true,
				ifshow_right: true,
				previous: '我的上一个',
				next: '我的下一个',
				detail_blog: {},
				myblog: []
			}
		}
	}
</script>

<style>
	#mytextdetail {
		overflow: hidden;
	}
	
	#mytextdetail #root {
		width: 600000px;
		transition: all 1s;
		overflow: hidden;
		display: flex;
		align-items: flex-start;
	}
	
	#mytextdetail #train {
		display: inline-block;
	}
	
	#mytextdetail #footer {
		border-top: 1px solid #eeeeee;
		margin-top: 20px;
	}
	
	#mytextdetail #footer_left {
		margin-top: 20px;
		float: left;
		cursor: pointer;
		color: cornflowerblue;
	}
	
	#mytextdetail #footer_right {
		float: right;
		margin-top: 20px;
		cursor: pointer;
		color: cornflowerblue;
	}
	
	#mytextdetail #text_context {
		white-space: pre-line;
	}
	
	#mytextdetail #write_date {
		opacity: 0.5;
	}
	
	#mytextdetail #card_name {
		display: block;
		padding-bottom: 20px;
	}
	
	#mytextdetail .el-card__header {
		text-align: center;
	}
	
	#mytextdetail .text {
		font-size: 14px;
	}
	
	#mytextdetail .item {
		margin-bottom: 18px;
	}
	
	#mytextdetail .box-card {
		margin: 20px auto;
		padding: 20px 0 20px 0;
		top: 20px;
	}
	
	#mytextdetail .animated {
		animation: test 1s infinite;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	
	@keyframes test {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>