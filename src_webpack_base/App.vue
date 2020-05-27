<template>
  <div>
    <MyBlog v-for="blog in blogs" :key="blog.id" :title="title"></MyBlog>
  </div>
</template>

<script type="text/ecmascript-6">
import MyBlog from "./components/MyBlog";
export default {
  components: {
    MyBlog
  },
  data() {
    return {
      blogs: [
        { id: 1, title: "blogA" },
        { id: 2, title: "blogB" },
        { id: 3, title: "blogC" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
