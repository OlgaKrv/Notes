import Vue from "vue";
import Vuex from "vuex";
import notesArray from "./notesArray";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notesArray,
  },
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
