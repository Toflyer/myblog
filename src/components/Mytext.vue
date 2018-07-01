<template>
	<div id="text">
		<div v-for="o in myblog" id='text_'>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<!--<router-link :to='{path:"/mytextdetail",query:{id:o.id}}'>-->
					<router-link :to='{path:"/mytextdetail",query:{id:o.id}}'>
						<span :id_card='o.id'>{{o.title}}</span>
					</router-link>
				</div>
				<div class="text item">
					<i class="el-icon-edit"></i>
					<span>{{o.date}}</span>

				</div>
				<div class="text item" id="mycontext">
					{{o.context}}
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			//http清求后台数据
			var mycontext = document.getElementById('mycontext');
			for(var i = 0; i < this.myblog.length; i++) {
				this.myblog[i].context = this.myblog[i].context.slice(0, 200) + '...';
			}
			this.$store.dispatch('showLoading');
			//清求文章数据
			var this_ = this;
			this.$http.get('/api/other.html', {

			}).then(function(res) {
				this_.myblog = res.data;
				for(var i = 0; i < this_.myblog.length; i++) {
					this_.myblog[i].context = this_.myblog[i].context.slice(0, 200) + '...'
				}
				
				this_.$store.dispatch('hideLoading');
				
			}).catch(function(err) {
				console.log(err);
			})
			//处理文章的内容

		},
		methods: {
		},
		data() {
			return {
				mytext: 2,
				myblog: []
			}
		}
	}
</script>

<style>
	#text .text {
		font-size: 14px;
	}
	
	#text .item {
		margin-bottom: 18px;
	}
	
	#text #text_ .box-card {
		width: 70%;
		margin: 0 auto;
		margin-top: 20px;
	}
	
	@media screen and (max-width: 768px) {
		#text #text_ .box-card {
			width: 90%;
			margin: 0 auto;
			margin-top: 20px;
		}
	}
</style>