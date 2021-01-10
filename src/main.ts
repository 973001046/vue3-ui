import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// @ts-nocheck
import component from './packages/button/index'
// import { Vue } from 'vue-class-component'

createApp(App)
  .use(store)
  .use(router)
  .use(component)
  .mount('#app')
