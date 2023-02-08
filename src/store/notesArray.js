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
    recalculatedId: 0,
  },
  mutations: {
    addNewNote(state, newNoteIndex) {
      state.noteList.push(newNoteIndex);
    },
    // editNotes(state, newNotes) {
    //   if (newNotes)
    //     state.noteList = state.noteList.filter((item) => {
    //       if (item.toLowerCase().indexOf(newNotes) !== -1) return item;
    //     });
    // },
    removeNote(state, selectedNoteIndex) {
      state.noteList.splice(selectedNoteIndex, 1);
      state.noteList = state.noteList.map((note) =>
        note.id < selectedNoteIndex ? note : { ...note, id: note.id - 1 }
      );
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
