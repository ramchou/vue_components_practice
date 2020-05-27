<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :deleteComment="deleteComment" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "@/components/Add";
import List from "@/components/List";
export default {
  components: {
    Add,
    List
  },
  data() {
    return {
      comments: [
        { id: 1, username: "agatha", content: "vue is great" },
        { id: 2, username: "polly", content: "I prefer React" },
        { id: 3, username: "steven", content: "awesome" },
        { id: 4, username: "ash", content: "emmmmmm" }
      ]
    };
  },
  methods: {
    addComment(obj) {
      this.comments.unshift(obj);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  }
};
</script>

<style scoped>
</style>
