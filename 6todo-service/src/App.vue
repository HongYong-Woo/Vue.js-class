<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';


  export default{
    components: {
      TodoHeader,
      TodoList,
      TodoInput,
    },

    data() {
      return {
        todo : [],
        currentData: 'all' //현재 목록 상태를 관리 할 수 있도록 정의한 데이터
      };
    },

    computed: {
    computedTodo() {
      if (this.currentData === "all") {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    },
    },



    methods: {
      addTodo(inputMessage){
        const item = {
          id : Math.random(),
          msg : inputMessage,
          completed : false,
        };
        this.todo.push(item);
      },
      updateTab(tab) {
        this.currentData = tab;
      },


      deleteTodo(id) {
        this.todo = this.todo.filter((v) => v.id !== id);
      },
      updateTodo(id) {
        this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
      },
    },


  }

</script>

<template>
 <div class="todo">
  <!-- 정의한 currentData 데이터를 TodoHeader 컴포넌트에 전달 -->
     <TodoHeader :currentData @update-tab="updateTab"/> 
      <TodoList 
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"/>
      <TodoInput @add-todo="addTodo"/>
    </div>
</template>

<style scoped>

</style>