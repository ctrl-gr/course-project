<template>
  <NavbarComponent :items="pages" :dropdown-items="dropdownPages"></NavbarComponent>
  <LanguageSwitcher></LanguageSwitcher>
  <RouterView></RouterView>
</template>
<script>

import NavbarComponent from "@/components/NavbarComponent";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default {
  name: 'App',
  components: {
    LanguageSwitcher,
    NavbarComponent
  },
  data() {
    return {
      pages: [
        { name: 'Homepage', path: '/'},
        { name: 'Users', path: '/users'},
        { name: 'Todos', path: '/todos'},
        { name: 'New User', path: '/new-user'},
        { name: 'New Todo', path: '/new-todo'},
        { name: 'Users and Todos', path: '/todos-users'},
      ],
      dropdownPages: [{
        label: 'Users',
        options: [
          {label: 'Users', path: '/users'},
          {label: 'New User', path: '/new-user'},
        ]
      }
      ]
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
