<script>
 export default{
  setup() {
    const count = ref(0);
    const state = reactive({
      count : 0,
      message : 'Hello',})
  }
 }
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <h2>Double Count: {{ doubleCount }}</h2>
  <button @click="increment">증가</button>
</template>
