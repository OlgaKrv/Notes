/* eslint-disable */
export default {
  state: {
    isNoteTitleEmpty: false,
    addedNewNote: {
      id: 0,
      title: "",
      description: "",
      date: new Date(Date.now()).toLocaleDateString(),
      type: 0,
    },
  },
  mutations: {
    filledTitle(state, payload) {
      if(payload == "")
      state.isNoteTitleEmpty = true
      else
      state.isNoteTitleEmpty = false
    },
  },
  actions: {
    filledTitle({ commit }, payload) {
      commit("filledTitle", payload);
    },
  },
  getters: {
    getNewNote(state) {
      return state.addedNewNote;
    },
    getTitleState(state) {
      return state.isNoteTitleEmpty;
    },
  },
};
