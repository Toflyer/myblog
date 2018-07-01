export default{
	played:({commit})=>{
		commit('played');
	},
	showLoading:({commit})=>{
		commit('showLoading');
	},
	hideLoading:({commit})=>{
		commit('hideLoading')
	},
	showFooter:({commit})=>{
		commit('showFooter')
	},
	hideFooter:({commit})=>{
		commit('hideFooter')
	}
	
}
