<script>
import UserProfile from './components/UserProfile.vue';


export default {
  components :{
    UserProfile
  },

  methods: {
    // printHello() {
    //   alert('Hello Component!');
    // }
    printHello(name, age) {
      alert(`Hello Component! ${name} ${age}`);
    
    }
  }
  

 
}

</script>

<template>
<!-- :age 컴포넌트 사용자 정의 속성을 v-bind(:) -->
 <!-- <UserProfile :name="name" :company="company" :age="age"/> -->
 <UserProfile @print-hello="(name, age) =>printHello(name,age)"/>
</template>

<style>

</style>
