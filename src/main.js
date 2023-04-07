import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import { createPinia } from 'pinia/dist/pinia'
import axios from 'axios'
import VueAxios from 'vue-axios';
import TableComponent from "@/components/TableComponent";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnFilter from "primevue/datatable";
import Menubar from "primevue/menubar";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext"
import i18n from "@/languages/i18n";

createApp(App)
    .component('Button', Button)
    .component('Table', TableComponent)
    .component('DataTable', DataTable)
    .component('Dropdown', Dropdown)
    .component('Column', Column)
    .component('ColumnFilter', ColumnFilter)
    .component('Navbar', Menubar)
    .component('InputText', InputText)
    .use(PrimeVue)
    .use(router)
    .use(i18n)
    .use(VueAxios, axios)
    .use(createPinia())

    .mount('#app')
