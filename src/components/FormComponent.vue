<template>
    <div class="form">
      <div v-for="(input, index) in inputs" :key="index" class="input">
        <label :for="input.name" class="p-sr-only">{{ input.label }}</label>
        <InputText :id="input.name" :placeholder="input.label" :value="values[input.name] || ''" @input="updateValue(input.name, $event.target.value)"/>
      </div>
      <ButtonComponent :css-class="buttonConfig.cssClass" :action-type="buttonConfig.actionType" @click="submitForm" ></ButtonComponent>

    </div>
  </template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "FormComponent",
  components: {
    ButtonComponent
  },
  props: {
    inputs: {
      type: Array,
      required: true,
      default: () => []
    },
    values: {
      type: Object,
      default: () => ({})
    },
    buttonConfig: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    updateValue(name, value) {
      this.$emit('input', { [name]: value });
    },
    submitForm() {
      this.$emit("submit");
    }
    }
}
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.input {
  padding: 10px;
}

Button {
  margin-top: 20px;
}

</style>