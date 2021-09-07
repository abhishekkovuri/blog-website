import { mapGetters } from 'vuex'
export default {
	name: 'blog-listing',
	data () {
		return {
			category: '',
			pageNo: 1
		}
	},
	created () {
		this.$store.dispatch('getCategoriesFromAPI')
		this.handlePageChange(this.pageNo)
	},
	methods: {
		handlePageChange (pageNo) {
			this.pageNo = pageNo
			this.getPostsByFilters()
		},
		getPostsByFilters () {
			const postQuery = `?category=${this.category}&number=20&page=${this.pageNo}`
			this.$store.dispatch('getPostsFromAPI', { postQuery })
		},
		goToDetails (slugName) {
			const params = { slugName }
			this.$router.push({ name: 'blogDetail', params })
		}
	},
	computed: {
		...mapGetters(['getCategories', 'getPostsList', 'getTotalPages'])
	}
}
