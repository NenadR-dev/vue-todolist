<template>
  <div v-for="todo in todos" :key="todo.id">
      <todo-item :todo='todo' :deleteTodoItem='deleteTodo'/>
      <br/>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem: TodoItem
  },
  props: {
    todos: Array,
    deleteTarget: Function
  },
  methods: {
    deleteTodo(data){
      this.deleteTarget(data)
    }
  }
};
</script>

<style>
</style>