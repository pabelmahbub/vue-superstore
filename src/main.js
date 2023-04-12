import { createApp } from 'vue'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import Vuex from 'vuex';
import { storage } from './store';

const app = createApp(App)

const store = new Vuex.Store(storage)

app.use(store)
app.use(router)
app.use(Vuex)
app.mount('#app')
