<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="addT" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  // props:['addTodo'],
  props: {
    // addTodo: Function
  },
  //   props的不常用写法:
  //   props:{
  //       addTodo:{
  //           type:Function,
  //           default:function(){}
  //       }
  //   },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    addT() {
      let id = Date.now();
      let content = this.content;
      let done = false;
      if (content.trim()) {
        let obj = {
          id,
          content,
          done
        };
        // this.addTodo(obj);//props通信方式
        this.$emit("addTodo", obj);
      }
      this.content = "";
    }
  }
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
