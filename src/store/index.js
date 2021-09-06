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
		totalPages: null
	},
	getters: {
		getCategories: state => state.categories,
		getPostsList: state => state.postsList,
		getTotalPages: state => state.totalPages
	},
	mutations: {
		setCategories: (state, value) => (state.categories = value),
		setTotalPages: (state, value) => (state.totalPages = value),
		setPostsList: (state, value) => (state.postsList = value)
	},
	actions: {
		getCategoriesFromAPI ({ commit }) {
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
				},
				utils.errorHandler
			)
		},
		getPostsFromAPI ({ commit }, { postQuery }) {
			axiosHelper.makeGetRequest(
				`${apiConfig.getPosts}${postQuery}`,
				response => {
					commit('setPostsList', response.data.posts)
					commit('setTotalPages', response.data.found)
				},
				utils.errorHandler
			)
		}
	}
})
