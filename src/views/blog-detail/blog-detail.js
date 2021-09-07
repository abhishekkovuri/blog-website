import { mapGetters } from 'vuex'

export default {
	name: 'blog-detail',
	created () {
		const slugQuery = `/slug:${this.$route.params.slugName}`
		this.$store.dispatch('getPostDetailsFromAPI', { slugQuery })
	},
	methods: {
	},
	computed: {
		...mapGetters(['getPostDetail'])
	}
}
