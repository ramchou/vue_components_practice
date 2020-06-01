import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

const state = {
    isFirst: true,
    isLoading: false,
    errMsg: "",
    users: []
}

const mutations = {
    requesting(state) {
        state.isFirst = false
        state.isLoading = true
    },
    request_success(state, users) {
        state.isLoading = false
        state.users = users
    },
    request_failed(state, msg) {
        state.isLoading = false
        state.errMsg = msg
    },

}

const actions = {
    async search({ commit }, searchName) {
        commit('requesting')

        try {
            let response = await axios({
                method: "GET",
                url: "https://api.github.com/search/users",
                params: {
                    q: searchName
                }
            });

            let users = []
            response.data.items.forEach(item => {
                let user_name = item.login;
                let user_img = item.avatar_url;
                let user_url = item.url;
                let obj = {
                    user_name,
                    user_img,
                    user_url
                };
                users.push(obj);
            });
            commit('request_success', users)
        } catch (error) {
            commit('request_failed', error.message)
        }
    }
}

const getters = {
    isFirst(state) {
        return state.isFirst
    },
    isLoading(state) {
        return state.isLoading
    },
    errMsg(state) {
        return state.errMsg
    },
    users(state) {
        return state.users
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
