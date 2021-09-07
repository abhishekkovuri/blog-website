import Vue from 'vue'
import VueRouter from 'vue-router'
const blogList = () => import('@/views/blog-list/BlogList.vue')
const blogDetail = () => import('@/views/blog-detail/BlogDetail.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'BlogListing',
		component: blogList
	},
	{
		path: '/blog-detail/:slugName',
		props: true,
		name: 'blogDetail',
		component: blogDetail
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
