import Vue from 'vue'
import Vuex from 'vuex'
import axiosHelper from './axiosHelper'
import apiConfig from '@/api-config'
import utils from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		categories: [],
		postsList: [],
		totalPages: null,
		postDetail: {},
		isLoading: 0
	},
	getters: {
		getCategories: state => state.categories,
		getPostsList: state => state.postsList,
		getPostDetail: state => state.postDetail,
		getTotalPages: state => state.totalPages,
		getLoader: state => state.isLoading
	},
	mutations: {
		setCategories: (state, value) => (state.categories = value),
		setTotalPages: (state, value) => (state.totalPages = value),
		setPostsList: (state, value) => (state.postsList = value),
		setPostDetail: (state, value) => (state.postDetail = value),
		setLoader: (state, value) => (state.isLoading += value)
	},
	actions: {
		loaderAction ({ commit }, value) {
			commit('setLoader', value)
		},
		getCategoriesFromAPI ({ commit, dispatch }) {
			dispatch('loaderAction', 1)
			axiosHelper.makeGetRequest(
				apiConfig.getCategories,
				response => {
					const allOption = [
						{
							ID: +new Date(),
							name: 'All Categories',
							slug: ''
						}
					]
					commit('setCategories', [...allOption, ...response.data.categories])
					dispatch('loaderAction', -1)
				},
				utils.errorHandler
			)
		},
		getPostsFromAPI ({ commit, dispatch }, { postQuery }) {
			dispatch('loaderAction', 1)
			axiosHelper.makeGetRequest(
				`${apiConfig.getPosts}${postQuery}`,
				response => {
					commit('setPostsList', response.data.posts)
					commit('setTotalPages', response.data.found)
					dispatch('loaderAction', -1)
				},
				utils.errorHandler
			)
		},
		getPostDetailsFromAPI ({ commit, dispatch }, { slugQuery }) {
			dispatch('loaderAction', 1)
			axiosHelper.makeGetRequest(
				`${apiConfig.getPosts}${slugQuery}`,
				response => {
					commit('setPostDetail', response.data)
					dispatch('loaderAction', -1)
				},
				utils.errorHandler
			)
		}
	}
})
