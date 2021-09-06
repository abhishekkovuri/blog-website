import Vue from "vue";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale })
Vue.filter('stringReplace', (listString) => {
  return listString.replace(/,/g, ', ')
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");