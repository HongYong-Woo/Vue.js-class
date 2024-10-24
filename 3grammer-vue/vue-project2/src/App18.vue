<script>
  export default {  //뷰 옵션속성
        data(){
            return {
              numArray: [1,2,3,4,5,6,7,8,9,10],
            }
        },

        computed:{
          evenSum(){
            return this.numArray.filter((value)=> value%2 ==0).reduce((acc,cur) => acc+cur,0);
          }  
      }
  }

</script>
  
<template>
  <h1>{{ evenSum }}</h1>
</template>

<style>
 
</style>
