<script>
export default {
  data() {
    return {
      output : null,
      prev : null,
      cur : null,
      operator : null,
    }
  },

  methods:{
      operation(e) {
        const number = e.currentTarget.value;
        if(['+','-','*','/','='].includes(number)){
          //연산로직 구현       
          if(this.cur == null && this.prev == null) {
            alert("숫자 먼저 입력 하시오.");
            return;
          }

          if(number == '=' && this.operator != null) {
            console.log('= 누름 연산 ㄱㄱ');
              switch(this.operator) {
            case '+' : this.output = Number(this.prev) + Number(this.cur);
                        break;
            case '-' : this.output = Number(this.prev) - Number(this.cur);
                      break;
            case '*' : this.output = Number(this.prev) * Number(this.cur);
                      break;
            case '/' : this.output = Number(this.prev) / Number(this.cur);
                      break;
            }
            this.operator =null;
            this.prev = this.output;
            this.cur = null;
          }
          else if(number == '=' && this.prev == null){
            return;
          }
          else {
            console.log(`${number} 연산자 누름`)
            this.output = null;
            if(this.prev == null)
              this.prev = Number(this.cur);
            this.cur = null;
            this.operator = number;
          }
        }       
      },
      calculate() { //전체적인 흐름을 담당하는 기능

      },
      clear() { //초기화 기능
        console.log('C 누름 Clear 간다');
          this.output = null;
          this.prev = null;
          this.cur = null;
          this.operator = null;
          return;
      },
      userInput(e) { //사용자가 입력한 숫자를 저장하는 기능
        const number = e.currentTarget.value;
        console.log(`숫자 ${number} 누름`)
              //사용자가 입력한 숫자(실제로는 문자열) 저장
              this.cur = this.cur === null?number :(this.cur+=number)
              //입력한 값이 출력칸(output) 표시되도록 output데이터에 저장
              this.output = this.cur;
      },
  },

  computed:{

  },

  watch: {

  }
  
}
</script>

<template>
  <p>연산자는 {{ operator }}</p> 
  <p>output {{ output }}</p> 
  <p>prev {{ prev }}</p> 
  <p>cur {{ cur }}</p> 
  
  <div class="calculator">
      <form name="forms">
        <input type="text" name="output" readonly v-model="output"/>
        <input type="button" class="clear" value="C" @click="clear" />
        <input type="button" class="operator" value="/" @click="operation"/>
        <input type="button" value="1" @click="userInput"/>
        <input type="button" value="2" @click="userInput"/>
        <input type="button" value="3" @click="userInput"/>
        <input type="button" class="operator" value="*" @click="operation"/>
        <input type="button" value="4" @click="userInput"/>
        <input type="button" value="5" @click="userInput"/>
        <input type="button" value="6" @click="userInput"/>
        <input type="button" class="operator" value="+" @click="operation"/>
        <input type="button" value="7" @click="userInput"/>
        <input type="button" value="8" @click="userInput"/>
        <input type="button" value="9" @click="userInput"/>
        <input type="button" class="operator" value="-" @click="operation"/>
        <input type="button" class="dot" value="." @click="userInput"/>
        <input type="button" value="0" @click="userInput"/>
        <input type="button" class="operator result" value="=" @click="operation"/>
      </form>
    </div>
</template>

<style>
  @import './assets/style.css';

</style>
