<!-- 2024-10-17 -->

<script>
import CustomButton from '@/components/CustomButton.vue';
import DefaultLayout from '@/components/DefaultLayout.vue';
import DynamicLayout from './components/DynamicLayout.vue';
import BasicScope from './components/BasicScope.vue';

  export default {
    components: {
  
      BasicScope,
    },
    data () {
      return {
        dynamicName : 'header',
        dynamicMain : 'main',
        dynamicFooter : 'footer',
      };
    },
  }

</script>

<template>
  
  
  <BasicScope>
    <h1>App에서 색</h1>
  </BasicScope>
</template>

<style scoped>
  h1{
    color:blue;
  }
</style>
