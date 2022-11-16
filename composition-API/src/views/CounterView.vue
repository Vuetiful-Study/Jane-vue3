<template>
  <div>
    <h1>Option API</h1>
    <span>{{ countNum }}</span> |
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: { num: 0 },
    };
  },
  computed: {
    countNum() {
      return this.count.num;
    },
  },
  methods: {
    increase() {
      this.count.num += 1;
    },
    decrease() {
      this.count.num -= 1;
    },
  },
};
</script>

<style></style>
