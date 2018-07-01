<template>
	<div id="position">
		<Header></Header>
		<div id="container">
		</div>
		<div id="black_bgc" v-show='isshow'>
		</div>
		<div id='p' v-show='isshow'>
			定位中请稍后...(手机用户定位信息会不准确！)
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	import Header from './header'
	import BMap from 'BMap'
	import Footer from './footer'
	export default {
		computed:mapGetters([
			'isshow'
		]),
		mounted() {
			this.$store.dispatch('showLoading');
			$("#contain").css('background-color','red');
			var this_ = this;
			var map = new BMap.Map("container");
			// 创建地图实例  
			var point = new BMap.Point(116.404, 39.915);
			// 创建点坐标  
			map.centerAndZoom(point, 1000);
			// 初始化地图，设置中心点坐标和地图级别
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r) {
				if(this.getStatus() == BMAP_STATUS_SUCCESS) {
					var mk = new BMap.Marker(r.point);
					map.addOverlay(mk);
					map.panTo(r.point);
					alert('您的位置：' + r.address.province + ',' + r.address.city);
					this_.loading = false;
					this_.$store.dispatch('hideLoading');
				} else {
					alert('failed' + this.getStatus());
				}
			});
		},
		components: {
			Header,
			Footer
		},
		data() {
			return {
				loading: true
			}
		}

	}
</script>

<style>
	#black_bgc{
		top:60px;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 99999;
		background: #101c41;
		opacity: 0.5;
	}
	#position #p {
		position: fixed;
		left: 48%;
		top: 50%;
		margin-left:-139px; /* width的一半的相反数 */
		margin-top:50px; 
		z-index: 99999;
	}
	
	#position #container {
		height: 800px;
	}
</style>