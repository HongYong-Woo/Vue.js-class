<script>
export default {
  data() {
    return {
      output : null,
      prev : null,
      cur : null,
      operator : null,
      operatorAction: { //사칙 연산을 수행하는 함수를 각각 객체로 정의한다.
        '+': (n1,n2) => n1 + n2,
        '-': (n1,n2) => n1 - n2,
        '*': (n1,n2) => n1 * n2,
        '/': (n1,n2) => n1 / n2,
      },
    }
  },

  methods:{
    clear() { //초기화 기능
        console.log('C 누름 Clear 간다');
          this.output = null;
          this.prev = null;
          this.cur = null;
          this.operator = null;
      },

      calculate(number) { //전체적인 흐름을 담당하는 기능
        
          if(this.cur === null && this.prev === null) {
            alert("숫자 먼저 입력 하시오.");
            return;
          }
          else if(number === '=' && this.prev === this.cur){
            return;
          }

          this.cur = Number(this.cur);
          if(this.operator != null){
            this.prev = this.operatorAction[this.operator](this.prev, this.cur);
              
            if(number === '='){
              this.output = this.prev;
              this.operator = null;
              this.cur = this.prev;
            } else {
              this.output = null;
              this.operator = number;
              this.cur = null;
            }
            } else {
              this.output = null;
              this.operator = number;
              this.prev = this.cur;
              this.cur = null;
            }
          
      },

      userInput(number) { //사용자가 입력한 숫자를 저장하는 기능
        console.log(`숫자 ${number} 누름`)
              //사용자가 입력한 숫자(실제로는 문자열) 저장
              this.cur = this.cur === null?number :(this.cur+=number)
              //입력한 값이 출력칸(output) 표시되도록 output데이터에 저장
              this.output = this.cur;
      },

      operation(e) {
        // 클릭한 버튼 값 가져요기
        const number = e.currentTarget.value;
        if(number === 'C') {
          this.clear();
        }
        else if(['+','-','*','/','='].includes(number)){
          this.calculate(number);
        }       
        else {
          this.userInput(number);
        }
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
        <input type="button" class="clear" value="C" @click="operation" />
        <input type="button" class="operator" value="/" @click="operation"/>
        <input type="button" value="1" @click="operation"/>
        <input type="button" value="2" @click="operation"/>
        <input type="button" value="3" @click="operation"/>
        <input type="button" class="operator" value="*" @click="operation"/>
        <input type="button" value="4" @click="operation"/>
        <input type="button" value="5" @click="operation"/>
        <input type="button" value="6" @click="operation"/>
        <input type="button" class="operator" value="+" @click="operation"/>
        <input type="button" value="7" @click="operation"/>
        <input type="button" value="8" @click="operation"/>
        <input type="button" value="9" @click="operation"/>
        <input type="button" class="operator" value="-" @click="operation"/>
        <input type="button" class="dot" value="." @click="operation"/>
        <input type="button" value="0" @click="operation"/>
        <input type="button" class="operator result" value="=" @click="operation"/>
      </form>
    </div>
</template>

<style>
  @import './assets/style.css';

</style>
