import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
Vue.use(router)

new Vue({
    el: "#root",
    render: h => h(App),
    router
})