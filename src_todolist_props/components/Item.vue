<template>
  <li @mouseenter="handlerItem(true)" @mouseleave="handlerItem(false)" :class="myClass">
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todo: Object,
    updateOne: Function,
    index: Number,
    deleteOne:Function
  },
  data() {
    return {
      isShow: false,
      myClass: "leaveClass"
    };
  },
  computed: {
    isCheck: {
      get() {
        return this.todo.done;
      },
      set(val) {
        this.updateOne(this.index, val);
      }
    },
  },
  methods: {
    handlerItem(flag) {
      this.isShow = !this.isShow;
      this.myClass = flag ? "enterClass" : "leaveClass";
    },
    deleteT(){
        this.deleteOne(this.index);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.enterClass {
  background-color: whitesmoke;
}
.leaveClass {
  background-color: #fff;
}
</style>
