<script>
export default {
    
    data() {
        return {
            inputMessage : '',
        };
    },

    emits: ['add-todo'],

    methods: {
        addTodo() {
            console.log(this.inputMessage);
            this.$emit('add-todo', this.inputMessage); //부모컴포넌트로 이벤트 호출
            this.inputMessage ='';

        }
    },

    

}
</script>

<template>
    <div class="todo__input">
        <input
          type="text"
          class="todo__input-text"
          placeholder="할 일을 입력하세요."
          v-model="inputMessage"
          @keydown.enter="addTodo"/>
        <button class="todo__input-btn" @click="addTodo">등록</button>
      </div>
</template>