/* eslint-disable */
export default {
  state: {
    isNoteTitleEmpty: false,
  },
  mutations: {
    filledTitle(state, titleText) {
      if(titleText == "")
      state.isNoteTitleEmpty = true
      else
      state.isNoteTitleEmpty = false
    },
  },
  actions: {
    // filledTitle({ commit }, payload) {
    //   commit("filledTitle", payload);
    // },
  },
  getters: { 
    getTitleState(state) {
      return state.isNoteTitleEmpty;
    },
  },
};
