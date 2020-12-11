<template>
    <div class="todo-item">
        <form>
            <div>
                <label for="title">Title: </label>
                <input type="text" name="title" id="title" v-model="title" :readonly='edit'>
            </div>
            <div>
                <input class="item-desc" type="text" name="description" id="description" :readonly='edit' v-model="description">
            </div>
            <div>
                <label for="pririty">Priority: </label>
                <input type="text" name="priority"  id="priority" :readonly='edit' v-model="priority">
            </div>
            <div>
                <label for="description">Complete: </label>
                <input type="checkbox" name="completed" id="completed" v-model="completed">
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        todo: {}
    },
    data() {
        return{
            title: '',
            description: '',
            priority: '',
            completed: '',
            edit: true
        }
    },
    mounted(){
        this.title = this.todo.title
        this.description = this.todo.description
        this.priority = this.todo.priority
        this.completed = this.todo.completed
    }
}
</script>

<style>
.todo-item {
  display:inline-block;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 200;

  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.item-desc{
    height: 100px;
    width: 100%;
    text-align: center;
}
</style>