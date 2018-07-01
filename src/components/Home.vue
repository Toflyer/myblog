<template>
	<div id="Home">
	<Header></Header>
	<Sowingmap></Sowingmap>
	<Mytext></Mytext>
	<Footer v-if="!isshow"></Footer>
	</div>
</template>

<script>
	import Header from './header'
	import Sowingmap from './Sowingmap'
	import Mytext from './Mytext'
	import Footer from './footer'
	import { mapGetters } from 'vuex'
	export default{
		components:{
			Header,Sowingmap,Mytext,Footer
		},
		computed:mapGetters([
			'isshow'
		]),
		mounted(){

		}
	}
</script>

<style>
#Home{
	overflow: hidden
}
</style>