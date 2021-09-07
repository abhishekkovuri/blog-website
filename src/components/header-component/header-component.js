import truecaller from '@/assets/truecaller.svg'

export default {
	name: 'HeaderComponent',
	data () {
        return {
            truecaller
        }
    },
    methods: {
        backToHome () {
            if (this.$route.path !== '/') {
                this.$router.push('/')
            }
        }
    }
}
