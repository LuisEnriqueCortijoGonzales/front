import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

const store = createStore({
  state() {
    return {
      // Definir tu estado aquí
    };
  },
  mutations: {
    // Definir tus mutaciones aquí
  },
  actions: {
    // Definir tus acciones aquí
  },
  getters: {
    // Definir tus getters aquí
  }
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
