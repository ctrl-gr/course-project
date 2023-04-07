<template>
    <Navbar :model="menuItems" :item-template="menuItemTemplate">
      <li class="dropdown">
        <Dropdown v-if="dropdownItems" :model="dropdownItems" :options="dropdownItems.optionLabel"  />
      </li>
    </Navbar>
</template>
<script>


import Dropdown from "primevue/dropdown";

export default {
  name: 'NavbarComponent',
  components: {
    Dropdown,
  },
  props: {
    items: Array,
    dropdownItems: Array
  },

  data() {
    return {
      selectedItem: null
    }
  },
  computed: {
    menuItems() {
      return this.items.map(item => {
        return {
          label: item.name,
          to: item.path
        };
      });
    }
  },
  methods: {
    menuItemTemplate(item) {
      return (
          <li>
            <RouterLink to={item.to} exact>
              <span class="nav-text">item.label</span>
            </RouterLink>
          </li>
      );
    },

  }
};
</script>

<style>
navbar {
  padding: 0;
}

.p-dropdown .p-dropdown-trigger {
  background-color: #F0F0F0;
  border: none;
}

.p-dropdown .p-dropdown-trigger:hover {
  background-color: #E6E6E6;
  border: none;
}

.p-dropdown .p-dropdown-items {
  background-color: #F0F0F0;
  border: none;
  color: #333;
}

.p-dropdown .p-dropdown-items .p-dropdown-item {
  padding: .5rem;
  border-bottom: 1px solid #D9D9D9;
}

.p-dropdown .p-dropdown-items .p-dropdown-item:last-child {
  border-bottom: none;
}

.p-dropdown .p-dropdown-items .p-dropdown-item:hover {
  background-color: #E6E6E6;
}
</style>