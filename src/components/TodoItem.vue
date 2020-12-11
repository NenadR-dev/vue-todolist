<template>
  <div class="todo-item">
    <div v-if="edit">
      <form v-on:submit.prevent>
        <div>
          <label for="title">Title: </label>
          <input type="text" name="title" id="title" v-model="item.title" />
        </div>
        <div>
          <input
            class="item-desc"
            type="text"
            name="description"
            id="description"
            v-model="item.description"
          />
        </div>
        <div>
          <label for="pririty">Priority: </label>
          <input
            type="text"
            name="priority"
            id="priority"
            v-model="item.priority"
          />
        </div>
        <div>
          <label for="description">Complete: </label>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            v-model="item.completed"
            :true-value="1"
            :false-value="0"
          />
        </div>
        <button @click="toggleEdit">Cancel</button>
        <button @click="editTodo">Save</button>
      </form>
    </div>
    <div v-else>
      {{ item.title }}<br />
      {{ item.description }}<br />
      Priority: {{ item.priority }}<br />
      Complete:
      <input
        type="checkbox"
        name="completed"
        id="completed"
        v-model="item.completed"
        :true-value="1"
        :false-value="0"
        @change='completeTodo'
      /><br />
      <button @click="toggleEdit">Edit</button>
      <button @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {},
    deleteTodoItem: Function,
  },
  data() {
    return {
      item: {
        id: "",
        title: "",
        description: "",
        priority: "",
        completed: "",
      },
      edit: false,
    };
  },
  mounted() {
    this.item = this.todo;
  },
  methods: {
    deleteTodo() {
      this.deleteTodoItem(this.item);
    },
    toggleEdit() {
      this.edit = !this.edit;
    },
    editTodo() {
      this.$emit("edit-todo", this.item);
      this.toggleEdit();
    },
    completeTodo() {
        this.$emit('complete-todo',this.item)
    }
  },
};
</script>

<style>
.todo-item {
  display: inline-block;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 200;

  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.item-desc {
  height: 100px;
  width: 100%;
  text-align: center;
  font-size: 15px;
}
</style>