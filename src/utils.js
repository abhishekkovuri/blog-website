import store from './store'
const errorHandler = () => {
	console.log('API Failed')
	store.dispatch('loaderAction', -1)
}
export default {
	errorHandler
}
