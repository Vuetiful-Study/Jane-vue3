<template>
  <div>
    <h1>Compostion API</h1>
    <span>{{ countNum }}</span> |
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
// import {ref, computed } from '@vue/composition-api' // vue2에선 이렇게

const useCount = () => {
  const count = ref(0);
  const countNum = computed(() => count.value);

  const increase = () => (count.value += 1);
  const decrease = () => (count.value -= 1);

  return { countNum, increase, decrease };
};
export default {
  setup() {
    const { countNum, increase, decrease } = useCount();

    return {
      countNum,
      increase,
      decrease,
    };
  },
};
</script>

<style></style>
