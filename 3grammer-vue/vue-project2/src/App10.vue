<script>
  export default {  //뷰 옵션속성
        data(){
            return {
             uid : '',
             upwd : '',
             message : '',
            }
        },

        methods:{
          login() {
                   console.log(`id : ${this.uid}`);
                   console.log(`pw : ${this.upwd}`);
        },
        printData() {
          console.log(`message: ${this.message}`);
        }
      }
    
  }

</script>
  
<template>
 <form id="loginForm1">
    <label for="uid">ID : <input type="text" id="uid" v-model="uid"/><br></label>
    <label for="upwd">Password : <input type="password" id="upwd" v-model="upwd"/><br></label>
    <textarea v-model="message"></textarea>
    <!-- <button type="button" @click="login">login</button> -->
    <button type="button" @click="printData">데이터 출력</button>
</form>


</template>

<style>
 
</style>
