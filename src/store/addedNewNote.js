/* eslint-disable */
export default {
  state: {
    isNoteTitleEmpty: false,
    prioritySelectedNote: 0,
  },
  mutations: {
    filledTitle(state, titleText) {
      if(titleText == "")
      state.isNoteTitleEmpty = true
      else
      state.isNoteTitleEmpty = false
    },
    selectNotePriority(state, numberSelectedPriorities) {
      state.prioritySelectedNote = numberSelectedPriorities
    }
  },
  getters: { 
    isNoteTitleEmpty(state) {
      return state.isNoteTitleEmpty;
    },
    getPrioritySelectedNote(state) {
      return state.prioritySelectedNote;
    },
  },
};
