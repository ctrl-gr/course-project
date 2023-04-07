<template>
  <h1>{{$t(titlePage)}}</h1>
  <div class="new-button">
    <ButtonComponent v-for="action in actions.filter(a => a.actionType === 'new-row')" :key="action.text" @click="action.method(rowData)" :action-type="action.actionType" :css-class="action.cssClass"></ButtonComponent>
  </div>
  <DataTable :value="items" :paginator="true" :filter="true" :rows="7" tableStyle="min-width: 50rem" responsiveLayout="scroll">
    <Column v-for="col of headers" :key="col.field" :field="col.field" :header="$t(col.header)" :filter="true">
    </Column>
    <Column field="actions" :header="$t('Actions')">
      <template #body="rowData">
        <div class="actions-buttons">
          <ButtonComponent v-for="action in actions.filter(a => a.actionType !== 'new-row')" :key="action.text" @click="action.method(rowData)" :action-type="action.actionType" :css-class="action.cssClass"></ButtonComponent>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script>


import ButtonComponent from "@/components/ButtonComponent";


export default {
  name: "TableComponent",
  components: {
    ButtonComponent,
  },
  props: {
    titlePage: String,
    headers: Array,
    items: Array,
    actions: Array
  }

}
</script>

<style scoped>
.new-button {
  display: flex;
  padding: 15px;
}
.actions-buttons {
  display: flex;
  column-gap: 10px;
  padding: 10px;
}

</style>