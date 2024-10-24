<script setup>
import { computed, ref, reactive } from 'vue';

const refCount = ref(0);
const reactiveCount = reactive({count:0});

const refDoubleCount = computed(()=> refCount.value +2);
const reactiveDoubleCount = computed(()=>reactiveCount.count+2);

//computed() 처리한 데이터는 value 사용해야 한다.
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);

setTimeout(() => {
  reactiveCount.count= 20;
}, 1000);
</script>
<template>
  <h1>{{ refCount }}</h1>
  <h1>{{ refDoubleCount }}</h1>
  <br>
  <h1>{{ reactiveCount.count }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
  
</template>
