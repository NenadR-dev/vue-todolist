<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3 name="header">Create new todo</h3>
          </div>

          <div class="modal-body">
            <div name="body">
              <form v-on:submit.prevent>
                <div>
                  <label for="title">Title: </label>
                  <input type="text" name="title" id="title" v-model="title" />
                </div>
                <div>
                  <label for="description">Desc: </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    v-model="description"
                  />
                </div>
                <div>
                  <label for="priority">Priority: </label>
                  <select name="priority" id="priority" v-model="priority">
                    <option disabled value="">Please select one</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('handle-modal')">Close</button>
              <button class="modal-default-button" @click="createTodo">Add</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { addTodo } from "../service/TodoService.js";
export default {
  data() {
    return {
        title: '',
        description: '',
        priority: '',
    };
  },
  props: {
    showModal: Boolean
  },
  methods: {
    async createTodo() {
      this.$emit('handle-new-todo', await addTodo({
            title: this.title,
            description: this.description,
            priority: this.priority
        }))
    }
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
