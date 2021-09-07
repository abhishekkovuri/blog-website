import { mapGetters } from 'vuex'
import AvatarIcon from '@/components/avatar-icon/AvatarIcon.vue'

export default {
	name: 'blog-detail',
	created () {
		const slugQuery = `/slug:${this.$route.params.slugName}`
		this.$store.dispatch('getPostDetailsFromAPI', { slugQuery })
	},
	computed: {
		...mapGetters(['getPostDetail']),
		// Sets Initials for Avatars
		getInitial () {
			const pd = this.getPostDetail.author
			return pd ? `${pd.first_name && pd.first_name[0]}${pd.last_name && pd.last_name[0]}` : 'UK'
		}
	},
	components: {
		AvatarIcon
	}
}
