<template>
  <div>
    <h2>Todos</h2>
    <todo-list :todos='todos'/>
  </div>
</template>

<script>
import { getTodos } from "../service/TodoService.js";
import TodoList from "./TodoList.vue";
export default {
  name: "Home",
  components: {
    TodoList: TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async fetchTodos() {
      this.todos = await getTodos();
    },
  },
  beforeMount() {
    this.fetchTodos();
  },
};
</script>

<style>

</style>
