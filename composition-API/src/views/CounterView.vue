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
      count: 0,
    };
  },
  computed: {
    countNum() {
      return this.count;
    },
  },
  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    },
  },
};
</script>

<style></style>
