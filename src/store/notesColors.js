export default {
  state: {
    colors: [
      { value: 0, color: "#76d589" },
      { value: 1, color: "#64d2da" },
      { value: 2, color: "#e8ce86" },
      { value: 3, color: "#e48c8c" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getСolorForNeed: (state) => (num) => {
      return state.colors[num].color;
    },
  },
};
