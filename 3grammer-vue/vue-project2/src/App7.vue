<script>
  export default {  //뷰 옵션속성
        methods:{onKeyupHandler(event) {
          if(event.keyCode == 13) {
            alert("엔터엔터엔터엔터")
          }
          
        },
        onKeyupHandler2() {
            alert("엔터엔터엔터엔터2222")
  
          
        },}
    
  }

</script>
  
<template>
 <input type="text" @keyup="($event) => onKeyupHandler($event)">
 <input type="text" @keyup.enter="onKeyupHandler2()">
</template>

<style>
 
</style>
