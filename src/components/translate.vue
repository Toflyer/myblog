<template>
	<div id="translate">
		<Header></Header>
		<div id="animate_">
		<center>
			<div id="translate_header">
				<h1>在线翻译</h1>
				<h6>感谢百度大大提供的翻译API</h6>
			</div>
		</center>
		<el-row>
			<el-col :xs="{span:8,offset:1}" :sm="{span:8,offset:2}" :md="{span:8,offset:2}" :lg="{span:8,offset:2}" :xl="{span:8,offset:2}">
				<el-input placeholder="请输入内容" id="q"></el-input>
			</el-col>
			<el-col :xs="{span:8,offset:1}" :sm="{span:8,offset:2}" :md="{span:8,offset:2}" :lg="{span:8,offset:2}" :xl="{span:8,offset:2}">
				<el-select v-model="value" placeholder="请选择" id="lang">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-col>
			<el-col :xs="{span:2,offset:1}" :sm="{span:2}" :md="{span:2}" :lg="{span:2}" :xl="{span:2}">
				<el-button type="primary" round @click='submit'>翻译</el-button>
			</el-col>
		</el-row>
		<div id="translation">
		</div>
		</div>
	</div>

</template>

<script>
	import Footer from './Footer'
	import Header from './Header'
	import $ from 'jquery'
	export default {
		data() {
			return {
				appid: '20180614000176527',
				pass: 'Jfyp85s4KI6ULcfUtfL4',
				'to': '',
				salt: '123123',
				options: [{
					value: '选项1',
					label: '中文'
				}, {
					value: '选项2',
					label: '日文'
				}, {
					value: '选项3',
					label: '英文'
				}, {
					value: '选项4',
					label: '文言文'
				}, {
					value: '选项5',
					label: '德语'
				}],
				value: ''
			}
		},
		methods: {
			submit() {
				var transition_place = document.getElementById('translation');
				var my_q = document.getElementById('q');
				var q = my_q.value;
				var lang_ = document.getElementById('lang');
				var to = '';
				if(lang_.value == '中文') {
					to = 'zh';
				} else if(lang_.value == '日文') {
					to = 'jp';
				} else if(lang_.value == '英文') {
					to = 'en';
				} else if(lang_.value == '文言文') {
					to = 'wyw';
				} else {
					to = 'de'
				}
				var sing = this.appid + q + '123' + this.pass;
				var sign = this.$md5(sing);
				console.log(q);
				$.ajax({
					type: "POST",
					url: "http://api.fanyi.baidu.com/api/trans/vip/translate",
					data: {
						'q': q,
						'from': 'auto',
						'to': to,
						'appid': '20180614000176527',
						'salt': '123',
						'sign': sign
					},
					dataType: "jsonp",
					success: function(data) {
						console.log(data);
						var result = data.trans_result[0].dst;
						transition_place.innerHTML = result;
					}
				});
			}
		},
		components: {
			Header,
		}
	}
</script>

<style>
	#translate #translate_header {
		margin-bottom: 20px;
	}
	
	#translate 	#translate_header h1 {
		font-size: 60px;
		font-family: "agency fb";
		font-family: "宋体";
	}
	
	#translate  #translate_header h6 {
		opacity: 0.4;
	}
	
	#translate #translation {
		margin-top: 40px;
		margin-left: 30%;
		width: 40%;
		text-align: center;
	}
	#translate #animate_{
		animation: translate_animate 1s;
	}
	@keyframes translate_animate {
		0% {
			opacity: 0;
			-webkit-transform: translateX(-2000px);
			-ms-transform: translateX(-2000px);
			transform: translateX(-2000px)
		}
		100% {
			opacity: 1;
			-webkit-transform: translateX(0);
			-ms-transform: translateX(0);
			transform: translateX(0)
		}
	}
</style>