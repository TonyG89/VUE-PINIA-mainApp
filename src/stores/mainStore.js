import { defineStore } from 'pinia';

const defaultMainStore = {
    allBreweries: [],
    breweriesOnPage: [],
    isLoading: true,
}

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        allBreweries: defaultMainStore.allBreweries,
        breweriesOnPage: defaultMainStore.breweriesOnPage,
        isLoading: defaultMainStore.isLoading,
    }),
    actions: {
        async getAllBreweries() {
            const url = "https://api.openbrewerydb.org/breweries";
            const response = await fetch(url)
            this.allBreweries = await response.json()
            return this.allBreweries
        },
        async getBreweriesOnPage(size = 10) {
            const url = `https://api.openbrewerydb.org/breweries/random?size=${size}`;
            const response = await fetch(url)
            this.breweriesOnPage = await response.json()
            console.log(this.breweriesOnPage);
        }
    }
})