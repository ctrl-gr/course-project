<template>
  <div>
    <Button :class="cssClass" :icon="icon" @click="handleClick"> {{ buttonText }}</Button>
  </div>
</template>

<script>
import Button from "primevue/button";
import MyActionsConfig from "@/config/my-actions-config";

export default {
  name: "ButtonComponent",
  components: {
    Button: Button
  },
  props: {
    cssClass: String,
    icon: String,
    actionType: String,
    row: Object
  },

  computed: {
    buttonText() {
      switch (this.actionType) {
        case MyActionsConfig.EDIT:
          return this.$t("edit");
        case MyActionsConfig.DELETE:
          return this.$t("delete");
        case MyActionsConfig.APPROVE:
          return this.$t("approve");
        case MyActionsConfig.NEW_ROW:
          return this.$t("new");
        case MyActionsConfig.SAVE:
          return this.$t("save");
        case MyActionsConfig.REJECT:
          return this.$t("reject");
        default:
          return this.actionType;
      }
    }
  },
  methods: {
    handleClick() {

      if (this.actionType && this.row) {
        switch (this.actionType) {
          case MyActionsConfig.EDIT:
            this.$emit("edit-row", this.row);
            break;
          case MyActionsConfig.DELETE:
            this.$emit("delete-row", this.row);
            break;
          case MyActionsConfig.APPROVE:
            this.$emit("approve-row", this.row);
            break;
          case MyActionsConfig.NEW_ROW:
            this.$emit("new-row");
            break;
          case MyActionsConfig.SAVE:
            this.$emit("save", this.row);
            break;
          case MyActionsConfig.REJECT:
            this.$emit("reject", this.row);
            break;
          default:
            if (typeof this.actionType === "function") {
              this.actionType();
            }
            break;
        }
      }
    }
  }

}
</script>
<style scoped>

</style>