<script>
  export default {  //뷰 옵션속성
        data(){
            return {
              number: 0
            }
        },

        methods:{
          incresement() {
            this.number++;        
        },
        onKeyupHandler2() {
            alert("엔터엔터엔터엔터2222");
  
          
        },}
    
  }

</script>
  
<template>
 <input type="text" @keyup.enter="onKeyupHandler2()">
 <h1>{{ number }}</h1>
 <h1 v-once>{{ number }}</h1>
 <button type="button" @click="incresement">증가</button>
</template>

<style>
 
</style>
