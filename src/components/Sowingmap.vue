<template>
	<div id='___test'>
		<el-carousel indicator-position="outside" :height="bannerHeight + 'px'">
			<el-carousel-item>
				<img  id="img" src="../assets/img1.jpg" class="bannerImg" />
			</el-carousel-item>
			<el-carousel-item>
				<img src="../assets/img2.jpg"  class="bannerImg" />
			</el-carousel-item>
			<el-carousel-item>
				<img src="../assets/img3.jpg" class="bannerImg" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		//改动Element-UI的走马灯，使之成为一个自适应的走马灯
		mounted() {
			this.screenWidth = $(window).width();
			this.bannerHeight = 1500 / 2560 * this.screenWidth
			this.setSize();
			const that = this;
			window.addEventListener('resize', function() {
				that.screenWidth = $(window).width();
				that.setSize();
			});
		},
		methods:{
			setSize() {
				if(this.screenWidth>900){
				this.bannerHeight = 1000 / 2560 * this.screenWidth
				}else{
					this.bannerHeight = 1800 / 2560 * this.screenWidth
				}
			}
		},
		data(){
			return {
				screenWidth:1000,
				bannerHeight:500
			}
		}
	}
</script>

<style>
    #___test .bannerImg {
		width: 100%;
		height: auto;
	}
</style>