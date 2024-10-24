<!-- 2024-10-15 -->
<script>
  export default {  //뷰 옵션속성
    data : function() {
      return {
        user: {
          name : 'SCV',
          company : 'ssg.com',
          gender : 'male',
          age : 30
        }
      };
    },

   
  }

</script>
  
<template>
 <!-- {{}}  <=mustach syntax -->

 <h1 v-show="condition">user 객체 출력</h1>
 <ul>
  <li v-for="(value,key, index) in user" :key="index">
    인덱스 : {{ index+1 }}, 키 : {{ key }}, 값 : {{ value }}
  </li>
 </ul>
 
</template>

<style>
 .blue-color { color: blue;}
</style>
