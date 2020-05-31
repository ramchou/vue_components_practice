<template>
  <div class="row">
    <h3 v-if="isFirst">请开始你的搜索🔍</h3>
    <h3 v-else-if="isLoading">搜索中……</h3>
    <h3 v-else-if="errMsg">请求出错，错误信息{{errMsg}}，请重试🍅</h3>
    <div v-else class="card" v-for="(user) in users" :key="user.user_name">
      <a :href="user.user_url" target="_blank">
        <img :src="user.user_img" style="width: 100px" />
      </a>
      <p class="card-text">{{user.user_name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";

import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource)

export default {
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: "",
      users: []
    };
  },
  mounted() {
    this.$bus.$on("searchAjax", this.searchAjax);
  },
  methods: {
    //   axios
    // searchAjax(searchName) {
    //     this.isfirst = false
    //     this.isLoading = true

    //     axios({
    //         method:'GET',
    //         url:'https://api.github.com/search/users',
    //         params:{
    //             q:searchName
    //         }
    //     }).then(response => {
    //         this.isLoading = false
    //         response.data.items.forEach(item =>{
    //             let user_name = item.login
    //             let user_img = item.avatar_url
    //             let user_url = item.url
    //             let obj = {
    //                 user_name,
    //                 user_img,
    //                 user_url
    //             }
    //             this.users.push(obj)
    //         })
    //     }).catch(error => {
    //         this.isLoading = false
    //         this.errMsg = error.message
    //     })
    // }

    // axios 结合async await
    async searchAjax(searchName) {
      this.isFirst = false;
      this.isLoading = true;

      try {
        let response = await axios({
          method: "GET",
          url: "https://api.github.com/search/users",
          params: {
            q: searchName
          }
        });
        this.isLoading = false;
        response.data.items.forEach(item => {
          let user_name = item.login;
          let user_img = item.avatar_url;
          let user_url = item.url;
          let obj = {
            user_name,
            user_img,
            user_url
          };
          this.users.push(obj);
        });
      } catch (error) {
        this.isLoading = false;
        this.errMsg = error.message;
      }
    }

    // 使用vue-resource发送ajax请求
    // searchAjax(searchName) {
    //     this.isFirst = false
    //     this.isLoading = true

    //     this.$http({
    //         method:'GET',
    //         url:'https://api.github.com/search/users',
    //         params:{
    //             q:searchName
    //         }
    //     }).then(response => {
    //         this.isLoading = false
    //         response.data.items.forEach(item =>{
    //             let user_name = item.login
    //             let user_img = item.avatar_url
    //             let user_url = item.url
    //             let obj = {
    //                 user_name,
    //                 user_img,
    //                 user_url
    //             }
    //             this.users.push(obj)
    //         })
    //     },
    //     error => {
    //         this.isLoading = false
    //         this.errMsg = error.statusText
    //     })
    // }
  }
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
