export const mutations = {
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