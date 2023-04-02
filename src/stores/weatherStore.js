import { defineStore } from 'pinia';

const keyApi = bc2e8f247d1e494fb9c151326231603

export const useWeatherStore = defineStore('weatherStore', {
    state: () => ({
        weather: {},
    }),
    actions: {
        async getWeather(city = "Kyiv", days = 1) {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${keyApi}/&q=${city}&days=${days}&aqi=no&alerts=no`
            const response = await fetch(url)
            this.weather = await response.json()
        }
    }
})