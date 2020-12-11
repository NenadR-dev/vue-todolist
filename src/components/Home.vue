<template>
  <div>
    <h2>Todos</h2>
    <modal v-if="showModal" :handleModal="handleModal" :handleNewTodo='addTodo'/>
    <button @click="handleModal">New Todo</button>
    <todo-list :todos='todos'/>
  </div>
</template>

<script>
import { getTodos } from "../service/TodoService.js";
import TodoList from "./TodoList.vue";
import AddTodoModal from "./AddTodoModal.vue";
export default {
  name: "Home",
  components: {
    TodoList: TodoList,
    Modal: AddTodoModal
  },
  data() {
    return {
      todos: [],
      showModal: false
    };
  },
  methods: {
    async fetchTodos() {
      var temp = await getTodos();
      temp.forEach(element => {
        this.todos.push(element)
      });
    },
    handleModal() {
      this.showModal = !this.showModal;
    },
    addTodo(data) {
      this.todos.push(data)
      this.handleModal()
    }
  },
  async beforeMount() {
    await this.fetchTodos();
  },
};
</script>

<style>

</style>
