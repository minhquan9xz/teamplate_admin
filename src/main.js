import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import bootstrap from 'bootstrap'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
    router,
    store,
    bootstrap,
    axios,
    render: h => h(App)
}).$mount('#app')