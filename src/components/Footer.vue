<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChecked" />
    </label>
    <span>
      <span>已完成 {{finishedNum}}</span>
      / 全部 {{totalNum}}
    </span>
    <button class="btn btn-danger" @click="delFinished">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todos: Array,
    chooseAll: Function,
    // deleteFinished: Function // props通信方式
  },
  computed: {
    finishedNum() {
      return this.todos.filter(item => item.done).length;
    },
    totalNum() {
      return this.todos.length;
    },
    isAllChecked: {
      get() {
        return this.finishedNum === this.totalNum && this.totalNum > 0;
      },
      set(val) {
        this.chooseAll(val);
      }
    }
  },
  methods: {
    delFinished() {
        // props通信方式
    //   this.deleteFinished();

    // 全局事件总线通信方式
    this.$bus.$emit('deleteFinished')
    }
  }
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
