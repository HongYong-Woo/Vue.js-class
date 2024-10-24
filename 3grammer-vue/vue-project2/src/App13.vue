<script>
  export default {  //뷰 옵션속성
        data(){
            return {
            menu : [],
            }
        },

        methods:{
        printData() {
          console.log(`message: ${this.menu}`);
        }
      }
    
  }

</script>
  
<template>
  <form id = choice>
  <select v-model="menu">
    <option disabled value="">메뉴를 선택해라</option>
    <option id="menu" value="Americano">아메리카노</option>
    <option id="menu" value="CafeLatte">카페라떼</option>
    <option id="menu" value="VanillaLatte">바닐라라떼</option>
  </select>
    <button type="button" @click="printData">주문</button>
</form>

</template>

<style>
 
</style>
