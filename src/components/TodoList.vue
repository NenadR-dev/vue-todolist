<template>
  <div v-for="todo in todos" :key="todo.id">
      <todo-item :todo='todo'/>
      <br/>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem: TodoItem,
  },
  props: {
    todos: Array
  },
};
</script>

<style>
</style>