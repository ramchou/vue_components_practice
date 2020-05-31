<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment) in comments" :key="comment.id" :comment="comment" />
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Item from "@/components/Item";
export default {
  components: {
    Item
  },
  data() {
    return {
      comments: JSON.parse(localStorage.getItem('comments_key')) || []
    };
  },
  mounted() {
    this.$bus.$on("addComment", this.addComment);
    this.$bus.$on("deleteComment", this.deleteComment);
  },
  methods: {
    addComment(obj) {
      this.comments.unshift(obj);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  },
  watch: {
    comments:{
      deep:true,
      handler(newVal,oldVal){
        localStorage.setItem('comments_key', JSON.stringify(newVal))
      }
    }
  },
};
</script>

<style scoped>
.reply {
  margin-top: 0px;
}

li {
  transition: 0.5s;
  overflow: hidden;
}
</style>
