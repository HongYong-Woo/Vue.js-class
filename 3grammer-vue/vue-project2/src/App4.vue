<script>
  export default {  //뷰 옵션속성
    data : function() {
      return {
        fruits : ['orange', 'apple', 'grape', 'mango'],
        condition : true
      };
    },

   
  }

</script>
  
<template>
 <!-- {{}}  <=mustach syntax -->

 <h1 v-show="condition">hello vuejs1</h1>
 <ul>
  <li v-for="(fruit, index) in fruits" :key="index">
    인덱스 : {{ index+1 }}, 값 : {{ fruit }}
  </li>
 </ul>
 
</template>

<style>
 .blue-color { color: blue;}
</style>
