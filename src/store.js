import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    }
  },
  actions: {
    // Puedes agregar acciones adicionales aquí si es necesario
  },
  getters: {
    // Puedes agregar getters adicionales aquí si es necesario
  }
});

