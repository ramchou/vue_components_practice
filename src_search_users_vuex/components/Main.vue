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
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["isFirst", "isLoading", "errMsg", "users"])
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
