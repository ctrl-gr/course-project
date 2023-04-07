<script>
import TableComponent from "@/components/TableComponent";
import {useTodosStore} from "@/store/modules/todos";
import MyActionsConfig from "@/config/my-actions-config";
import router from "@/router";

export default {
  name: "TodosView",
  components: {
    TableComponent
  },

  methods: {
    deleteTodo(rowData) {
      const todoId = rowData.data.id
      this.todosStore.deleteTodo(todoId)
    },

    editTodo(rowData) {
      const todo = rowData.data
      this.todosStore.setSelectedTodo(todo)
      router.push({
        name: 'TodoForm',
        query: {
          todo
        }
      })
    },

    newTodo() {
      router.push({name: 'new-todo'})
    }
  },
  setup() {
    const todosStore = useTodosStore()
    return {todosStore}
  },
  mounted() {
    this.todosStore.getAllTodos()
  },

  data() {
    return {
      pageTitle: 'ToDos',
      actions: [
        {
          cssClass: "p-button-primary",
          method: this.newTodo,
          actionType: MyActionsConfig.NEW_ROW
        },
        {
          cssClass: "p-button-warning",
          method: this.editTodo,
          actionType: MyActionsConfig.EDIT
        },
        {
          cssClass: "p-button-danger",
          method: this.deleteTodo,
          actionType: MyActionsConfig.DELETE
        }
      ]
    }
  }
}
</script>

<template>
  <TableComponent :title-page="pageTitle"
                  :headers="todosStore.getMapHeaderTable"
                  :items="todosStore.getTodos"
                  :actions="actions"
  >
  </TableComponent>
</template>

<style scoped>

</style>