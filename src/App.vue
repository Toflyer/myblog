<template>
	<div id="app">
		<Loading class='loading' v-show='isshow'></Loading>
		<router-view/>
	</div>
</template>

<script>
	import Loading from './components/Quote_loading'
	import {mapGetters} from 'vuex'
	export default {
		name: 'App',
		components: {
			Loading
		},
		computed:mapGetters([
			'isshow'
		])
	}
</script>

<style>
	#app .loading {
			position: fixed;
			left: 50%;
			top:50%;
			margin-left:-30px; /* width的一半的相反数 */
			margin-top:-30px;  /* height的一半的相反数 */
			z-index: 99999;
	}
</style>