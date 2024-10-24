<script>
  export default {  //뷰 옵션속성
    data : function() {
      return {
        condition : false

      };
    },

    // data() {  //자바스크립트
    //   return {};
    // }
  }

</script>
  
<template>
 <!-- {{}}  <=mustach syntax -->

 <h1 v-show="condition">hello vuejs1</h1>
 <h1 v-show="!condition">hello vuejs2</h1>
 
</template>

<style>
 .blue-color { color: blue;}
</style>
