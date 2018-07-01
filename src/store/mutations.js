const state = {
	isplay:false,
	isanimate:false,
	Loading_show:false
}

const mutations = {
	played(state){
		state.isplay = true;
	},
	showLoading(state){
		state.Loading_show = true;
	},
	hideLoading(state){
		state.Loading_show = false;
	}
}

const getters = {
	isplay(state){
		return state.isplay;
	},
	isanimate(state){
		return state.isanimate;
	},
	isshow(state){
		return state.Loading_show;
	}
}


export default{
	state,
	mutations,
	getters
}
