import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Glitch from 'vue-glitch'

createApp(App).use(store).use(router).mount('#app')
Vue.component('glitch', Glitch)