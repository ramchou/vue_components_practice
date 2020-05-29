<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- props通信方式 -->
      <!-- <Header :addTodo="addTodo" /> -->

      <!-- 自定义通信方式 -->
      <!-- 简便方式 -->
      <!-- <Header @addTodo="addTodo" /> -->
      <!-- 复杂方式 -->
      <Header ref="add" />

      <Main :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne" />

      <!-- props通信方式 -->
      <!-- <Footer :todos="todos" :chooseAll="chooseAll" :deleteFinished="deleteFinished" /> -->
      <!-- 全局事件总线通信方式 -->
      <Footer :todos="todos" :chooseAll="chooseAll" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Main,
    Footer
  },

  // 自定义事件通信方式
  mounted() {
    this.$refs.add.$on("addTodo", this.addTodo);
    // this.$refs.add.$once('addTodo', this.addTodo)// 一次性事件

    // 全局事件总线通信方式
    this.$bus.$on("deleteFinished", this.deleteFinished);
  },

  data() {
    return {
      // todos: [
      //   { id: 1, content: "火锅🍲", done: false },
      //   { id: 2, content: "冰淇淋🍨", done: true },
      //   { id: 3, content: "运动🏃", done: false }
      // ]

      todos: JSON.parse(localStorage.getItem("todos_key")) || []
    };
  },
  methods: {
    updateOne(index, val) {
      this.todos[index].done = val;
    },
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    deleteOne(index) {
      this.todos.splice(index, 1);
    },
    chooseAll(val) {
      this.todos.forEach(item => (item.done = val));
    },
    deleteFinished() {
      this.todos = this.todos.filter(item => !item.done);
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem("todos_key", JSON.stringify(newVal));
      }
    }
  }

  // beforeDestroy(){
  //   this.$refs.add.$off('addTodo',this.addTodo)
  // }
};
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
