import Vue from 'vue'
import App from '@/App'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    el: "#root",
    render: h => h(App)
})