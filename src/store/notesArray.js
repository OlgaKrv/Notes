export default {
  state: {
    noteList: [
      {
        id: 0,
        title: "Первая заметка",
        description:
          "Задачи с четкими дедлайнами, влияющие на последующую работу",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 0,
      },
      {
        id: 1,
        title: "Вторая заметка",
        description:
          "Задачи без четких сроков сдачи но влияющие на общий результат",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 1,
      },
      {
        id: 2,
        title: "Третья заметка",
        description:
          "Задачи, которые нужно сделать, но так как они не требуют ососбых" +
          " навыков, их можно делегировать",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 2,
      },
      {
        id: 3,
        title: "Четвертая заметка",
        description:
          "Активности, которые негативно сказываются на продуктивности",
        date: new Date(Date.now()).toLocaleDateString(),
        type: 3,
      },
    ],
  },
  mutations: {
    addNewNote(state, newNoteIndex) {
      state.noteList.push(newNoteIndex);
    },
    removeNote(state, selectedNoteIndex) {
      state.noteList.splice(selectedNoteIndex, 1);
      for (let i = 0; i + 1; i < state.noteList.length) {
        state.noteList[i].id = i;
      }
    },
  },
  actions: {
    removeNote({ commit }, selectedNoteIndex) {
      commit("removeNote", selectedNoteIndex);
    },
  },
  getters: {
    getAllNote(state) {
      return state.noteList;
    },
  },
};
