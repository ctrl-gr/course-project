<template>
  <FormComponent :inputs="inputs" :values="todo" :buttonConfig="buttonConfig" @input="updateTodo" @submit="handleSubmit" ref="myForm"></FormComponent>
</template>

<script>
import FormComponent from "@/components/FormComponent";
import MyActionsConfig from "@/config/my-actions-config";
import {useTodosStore} from "@/store/modules/todos";

export default {
  name: "NewTodoView",
  components: {FormComponent},
  methods: {
    editTodo(todo) {
      console.log(todo)
      useTodosStore().editTodo(todo)
    },

    createTodo(todo) {
      useTodosStore().createTodo(todo)
    },
    handleSubmit() {
      const actionType = this.buttonConfig.actionType;
      const todo = this.todo;
      if (actionType === MyActionsConfig.EDIT) {
        this.editTodo(todo);
      } else {
        this.createTodo(todo);
      }
    },
    updateTodo(data) {
      this.todo = { ...this.todo, ...data };
    },
  },

  computed: {
    buttonConfig() {
      if (this.todo && this.todo.todoId) {
        return {
          cssClass: "p-button-warning",
          method: this.editTodo,
          actionType: MyActionsConfig.EDIT
        }
      } else {
        return {
          cssClass: "p-button-primary",
          method: this.createTodo,
          actionType: MyActionsConfig.SAVE
        }
      }
    }
  },
  data() {
    return {
      inputs: [
        {name: 'title', label: this.$t('ToDo title')},
        {name: 'userId', label: this.$t('User Id')},
          ],
      todo: {
        todoId: '', // in teoria si generano automaticamente
        title: '',
        userId: ''
      },
    }
  },
  created() {
    const selectedTodo = useTodosStore().selectedTodo;

    if (selectedTodo) {
      this.todo.title = selectedTodo.title
      this.todo.userId = selectedTodo.userId
      this.todo.todoId = selectedTodo.id

      useTodosStore().setSelectedTodo(null)
    }

  },

}
</script>

<style scoped>

</style>