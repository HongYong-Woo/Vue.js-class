<script>
  export default {  //뷰 옵션속성
        data(){
            return {
              lastName: 'Woo',
              firstName : 'hongyong'
            }
        },
        
        methods:{
          
        },

        computed:{
          fullName() {
            console.log('computed fullName');
            return `${this.lastName}  ${this.firstName}`;
          }
       
      }
    
  }

</script>
  
<template>
  <h1>{{ fullName }}</h1>
  <h2>{{ fullName }}</h2>
</template>

<style>
 
</style>
