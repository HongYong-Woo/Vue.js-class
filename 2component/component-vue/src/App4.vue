<script>
import FirstChild from './components/FirstChild.vue';


export default {
  components :{
    FirstChild
  },

  mounted() {
    const childNum = this.$refs.child.number;
    const childDoubleNum = this.$refs.child.doubleNum;
    const childd = this.$refs.child;
    console.log(`메소드 호출 전 : ${childNum}`);
    console.log(`메소드 호출 전 : ${childDoubleNum}`);

    setTimeout(function(){

      this.$refs.child.increment();
     
      console.log(`메소드 호출 후 : ${childNum}`);
      console.log(`메소드 호출 후 : ${childDoubleNum}`);

    },1000);
  },

 
}

</script>

<template>

  <FirstChild ref="child" />
</template>

<style>

</style>
