<script>
  export default {  //뷰 옵션속성
        methods:{clickHandler(event,message) {
   
          console.log(event);
          console.log(message);
        },}
    
  }

</script>
  
<template>
  <button type="button" v-on:click="clickHandler()">벤자민 버튼</button><br><br>
  <button type="button" @click="clickHandler($event)">@으로 해도됨</button><br><br>
  <button type="button" @click="($event) =>clickHandler($event)">버튼3</button><br><br>
  <button type="button" @click="clickHandler($event, 'hello')">버튼4</button>
</template>

<style>
 
</style>
