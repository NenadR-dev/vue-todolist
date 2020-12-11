<template>
  <div v-for="todo in todos" :key="todo.id">
      <todo-item :todo='todo' :deleteTodoItem='deleteTodo' @complete-todo='completeTodo' @edit-todo='editTodoData'/>
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
    },
    editTodoData(data) {
      this.$emit('edit-todo',data)
    },
    completeTodo(data) {
      this.$emit('complete-todo',data);
    }
  }
};
</script>

<style>
</style>