export default {
  state: {
    noteList: [
      {
        id: 0,
        title: "Первая заметка",
        descr: "Задачи с четкими дедлайнами, влияющие на последующую работу",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 0,
      },
      {
        id: 1,
        title: "Вторая заметка",
        descr: "Задачи без четких сроков сдачи но влияющие на общий результат",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 1,
      },
      {
        id: 2,
        title: "Третья заметка",
        descr:
          "Задачи, которые нужно сделать, но так как они не требуют ососбых" +
          " навыков, их можно делегировать",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 2,
      },
      {
        id: 3,
        title: "Четвертая заметка",
        descr: "Активности, которые негативно сказываются на продуктивности",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 3,
      },
    ],
  },
  mutations: {
    getNewNote(state, payload) {
      state.noteList.push({
        payload,
      });
    },
  },
  actions: {
    getNewNote({ commit }, payload) {
      commit("getNewNote", payload);
    },
  },
  getters: {
    getNoteList(state) {
      return state.noteList;
    },
  },
};
