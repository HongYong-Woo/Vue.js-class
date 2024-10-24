<script>
  export default {  //뷰 옵션속성
        data(){
            return {
            gender : '',
            }
        },

        methods:{
        printData() {
          console.log(`message: ${this.gender}`);
        }
      }
    
  }

</script>
  
<template>
 <form id="loginForm1">
    <input type="radio" id="gender" v-model="gender" value="male">남성
    <input type="radio" id="gender" v-model="gender" value="female">여성
    <button type="button" @click="printData">버튼</button>

</form>


</template>

<style>
 
</style>
