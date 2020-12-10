<template>
  <div>
    <h2>HOME</h2>
  </div>
</template>

<script>
import { getTodos } from "../service/TodoService.js";
import TodoList from './TodoList.vue'
export default {
  name: "Home",
  components: {
    TodoList: TodoList
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
    console.log(this.todos);
  },
};
</script>

<style>
.todo-card {
  display: inline-block;
  padding: 10px 25px;
  font-size: 102px;
  font-weight: 600;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
