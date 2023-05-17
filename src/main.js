import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import VueRouter from 'vue-router';
import router from './router'
// import router from 'vue-router';
import App from './App.vue'
// Vuetify
import vuetify from './plugins/vuetify'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetifys = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
// app.use(vuetify)
app.use(vuetifys)
app.mount('#app')