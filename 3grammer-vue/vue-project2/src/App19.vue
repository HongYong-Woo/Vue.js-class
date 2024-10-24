<script>
  export default {  //뷰 옵션속성
        data(){
            return {
              inputStr : '',
            }
        },

        watch:{
          inputStr(newValue, oldValue){
            console.log(`old : ${oldValue}`);
            console.log(`new : ${newValue}`);
          }  
      }
  }

</script>
  
<template>
  <input type="text" name="" id="" v-model="inputStr"/>
</template>

<style>
 
</style>
