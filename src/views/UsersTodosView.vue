<template>
  <TableComponent :title-page="pageTitle"
                  :headers="tableHeaders"
                  :items="crossedData"
                  :actions="actions"
  >
  </TableComponent>
</template>

<script>

import TableComponent from "@/components/TableComponent";
import {useUsersStore} from "@/store/modules/users";
import {useTodosStore} from "@/store/modules/todos";
import MyActionsConfig from "@/config/my-actions-config";

export default {

  name: "UsersTodosView",
  components: {
    TableComponent
  },

  setup() {
    const usersStore = useUsersStore()
    const todosStore = useTodosStore()

    /*
    const usersTodos = []

    usersStore.getUsers.forEach(user => {
      const userTodos = todosStore.getTodos.filter(todo => todo.userId === user.id)
      userTodos.forEach(todo => {
        usersTodos.push({
          userId: user.id,
          username: user.username,
          todoTitle: todo.title,
          isCompleted: todo.completed
        })
      })
    })

     */

    return {
      usersStore, todosStore
    }

  },

  mounted() {
    this.getCrossedData()
  },
  data() {
    return {
      pageTitle: 'Todos and Users',

      tableHeaders: [
        {field: "username", header: "Username"},
        {field: "todo.title", header: "ToDo title"},
        {field: "todo.completed", header: "Is Completed"}
      ],

      crossedData: [],

      actions: [
        {
          cssClass: "p-button-primary",
          method: this.newUser,
          actionType: MyActionsConfig.NEW_ROW
        },
        {
          cssClass: "p-button-success",
          method: this.approveTodo,
          actionType: MyActionsConfig.APPROVE
        },
        {
          cssClass: "p-button-danger",
          method: this.rejectTodo,
          actionType: MyActionsConfig.REJECT
        }
      ]
    }
  },
  methods: {
    rejectTodo() {
      console.log('todo rejected')
    },

    approveTodo() {
      console.log('todo approved')
    },
    getCrossedData() {
      let usersCall = this.usersStore.getAllUsers()
      let todosCall = this.todosStore.getAllTodos()
      let allCall = [usersCall, todosCall]
      Promise.all(allCall)
          .then(() => {
            this.crossedData = this.usersStore.users.map(user => {
              return {
                username: user.username,
                todo: this.todosStore.todos.find(todo => todo.userId === user.id)
              }
            })
          })
    }
  }
}

</script>

<style scoped>

</style>