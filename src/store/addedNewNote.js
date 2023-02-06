/* eslint-disable */
export default {
  state: {
    addedNewNote: {
      id: 0,
      title: "",
      descr: "",
      date: new Date(Date.now()).toLocaleDateString(),
      type: 0,
    },
  },
  mutations: {
    setNewNote(state) {
      state.addedNewNote.title = "scs";
    },
  },
  actions: {
    setNewNote({ commit }) {
      commit("setNewNote");
    },
  },
  getters: {
    getNewNote(state) {
      return state.addedNewNote;
    },
  },
};
