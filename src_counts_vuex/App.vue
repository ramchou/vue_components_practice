<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <!-- <button @click="incrementIfOdd">{{$store.state.count}}</button>
    <button @click="incrementAsync">{{$store.state.count}}</button>-->
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
export default {
  //   data() {
  //     return {

  //     };
  //   },

  methods: {
    // increment() {
    //   this.count++;
    // },
    // decrement() {
    //   this.count--;
    // },
    // incrementIfOdd() {
    //   if (this.count %2 === 1) {
    //     this.count++;
    //   }
    // },
    // incrementAsync() {
    //   setTimeout(() => {
    //     this.count++;
    //   }, 1000);
    // }

    // increment() {
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   this.$store.commit("decrement");
    // },
    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd");
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // }

    ...mapMutations(["increment", "decrement"]),
    ...mapActions(["incrementIfOdd", "incrementAsync"])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(["currentCount"])
  }
};
</script>

<style scoped>
</style>
