<template>
	<div id="roo_">
		<Header></Header>
		<div id="leavemessage">
			<p id="Leave">Leaving a message！</p>

			<el-input id="my_input" placeholder="请输入内容" type="textarea"></el-input>

			<div id="leaver_info">
				<el-input class='leaver_info_input_left' id='Leave_name' placeholder="请输入你的昵称"></el-input>
				<el-input class='leaver_info_input_right' placeholder="请输入你的邮箱(不公开)"></el-input>
			</div>
			<div id="submit">
				<el-button type="success" @click='upmessage'>确认回复</el-button>
			</div>

			<div id='user_block' v-for="o in user_leavemessage">
				<el-card class="box-card" shadow='hover'>
					<div slot="header" class="clearfix">
						<span>{{o.name}}</span>
						<i class="el-icon-date"></i>
						<span id="date">{{o.date}}</span>
					</div>
					<div class="text item">
						{{o.context}}
					</div>
				</el-card>

			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from './footer'
	import Header from './header'
	export default {
		mounted() {
			var this_ = this;
			this.$store.dispatch('showLoading');
			this.$http.post('/api/getLeaveing').then(function(res) {
				console.log(res.data);
				this_.user_leavemessage = res.data.reverse();
				this_.$store.dispatch('hideLoading');
			}).catch(function(err) {
				console.log(err);
			})
		},
		methods: {
			expand_date() {
				Object.assign(Date.prototype, {
					switch(time) {
						let date = {
							"yy": this.getFullYear(),
							// 这里月份的key采用大写，为了区别分钟的key  
							"MM": this.getMonth() + 1,
							"dd": this.getDate(),
							"hh": this.getHours(),
							"mm": this.getMinutes(),
							"ss": this.getSeconds()
						};
						//输出年 y+:匹配1个到多个y,i:忽略大小写  
						if(/(y+)/i.test(time)) {
							time = time.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
						}
						//输出月、日、时、分、秒  
						Object.keys(date).forEach(function(i) {
							//  "(" + i + ")"的结果是字符串"(i+)",  
							// 只有写成"(" + i + ")"形式，才能在正则表达式中捕获子匹配，进而才能用到RegExp.$1的值  
							if(new RegExp("(" + i + ")").test(time)) {
								// 判断，如果时间为一位数，则在前面加'0'   
								// ps：这里有一个小知识点：number类型+string类型 = string类型  
								if(RegExp.$1.length == 2) {
									date[i] < 10 ? date[i] = '0' + date[i] : date[i];
								}
								//替换初始化函数时候传入yyyy-mm-dd hh:mm:ss(这里可以打印出time、RegExp.$1、date[k])  
								time = time.replace(RegExp.$1, date[i]);
							}
						})
						return time;
					}
				})
			},
			upmessage() {
				this.$store.dispatch('showLoading');
				this.expand_date();
				var my_input = document.getElementById('my_input').value;
				var Leave_name = document.getElementById('Leave_name').value;
				var date_ = new Date().switch('yyyy-MM-dd hh:mm:ss');
				var obj = {};
				obj.name = Leave_name;
				obj.date = date_;
				obj.context = my_input;
				var this_ = this;
				this.$http.post('/api/upLeaveing', obj).then(function(res) {
					console.log(res.data);
					this_.user_leavemessage = res.data.reverse();
					this_.$store.dispatch('hideLoading');

				}).catch(function(err) {
					console.log(err);
				})
				alert('留言成功');
			}
		},
		data() {
			return {
				user_leavemessage: [

				]
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>

<style>
	#roo_ #date {
		font-size: 5px;
		opacity: 0.5;
	}
	
	#roo_ #my_input {
		font-size: 20px;
		height: 300px;
	}
	
	#roo_ #user_block {
		margin-top: 20px;
	}
	
	#roo_ #user_block .box-card {
		width: 100%!important;
		margin-bottom: 20px;
	}
	
	#submit {
		margin-top: 20px;
		padding-left: 85%;
	}
	
	#roo_ .leaver_info_input_left {
		margin-right: 18%;
	}
	
	#roo_ #leaver_info .el-input {
		margin-top: 20px;
		display: inline-block;
		width: 40%;
	}
	/*.el-input {
		margin-top: 20px;
		display: inline-block;
		width: 40%;
	}*/
	
	#Leave {
		font-size: 30px;
		margin-bottom: 20px;
		padding-left: 10px;
	}
	
	#roo_ #root {
		overflow-x: hidden;
	}
	
	#roo_ #leavemessage {
		padding: 30px 15% 0 15%;
		animation: leave_animate 1s;
	}
	
	@media screen and (max-width: 768px) {
		#Leave {
		font-size: 20px;
		margin-bottom: 20px;
		padding-left: 10px;
		}
		
		#roo_ #leavemessage {
			padding: 30px 5% 0 5%;
			animation: leave_animate 1s;
		}
		#roo_ .leaver_info_input_left {
			margin-right: 5%;
		}
		#roo_ #leaver_info .el-input {
			margin-top: 20px;
			display: inline-block;
			width: 46%;
		}
		#submit {
			margin-top: 20px;
			padding-left: 35%;
		}
		#Leave {
			font-size: 20px;
			margin-bottom: 20px;
			padding-left: 10px;
		}
	}
	
	@keyframes leave_animate {
		from {
			opacity: 0;
			-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
			transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
			-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
			animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}
		60% {
			opacity: 1;
			-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
			transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
			-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
			animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
		}
	}
</style>