import Vue from "vue";
import Vuex from "vuex";
import notesArray from "./notesArray";
import notesColors from "./notesColors";
import addedNewNote from "./addedNewNote";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notesArray,
    notesColors,
    addedNewNote,
  },
  state: {
    message: "Заголовок не может быть пустым!",
  },
  mutations: {},
  actions: {},
  getters: {
    getMes(state) {
      return state.message;
    },
  },
});
