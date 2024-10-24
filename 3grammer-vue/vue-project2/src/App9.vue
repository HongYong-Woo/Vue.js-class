<script>
  export default {  //뷰 옵션속성
        data(){
            return {
             name : '이자성',
             gender : 'male',
             age: 30,
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
  <div v-memo="[name, gender, age]">
    <p>이름 : {{ name }}</p>
    <p>성별 : {{ gender }}</p>
    <p>나이 : {{ age }}</p>
  </div>

  <button type="button" @click="name='수정'"> 이름 변경</button>
  <button type="button" @click="gender='helicopter'"> 성별 변경</button>
  <button type="button" @click="age=25"> 나이 변경</button>
</template>

<style>
 
</style>
