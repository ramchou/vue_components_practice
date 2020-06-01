import axios from "axios";

export const actions = {
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