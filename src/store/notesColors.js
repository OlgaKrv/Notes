export default {
  state: {
    colors: [
      { value: 1, color: "#76d589" },
      { value: 2, color: "#64d2da" },
      { value: 3, color: "#e8ce86" },
      { value: 4, color: "#e48c8c" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getСolorForNeed(state, num) {
      return state.colors[num].value;
    },
    getСolorForPostponing(state) {
      return state.colors[1].value;
    },
    getСolorForDelegation(state) {
      return state.colors[2].value;
    },
    getСolorForRemoval(state) {
      return state.colors[3].value;
    },
  },
};
