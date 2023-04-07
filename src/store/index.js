import {defineStore} from "pinia";
import axios from "axios";

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        items: [],
        mapHeaderTable: [
            {field: "name", header: "Nome"},
            {field: "email", header: "Email"}
        ]
    }),
    getters: {
        getItems: (state) => state.items,
        getMapHeaderTable: (state) => state.mapHeaderTable,
    },
    actions: {
        async getAllItems() { // chiamata asincrona, attende il contenuto della risposta. Per far si che funzioni, prima della chiamata di axios, bisogna mettere l'await
            await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
                .then(response => {
                    this.items = response.data
                    console.log(response)
                })
                .catch(err => console.log(err))
        }
    }
})