<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(info) in news" :key="info.id">
        news{{info.id}}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="handlerJump(info)"
        >{{info.id}}</button>
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      news: [
        { id: 1, content: "newsOne" },
        { id: 2, content: "newsTwo" },
        { id: 3, content: "newsThree" }
      ]
    };
  },
  methods: {
    handlerJump(info) {
      //   this.$router.push("/home/news/newsdetail" + info.id + "?newsContent=" + info.content);
      //   this.$router.push({
      //     name: "newsInfo",
      //     params: { newsId: info.id },
      //     query: { newsContent: info.content }
      //   });
      this.$router.replace({
        name: "newsInfo",
        params: { newsId: info.id },
        query: { newsContent: info.content }
      });
    }
  }
};
</script>

<style scoped>
</style>
