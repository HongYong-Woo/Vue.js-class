<script>
  export default {  //뷰 옵션속성
    data : function() {
      return {
        condition : 'B'

      };
    },

    // data() {  //자바스크립트
    //   return {};
    // }
  }

</script>
  
<template>
 <!-- {{}}  <=mustach syntax -->

 <h1 v-if="condition ==='A'">hello vuejs1</h1>
 <h1 v-else-if="condition ==='B'">hello vuejs2</h1>
 <h1 v-else ="condition ==='C'">hello vuejs3</h1>
</template>

<style>
 .blue-color { color: blue;}
</style>
