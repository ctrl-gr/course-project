<template>
  <TableComponent :title-page="pageTitle"
                  :headers="usersStore.getMapHeaderTable"
                  :items="usersStore.getUsers"
                  :actions="actions"
  >
  </TableComponent>
</template>


<script>
import TableComponent from "@/components/TableComponent";
import MyActionsConfig from "@/config/my-actions-config";
import {useUsersStore} from "@/store/modules/users";
import router from "@/router";


export default {
  name: "UsersView",
  components: {
    TableComponent
  },
  methods: {
    async deleteUser(rowData) {
      const userId = rowData.data.id
     await this.usersStore.deleteUser(userId)
    },

    editUser(rowData) {
      const user = rowData.data
      this.usersStore.setSelectedUser(user)
      router.push({
        name: 'UserForm',
          query: {
          user
        }
      })
    },
    newUser() {
      router.push({name: 'UserForm'})
    }
  },
  setup() {
    const usersStore = useUsersStore()
    return {usersStore}
  },
  mounted() {
    this.usersStore.getAllUsers()
  },
  data() {
    return {
      pageTitle: 'Users',
      actions: [
        {
          cssClass: "p-button-primary",
          method: this.newUser,
          actionType: MyActionsConfig.NEW_ROW
        },
        {
          cssClass: "p-button-warning",
          method: this.editUser,
          actionType: MyActionsConfig.EDIT
        },
        {
          cssClass: "p-button-danger",
          method: this.deleteUser,
          actionType: MyActionsConfig.DELETE
        }
      ]
  }
  }
}
</script>



<style scoped>

</style>