<template>
  <div>
    <!-- 匿名函数 -->
    <slot>emmmmm</slot>

    <!-- 具名函数 -->
    <slot name="pp"></slot>

    <!-- 作用域插槽 -->
    <ul>
      <li v-for="(person) in persons" :key="person.id">
        <slot name="prs" :person="person">
            {{person.name}}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      persons: [
        { id: 1, name: "agatha" },
        { id: 2, name: "polly" },
        { id: 3, name: "steven" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
