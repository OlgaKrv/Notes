import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "текст сообщения store",
  },
  mutations: {},
  actions: {},
  getters: {
    getMes(state) {
      return state.message;
    },
  },
});
