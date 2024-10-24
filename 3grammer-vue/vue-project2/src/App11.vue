<script>
  export default {  //뷰 옵션속성
        data(){
            return {
            fruits : ['banana', 'orange', 'apple'],
            }
        },

        methods:{
        printData() {
          console.log(`message: ${this.fruits}`);
        }
      }
    
  }

</script>
  
<template>
 <form id="loginForm1">
    <input type="checkbox" id="fruits" v-model="fruits" value="banana">바나나
    <input type="checkbox" id="fruits" v-model="fruits" value="orange">오렌지
    <input type="checkbox" id="fruits" v-model="fruits" value="apple">사과
    <button type="button" @click="printData">버튼</button>

</form>


</template>

<style>
 
</style>
