<template>
  <div>
    <h1>Reactive</h1>
    {{ obj.name }}
    {{ reactiveValue.name }}
    {{ refValue.name }}
    <button @click="changeName">눌러</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

const makeRef = () => {
  const obj = { name: "yj" };
  const reactiveValue = reactive(obj);
  const refValue = ref(obj);

  const changeName = () => {
    console.log("dsd ", obj.name);
    return (obj.name = "hi");
  };
  return { obj, reactiveValue, refValue, changeName };
};
export default {
  setup() {
    const { obj, reactiveValue, refValue, changeName } = makeRef();
    console.log("reactive-name?", reactiveValue.name);
    console.log("ref-name?", refValue.value.name);
    console.log("비교", reactiveValue == obj, refValue == obj);
    return { obj, reactiveValue, refValue, changeName };
  },
};
</script>

<style></style>
