<template>
  <div>
    <h2>Todos</h2>
    <modal v-if="showModal" :handleModal="handleModal" :handleNewTodo='addTodo'/>
    <button @click="handleModal">New Todo</button>
    <todo-list :todos='todos' :deleteTarget='deleteTodo'/>
  </div>
</template>

<script>
import { getTodos, deleteUserTodo } from "../service/TodoService.js";
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
        this.todos.push({
          id: element.id,
          title: element.title,
          description: element.description,
          priority: element.priority,
          completed: element.completed
        })
      });
      console.log([...this.todos])
    },
    handleModal() {
      this.showModal = !this.showModal;
    },
    addTodo(data) {
      this.todos.push(data)
      this.handleModal()
    },
    async deleteTodo(data) {
      var index = await deleteUserTodo(data.id)
      this.todos.splice(this.todos.find(x => x.id == index), 1);
    }
  },
  async beforeMount() {
    await this.fetchTodos();
  },
};
</script>

<style>

</style>
