<template>
  <div>
    <Child>
      <!-- 1.不添加任何内容，默认显示匿名插槽的内容 -->

      <!-- 2.添加一条内容，template标签可省略，会覆盖掉匿名插槽的内容 -->
      <!-- <p>明天早起去跑步吧 🍉</p> -->

      <!-- 3.添加多条内容 -->
      <!-- <template>
            <p>好想吃烤鱼(¯﹃¯)</p>
            <a href="##">GITHUB</a>
      </template>-->

      <!-- 4.具名插槽的使用，这里设置的内容会覆盖掉匿名插槽的内容 -->
      <!-- <span name="pp">line-frineds周边</span>
      <a href="##">ooooooops</a> -->

      <!-- 5.作用域插槽 -->
      <p slot-scope="slotProps" v-show="isShow" slot="prs">
        🍑 {{slotProps.person.name}}
      </p>      

    </Child>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "@/components/Child";
export default {
  components: {
    Child
  },
  data(){
      return {
          isShow:true
      }
  }
};
</script>

<style scoped>
</style>
