<template>
  <div class="language-selector">
    <select v-model="locale" @change="changeLocale">
      <option value="en">English</option>
      <option value="it">Italiano</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      locale: this.$i18n.locale,
    };
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = this.locale;
    }
  }
}
</script>

<style scoped>
.language-selector {
  padding: 10px;
  display: flex;
  float: right;
}
</style>