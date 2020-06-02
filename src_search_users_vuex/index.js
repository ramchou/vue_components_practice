import Vue from 'vue'
import App from '@/App'
import '@babel/polyfill'
import store from '@/vuex/store'

new Vue({
    el: "#root",
    render: h => h(App),
    store
})