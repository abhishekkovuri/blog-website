import { mapGetters } from 'vuex'
import HeaderComponent from '@/components/header-component/HeaderComponent.vue'
import Footer from '@/components/footer/Footer.vue'
import Loader from '@/components/loader/loader.vue'

export default {
	name: 'App',
	components: {
		HeaderComponent,
        Footer,
        Loader
    },
    computed: {
        ...mapGetters(['getLoader'])
    }
}
