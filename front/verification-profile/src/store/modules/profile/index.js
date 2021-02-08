import { get_request, post_request } from '@/api'

export default {
	namespaced: true,
	state: {
		profile: null,
		isFetching: true,
		isEnlarge: false,
		isEmptyProfiles: false
	},
	getters: {
		GET_PARAMETER_PROFILE: state => param => state.profile[param],
		GET_CURR_PROFILE: state => state.profile,
		GET_CLASS_ENLARGE: state => {
			return state.isEnlarge
				? 'comparison-container--enlarge' : '';
		},
		IS_FETCHING: state => !state.isFetching,
		IS_ENLARGE: state => state.isEnlarge,
		IS_EMPTY_PROFILES: state => state.isEmptyProfiles,
	},
	mutations: {
		SET_PROFILE(state, profile) {
			state.profile = Object.assign({}, state.profile, profile);
		},
		SET_FETCHING: state => state.isFetching = false,
		SET_EMPTY_PROFILES: state => state.isEmptyProfiles = true,
		SET_TOGGLE_ENLARGE_PHOTOS: state => state.isEnlarge = !state.isEnlarge,
	},
	actions: {
		async FETCH_PROFILE({ commit }) {
			try {
				const { data: { data } } = await get_request();
				if (!data[0]) throw new Error('profiles are over'); 

				commit('SET_PROFILE', data[0]);
				commit('SET_FETCHING');
			} catch (error) {
				commit('SET_EMPTY_PROFILES');
				console.error("FETCH_PROFILE_ERROR:", error);
			}
		},
		async GENERAL_REQUEST({ dispatch, getters }, method) {
			try {
				const { photo_id, user: { user_id } } = getters.GET_CURR_PROFILE;
				const { status } = await post_request(method, { photo_id, user_id });
	
				if (status === 200) {
					dispatch('FETCH_PROFILE');
				}
			} catch (error) {
				console.error("GENERAL_REQUEST_ERROR", error);
			}
		},
		TOGGLE_ENLARGE_PHOTOS: ({ commit }) => commit('SET_TOGGLE_ENLARGE_PHOTOS')
	}
}
