<template>
  <div>
    <h2>Todos</h2>
    <modal v-if="showModal" @handleModal="handleModal" @handleNewTodo="addTodo" />
    <button @click="handleModal">New Todo</button>
    <todo-list
      :todos="todos"
      :deleteTarget="deleteTodo"
      @edit-todo="updateTodo"
      @complete-todo="updateTodo"
    />
  </div>
</template>

<script>
import { getTodos, deleteUserTodo, editUserTodo } from "../service/TodoService.js";
import TodoList from "./TodoList.vue";
import AddTodoModal from "./AddTodoModal.vue";
export default {
  name: "Home",
  components: {
    TodoList: TodoList,
    Modal: AddTodoModal,
  },
  data() {
    return {
      todos: [],
      showModal: false,
    };
  },
  methods: {
    async fetchTodos() {
      try {
        var temp = await getTodos();
        temp.forEach((element) => {
          this.todos.push(element);
        });
      } catch {
        this.todos = [];
      }
    },
    handleModal() {
      this.showModal = !this.showModal;
    },
    addTodo(data) {
      this.todos.push(data);
      this.handleModal();
    },
    async deleteTodo(data) {
      var index = await deleteUserTodo(data.id);
      this.todos.splice(
        this.todos.find((x) => x.id == index),
        1
      );
    },
    async updateTodo(data) {
      var todo = await editUserTodo(data);
      this.todos.forEach((el, index) => {
        if (el.id == todo[0].id) {
          this.todos[index] = {
            id: todo[0].id,
            title: todo[0].title,
            description: todo[0].description,
            priority: todo[0].priority,
            completed: todo[0].completed,
          };
        }
      });
      console.log([...this.todos]);
    }
  },
  async beforeMount() {
    await this.fetchTodos();
  },
};
</script>

<style></style>
