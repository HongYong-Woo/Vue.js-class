<script>
import FirstChild from './components/FirstChild.vue';

//provide 속성의 키를 symbol 값으로 사용하여 데이터를 주입
import { message, reversedMessage } from '@/key.js';

export default {
  components :{
    FirstChild
  },

  provide() {
    return {
      [message]:this.message,
      [reversedMessage] : this.reversedMessage,
    };
  },

  data() {
    return {
      message : 'hello FirstChild Component',
      
    }
  },

  computed : {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }

}

</script>

<template>
<FirstChild />
</template>

<style>

</style>
