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
		mounted() {
			this.setSize();
			const that = this;
			window.addEventListener('resize', function() {
				that.screenWidth = $(window).width();
				that.setSize();
			});
		},
		methods:{
			setSize() {
				console.log(this.screenWidth);
				console.log(this.bannerHeight);
				this.bannerHeight = 740 / 2560 * this.screenWidth
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