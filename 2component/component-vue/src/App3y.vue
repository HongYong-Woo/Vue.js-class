<script>
import FirstChild from './components/FirstChild.vue';


export default {
  mounted() {
    const dom1 = this.$refs.dom1;
    const text = dom1.innerText;
    console.log(text);
  },

  components :{
    FirstChild
  }
}

</script>

<template>
  <h1 ref="dom1">this is h1 tag</h1>
  <FirstChild ref="child" />
</template>

<style>

</style>
