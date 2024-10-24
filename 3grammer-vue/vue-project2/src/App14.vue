<script>
  export default {  //뷰 옵션속성
        data(){
            return {
            message : '',
            }
        },

        methods:{
        onChangeHandler($event) {
          this.message = $event.target.value;
        }
      }
    
  }

</script>
  
<template>
 <input type="text" @input="onChangeHandler($event)">
 {{ message }}


</template>

<style>
 
</style>
