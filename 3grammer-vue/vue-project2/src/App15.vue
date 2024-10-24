<script>
  export default {  //뷰 옵션속성
       
        methods:{
        onSubmitHandler(e) {
          e.preventDefault(); // 별도의 폼 전송 처리
          console.log('Onsubmit handler');
        }
      }
    
  }

</script>
  
<template>
  <form @submit="onSubmitHandler">
    <button type="submit">전송</button>
  </form>

</template>

<style>
 
</style>
