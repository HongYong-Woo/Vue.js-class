<!-- 2024-10-17 -->

<script>
import CustomButton from '@/components/CustomButton.vue';
import DefaultLayout from '@/components/DefaultLayout.vue';
import DynamicLayout from './components/DynamicLayout.vue';
import BasicScope from './components/BasicScope.vue';

  export default {
    components: {
      CustomButton,
      DefaultLayout,
      DynamicLayout,
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
  <!-- <CustomButton /> -->
  <CustomButton></CustomButton>
  <DefaultLayout>
    <template v-slot:header>
      <header>
        <h1>Header 영역</h1>
      </header>
    </template>
    <template v-slot:main>
      <main>
        <h1>Main 영역</h1>
      </main>
    </template>
    <template #footer>
      <footer>
        <h1>Footer 영역</h1>
      </footer>
    </template>
  </DefaultLayout>

  <DynamicLayout>
    <template #[dynamicName]>
      <h2>동적 슬롯 연습 Header</h2>
    </template>
    <template #[dynamicMain]>
      <h2>동적 슬롯 연습 Main</h2>
    </template>
    <template #[dynamicFooter]>
      <h2>동적 슬롯 연습 Footer</h2>
    </template>
  </DynamicLayout>
  
  <BasicScope>
    <h1>App에서 색</h1>
  </BasicScope>
</template>

<style scoped>
  h1{
    color:blue;
  }
</style>
