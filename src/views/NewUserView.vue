<template>
  <FormComponent :inputs="inputs" :values="user" :buttonConfig="buttonConfig" @input="updateUser" @submit="handleSubmit" ref="myForm"></FormComponent>
</template>

<script>
import FormComponent from "@/components/FormComponent";
import {useUsersStore} from "@/store/modules/users";
import MyActionsConfig from "@/config/my-actions-config";


export default {
  name: "NewUserView",
  components: {FormComponent},
  methods: {
     editUser(user) {
     useUsersStore().editUser(user)
    },
    createUser(user) {
      useUsersStore().createUser(user)
    },
    handleSubmit() {
      const actionType = this.buttonConfig.actionType;
      const user = this.user;
      if (actionType === MyActionsConfig.EDIT) {
        this.editUser(user);
      } else {
        this.createUser(user);
      }
    },
    updateUser(data) {
      this.user = { ...this.user, ...data };
    },
  },

  computed: {
    buttonConfig() {
      if (this.user && this.user.id) {
        return {
          cssClass: "p-button-warning",
          method: this.editUser,
          actionType: MyActionsConfig.EDIT
        }
      } else {
        return {
          cssClass: "p-button-primary",
          method: this.createUser,
          actionType: MyActionsConfig.SAVE
        }
      }
    }
  },
  data() {
    return {
      inputs: [
        {name: 'username', label: 'Username'},
        {name: 'email', label: 'Email'},
        {name: 'phone', label: 'Phone'}
      ],
      user: {
        username: '',
        email: '',
        phone: ''
      },
    }
  },
  created() {
    const selectedUser = useUsersStore().selectedUser;
    if (selectedUser) {
            this.user.id = selectedUser.id
            this.user.username = selectedUser.username
            this.user.email = selectedUser.email
            this.user.phone = selectedUser.phone
      useUsersStore().setSelectedUser(null)
    }
  },

}
</script>

<style scoped>

</style>