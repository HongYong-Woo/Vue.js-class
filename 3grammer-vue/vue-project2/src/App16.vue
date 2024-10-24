<script>
  export default {  //뷰 옵션속성
        data(){
            return {
            menu : '메뉴를 선택해라',
            price : 0
            }
        },

        methods:{
        printData() {
          console.log(`message: ${this.menu}`);
        },
        onChangeHandler($event) {
           if(this.menu === 'Americano'){
            this.price = 500;
           }
           if(this.menu === 'CafeLatte'){
            this.price = 1000;
           }
           if(this.menu === 'VanillaLatte'){
            this.price = 1500;
           }
           
        },
        onkeyupHandler($event) {
          console.log('keyup event!');
        }
      }
    
  }

</script>
  
<template>
  <form id = choice>
  <select v-model="menu" @change="onChangeHandler($event)">
    <option disabled value="">메뉴를 선택해라</option>
    <option value="Americano">아메리카노</option>
    <option value="CafeLatte">카페라떼</option>
    <option value="VanillaLatte">바닐라라떼</option>
  </select>
  {{ price }}원
</form>


<input type="text" @keyup="onkeyupHandler($event)">

</template>

<style>
 
</style>
