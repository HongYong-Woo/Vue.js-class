<script>
  export default {  //뷰 옵션속성
    data : function() {
      return {
        //name : 'ssg', age :20,//name, age를 변수, 데이터, 데이터 속성
        //className : 'blue-color',
        visible : true,
        unvisible :false

      };
    },

    // data() {  //자바스크립트
    //   return {};
    // }
  }

</script>
  
<template>
 <!-- {{}}  <=mustach syntax -->
 <!-- <h1 v-bind:class="className">Hello Vue.js</h1>
 <h1 :class="className">Hello Vue.js</h1> -->
 <h1 v-if="visible">hello vuejs1</h1>
 <h1 v-if="unvisible">hello vuejs2</h1>
</template>

<style>
 .blue-color { color: blue;}
</style>
