<template>
	<div id="header">
		<el-row :gutter='1' class="bg-purple-dark">
			<el-col :span='4' :xs="{span:4}">
				<router-link to="/" class="Blog">Blog</router-link>
			</el-col>

			<el-col :sm="{span:2,offset:10}" :xs="{span:3,offset:1}">
				<router-link to="/Home" id="Home_anim" class='allanimation' exact>首页</router-link>
			</el-col>

			<el-col :sm="{span:2,}" :xs="{span:3,offset:1}">
				<router-link to="/translate" id='translate_anim' class='allanimation'>翻译</router-link>
			</el-col>

			<el-col :sm="{span:2,}" :xs="{span:3,offset:1}">
				<router-link to="/getposition" id='position_anim' class='allanimation'>定位</router-link>
			</el-col>

			<el-col :sm="{span:2,}" :xs="{span:3,offset:1}">
				<router-link to="/resume" id='resume_anim' class='allanimation'>简历</router-link>
			</el-col>

			<el-col :sm="{span:2,}" :xs="{span:3,offset:1}">
			<router-link to="/leavemessage" id='leave_anim' class='allanimation'>留言</router-link>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		computed :mapGetters([
			'isplay'
		]),
		mounted() {
			if(this.isplay == true){
				//取消动画
				$('.allanimation').each(function(){
					$(this).css('animation-name','null');
					$(this).css('animation-duration','0s');
				})
			}else{
				//正常播放
				this.$store.dispatch('played');
			}
		}
	}
</script>
<style>
	#header .Blog {
		text-decoration: none !important;
	}
	
	#header a {
		text-decoration: none;
	}
	
	#header .bg-purple-dark {
		background: white;
		padding: 20px 10px 20px 10px;
	}
	#header .allanimation {
		animation: homepage 2s;
	}
	@keyframes homepage{
		from{
			margin-left: -30px;
			opacity: 0;
		}
		to{
			margin-left: 0px;
			opacity: 1;
		}
	}
</style>