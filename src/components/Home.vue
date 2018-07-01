<template>
	<div id="Home">
	<Header></Header>
	<Sowingmap></Sowingmap>
	<Mytext></Mytext>
	<Footer v-if="!isshow"></Footer>
	</div>
</template>

<script>
	import Header from './Header'
	import Sowingmap from './Sowingmap'
	import Mytext from './Mytext'
	import Footer from './Footer'
	import { mapGetters } from 'vuex'
	export default{
		components:{
			Header,Sowingmap,Mytext,Footer
		},
		computed:mapGetters([
			'isshow'
		])
	}
</script>

<style>
#Home{
	overflow: hidden
}
</style>